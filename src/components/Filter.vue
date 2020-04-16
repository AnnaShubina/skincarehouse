<template>
  <div class="_CatalogueFilter filter">
    <button class="filter__btn" @click="isFilterShow = true">
      <FilterSvg class="filter__icon"/>
      +Filters
    </button>
    <div class="filter__content" v-if="isFilterShow">
      <div class="filter__header">
        <div class="filter__title">Filters</div>
        <button class="filter__close" @click="onClickCloseFilter">
          <CloseSvg/>
        </button>
      </div>
      <div class="filter__wrap">
        <div class="filter__item">
          <multiselect v-model="value.brand"
                       :options="brandOptions"
                       placeholder="Brand"
                       label="name"
                       track-by="id"
                       :searchable="false"
                       @select="isAcceptBtnShow = true"
                       class="select">
          </multiselect>
          <multiselect v-model="value.price"
                       :options="priceOptions"
                       placeholder="Price"
                       label="name"
                       track-by="value"
                       :searchable="false"
                       @select="isAcceptBtnShow = true"
                       class="select">
          </multiselect>
        </div>
      </div>
      <div class="filter__footer" v-if="isAcceptBtnShow">
        <button class="btn" @click="onClickAcceptFilter">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import CloseSvg from '../assets/img/icons/close.svg'
  import FilterSvg from '../assets/img/icons/filter.svg'

  export default {
    name: 'CatalogueFilter',
    components: {
      Multiselect,
      CloseSvg,
      FilterSvg
    },
    data() {
      return {
        value: {
          brand: null,
          price: null
        },
        brandOptions: [
          {name: 'Herbivore', id: 'herbivore', filter: 'brand'},
          {name: 'Church Farm', id: 'church-farm', filter: 'brand'},
          {name: 'Hallo Sapa', id: 'hallo-sapa', filter: 'brand'},
        ],
        priceOptions: [
          {name: 'up to 10 $', value: 10, filter: 'price'},
          {name: 'up to 50 $', value: 50, filter: 'price'},
          {name: 'up to 100 $', value: 100, filter: 'price'},
        ],
        isFilterShow: false,
        isAcceptBtnShow: false,
      }
    },
    methods: {
      onClickCloseFilter() {
        this.isFilterShow = false;
        this.value.brand = null;
        this.value.price = null;
      },
      onClickAcceptFilter() {
        this.$emit('accept', this.value);
        this.isFilterShow = false;
      }
    }
  }
</script>
