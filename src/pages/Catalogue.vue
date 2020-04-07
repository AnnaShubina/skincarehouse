<template>
  <div class="_Catalogue">
    <section class="box">
      <div class="breadcrumbs">
        <div class="breadcrumbs__back">
          <router-link to="/" class="breadcrumbs__link">
            <BackSvg/>
            back
          </router-link>
        </div>
        <div class="breadcrumbs__item">
          catalogue
        </div>
        <div class="breadcrumbs__item active">
          soap collection
        </div>
      </div>
      <div class="box__header text-center">
        <h2 class="box__title">Catalogue</h2>
      </div>
      <div class="box__content layout layout--inner">
        <div class="box box--s">
          <div class="box__header">
            <nav class="nav">
              <router-link to="/Catalogue" class="nav__item active">Soap collection</router-link>
              <router-link to="/" class="nav__item" disabled>Creme collection</router-link>
              <router-link to="/" class="nav__item" disabled>Body collection </router-link>
              <router-link to="/" class="nav__item" disabled>Sale</router-link>
            </nav>
          </div>
          <div class="cells cells--between">
            <div class="card card--vertical cell__9">
              <div class="card__pic">
                <img src="../assets/img/products/herbivore-pink-clay.jpg" alt="">
              </div>
              <div class="card__content card__content--flex card__content--top">
                <h4 class="card__title">Herbivore PINK CLAY</h4>
                <div class="card__price card__price--s">$&nbsp;13</div>
                <button class="btn">Shop now</button>
              </div>
            </div>
            <div class="card card--vertical cell__4-indent">
              <div class="card__pic">
                <img src="../assets/img/products/church-farm-rose.jpg" alt="">
              </div>
              <div class="card__content card__content--flex card__content--top">
                <h4 class="card__title">Church Farm Rose</h4>
                <div class="card__price card__price--s">$&nbsp;13</div>
                <button class="btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="box box--m">
          <div class="cells cells--between">
            <div class="card card--vertical cell__8">
              <div class="card__pic card__pic--top-m">
                <img src="../assets/img/products/church-farm-lemon-myrtle.jpg" alt="">
              </div>
              <div class="card__content card__content--flex card__content--top">
                <h4 class="card__title">Church Farm Lemon Myrtle</h4>
                <div class="card__price card__price--s">$&nbsp;10</div>
                <button class="btn">Shop now</button>
              </div>
            </div>
            <div class="card card--vertical cell__6-indent">
              <div class="card__pic">
                <img src="../assets/img/products/church-farm-rose.jpg" alt="">
              </div>
              <div class="card__content card__content--flex card__content--top">
                <h4 class="card__title">Herbivore Blue CLAY</h4>
                <div class="card__price card__price--s">$&nbsp;13</div>
                <button class="btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="box box--m">
          <div class="cells card">
            <div class="cell__12 indent__right">
              <div class="card__pic">
                <img src="../assets/img/products/hallo-sapa-icelandic-moss.jpg" alt="">
              </div>
            </div>
            <div class="card">
              <div class="card__content card__content--vertical card__content--bottom">
                <h4 class="card__title">Hallo Sapa Icelandic Moss</h4>
                <div class="card__price">$&nbsp;20</div>
                <button class="btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BackSvg from '../assets/img/icons/back.svg'

  export default {
    name: 'Catalogue',
    components: {
      BackSvg
    },
    data() {
      return {}
    }
  }
</script>
