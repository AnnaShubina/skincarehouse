<template>
  <div class="_ProductFilter">
    <div class="cells cells--between cell--wrap cardGroups">
      <div class="card" v-for="item in productList"
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

</template>

<script>
  export default {
    name: "ProductList",
    props: {
      productList: {
        type: Array,
        default() {
          return []
        }
      },
    },
    components: {

    },
    data() {
      return {

      }
    },
    methods: {
      resolveImgToUrl(path) {
        let images = require.context('../assets/img/products', false, /\.png$|\.jpg$/);
        return images("./"+path)
      },
    }
  }
</script>
