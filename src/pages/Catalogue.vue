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
          <div class="box__filter">
            <CatalogueFilter @accept="filterProducts"/>
          </div>
          <div class="box__header">
            <nav class="nav">
              <router-link to="/Catalogue" class="nav__item active">Soap collection</router-link>
              <router-link to="/" class="nav__item" disabled>Creme collection</router-link>
              <router-link to="/" class="nav__item" disabled>Body collection</router-link>
              <router-link to="/" class="nav__item" disabled>Sale</router-link>
            </nav>
          </div>
          <ProductList :productList="products" v-if="!isFiltered"/>
          <ProductList :productList="filteredProducts" v-if="isFiltered"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BackSvg from '../assets/img/icons/back.svg'
  import {mapState} from 'vuex'
  import CatalogueFilter from "../components/Filter";
  import ProductList from "../components/ProductList";

  export default {
    name: 'Catalogue',
    components: {
      ProductList,
      CatalogueFilter,
      BackSvg,
    },
    data() {
      return {
        category: this.$route.params.id,
        filteredProducts: [],
        isFiltered: false
      }

    },
    computed: {
      ...mapState('products', {
        allProducts: state => state.products,
      }),
      products() {
        return this.allProducts[this.category]
      }
    },
    methods: {
      filterProducts(value) {
        let brand = value.brand ? value.brand.id : null;
        let price =  value.price ? value.price.value : null;
        if (brand || price) {
         this.filteredProducts = this.products.filter(product => (
           (!brand || brand === product.brand) && (!price || product.price <= price))
         );
          this.isFiltered = true;
        } else {
          this.isFiltered = false;
        }

      }
    }
  }
</script>
