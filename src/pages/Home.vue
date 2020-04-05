<template>
  <div class="Home">
    <Intro/>
    <section class="box box--m">
      <div class="box__header">
        <h2 class="box__title">Catalogue</h2>
      </div>
      <div class="box layout layout--inner">
        <div class="box__header">
          <nav class="nav">
            <router-link to="/" class="nav__item">Soap collection</router-link>
            <router-link to="/" class="nav__item">Creme collection</router-link>
            <router-link to="/" class="nav__item">Body collection </router-link>
            <router-link to="/" class="nav__item">Sale</router-link>
          </nav>
        </div>
        <div class="box__content">
          <div class="wrap">
            <div class="card card--vertical wrap__item wrap__item--l wrap__indent--l">
              <div class="card__pic">
                <img src="../assets/img/products/herbivore-pink-clay.jpg" alt="">
              </div>
              <div class="card__content card__content--flex card__content--top">
                <h4 class="card__title">Herbivore PINK CLAY</h4>
                <div class="card__price">$&nbsp;13</div>
                <button class="card__buy">buy</button>
              </div>
            </div>
            <div class="card card--vertical wrap__item">
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
        <div class="wrap card">
          <div class="wrap__item wrap__item--xl wrap__indent--s">
            <div class="card__pic">
              <img src="../assets/img/products/herbivore-pink-cloud.jpg" alt="">
            </div>
          </div>
          <div class="wrap__item">
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
      <div class="layout layout--inner box__content">
        <div class="wrap wrap--row">
          <div class="wrap__item wrap__item--xs wrap__indent--s card card--vertical">
            <div class="card__pic card__pic--stick">
              <img src="../assets/img/products/kylieskin-body-lotion.jpg" alt="">
            </div>
            <div class="card__btn card__btn--bottom">
              <router-link to="/" class="btn">Shop now</router-link>
            </div>
          </div>
          <div class="wrap__item card card--vertical">
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
          <div class="wrap__item wrap__item--m card">
            <div class="card__pic card__pic--top">
              <img src="../assets/img/products/honest-cleanser-gel.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Intro from "../components/Intro";

  export default {
    name: 'Home',
    components: {
      Intro
    },
    data() {
      return {}
    }
  }
</script>

