<template>
  <div class="_Home">
    <Intro @goTo="onClickDown"/>
    <section class="box box--m" ref="catalogue">
      <div class="box__number">02/05</div>
      <div class="box__header">
        <h2 class="box__title">Catalogue</h2>
      </div>
      <div class="box layout layout--inner">
        <div class="box__header">
          <nav class="nav">
            <router-link to="/Catalogue" class="nav__item">Soap collection</router-link>
            <router-link to="/" class="nav__item">Creme collection</router-link>
            <router-link to="/" class="nav__item">Body collection </router-link>
            <router-link to="/" class="nav__item">Sale</router-link>
          </nav>
        </div>
        <div class="box__content">
          <div class="cells cells--between">
            <div class="card card--vertical cell__9">
              <div class="card__pic">
                <img src="../assets/img/products/herbivore-pink-clay.jpg" alt="">
              </div>
              <div class="card__content card__content--flex card__content--top">
                <h4 class="card__title">Herbivore PINK CLAY</h4>
                <div class="card__price">$&nbsp;13</div>
                <button class="card__buy">buy</button>
              </div>
            </div>
            <div class="card card--vertical cell__6">
              <div class="card__pic">
                <img src="../assets/img/products/holla-sapa-icelandic-moss.jpg" alt="">
              </div>
              <div class="card__content card__content--flex card__content--top">
                <h4 class="card__title">Hallo Sapa Icelandic Moss</h4>
                <div class="card__price">$&nbsp;10</div>
                <button class="card__buy">buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="box box--m">
      <div class="box__header">
        <h2 class="box__title">New arrivals</h2>
      </div>
      <div class="layout layout--inner box__content">
        <div class="cells card">
          <div class="cell__11 indent--right">
            <div class="card__pic">
              <img src="../assets/img/products/herbivore-pink-cloud.jpg" alt="">
            </div>
          </div>
          <div class="card">
            <div class="card__content card__content--vertical card__content--bottom">
              <h4 class="card__title">Herbivore Pink Cloud</h4>
              <div class="card__price">$&nbsp;20</div>
              <button class="card__buy">buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box box--m">
      <div class="box__number">03/05</div>
      <div class="layout layout--inner box__content">
        <div class="cells">
          <div class="cell__5 indent--right card card--vertical">
            <div class="card__pic card__pic--stick">
              <img src="../assets/img/products/kylieskin-body-lotion.jpg" alt="">
            </div>
            <div class="card__btn card__btn--bottom">
              <router-link to="/" class="btn">Shop now</router-link>
            </div>
          </div>
          <div class="card card--vertical">
            <div class="card__content card__content--vertical">
              <h4 class="card__title">Herbivore Pink Cloud</h4>
              <div class="card__price">$&nbsp;17</div>
              <button class="card__buy">buy</button>
            </div>
            <div class="card__content card__content--vertical card__content--right mt-auto">
              <h4 class="card__title">Honest Cleanser Gel</h4>
              <div class="card__price">$&nbsp;15</div>
              <button class="card__buy">buy</button>
            </div>
          </div>
          <div class="cell__8 card card--ml-auto">
            <div class="card__pic card__pic--top">
              <img src="../assets/img/products/honest-cleanser-gel.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box box--m">
      <div class="box__number">04/05</div>
      <div class="box__header">
        <h2 class="box__title">Sale</h2>
      </div>
      <div class="layout layout--inner box__content">
        <div class="cells card">
          <div class="cell__7">
            <div class="card__pic">
              <img src="../assets/img/products/hb-soap-trio.jpg" alt="">
            </div>
          </div>
          <div class="cell__1"></div>
          <div class="card card--sale">
            <div class="card__content">
              <h4 class="card__title">Get 3 for price of 2</h4>
              <div class="card__caption">Pink Clay, Blue Clay and Bamboo Charcoal <br> in one set. Try now while offer is available!</div>
              <div class="card__footer">
                <router-link to="/" class="btn">Try now</router-link>
              </div>
            </div>
            <div class="card__pic">
              <img src="../assets/img/sale.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box box--m">
      <div class="box__number">05/05</div>
      <div class="box__header box__header--m text-center">
        <h2 class="box__title box__title--top">Let’s keep in touch</h2>
        <div class="box__subTitle">If you would like to get information about sales and arrivals <br> you can leave your e-mail in the form below.</div>
      </div>
      <div class="box__content">
        <SubscribeForm/>
      </div>
    </div>
  </div>
</template>

<script>
  import Intro from "../components/Intro";
  import SubscribeForm from "../components/SubscribeForm";

  export default {
    name: 'Home',
    components: {
      SubscribeForm,
      Intro
    },
    data() {
      return {}
    },
    methods: {
      onClickDown() {
        let target = this.$refs.catalogue;
        if (target) {
          let pos = target.offsetTop;
          window.scrollTo({
            top: pos - 20,
            left: 0,
            behavior: 'smooth'
          });
        }
      },
    }
  }
</script>

