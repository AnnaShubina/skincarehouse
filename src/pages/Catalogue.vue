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
              <router-link to="/" class="nav__item" disabled>Body collection</router-link>
              <router-link to="/" class="nav__item" disabled>Sale</router-link>
            </nav>
          </div>
          <div class="cells cells--between cell--wrap cardGroups">
            <div class="card" v-for="item in products"
                 :v-key="item.id"
                 :class="{
                  'card--vertical': item.size !== 'xl',
                  'cell__9': item.size === 'l',
                  'cell__4-indent': item.size === 'xs',
                  'cell__8': item.size === 'm',
                  'cell__6-indent': item.size === 's',
                  'cells': item.size === 'xl',
                  'card--top-s': item.size === 'xl',
                  'card--top-m': item.size === 'm',
                }">
              <div class="card__pic" :class="{
                  'indent--right': item.size === 'xl',
                  'cell__12': item.size === 'xl',
                }">
                <img :src="resolveImgToUrl(`${item.id}.jpg`)" alt="">
              </div>
              <div class="card__content" :class="{
                  'card__content--flex': item.size !== 'xl',
                  'card__content--top': item.size !== 'xl',
                  'card__content--vertical': item.size === 'xl',
                  'card__content--bottom': item.size === 'xl',
                }">
                <h4 class="card__title">{{ item.title }}</h4>
                <div class="card__price card__price--s">$&nbsp;{{ item.price }}</div>
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
  import {mapState} from 'vuex'

  export default {
    name: 'Catalogue',
    components: {
      BackSvg
    },
    data() {
      return {}

    },
    computed: {
      ...mapState('products', {
        allProducts: state => state.products,
      }),
      products() {
        return this.allProducts.filter(({category}) => category === 'soap')
      }
    },
    methods: {
      resolveImgToUrl(path) {
        let images = require.context('../assets/img/products', false, /\.png$|\.jpg$/);
        return images("./"+path)
      }
    }
  }
</script>
