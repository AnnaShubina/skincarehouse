<template>
  <div class="_CatalogueFilter filter">
    <button class="filter__btn">
      <FilterSvg class="filter__icon"/>
      +Filters
    </button>
    <div class="filter__content">
      <div class="filter__header">
        <div class="filter__title">Filters</div>
        <button class="filter__close">
          <CloseSvg/>
        </button>
      </div>
      <div class="filter__wrap">
        <div class="filter__item">
          <multiselect v-model="value"
                       :options="options"
                       placeholder="Brand"
                       label="name"
                       track-by="id"
                       :searchable="false"
                       class="select">
          </multiselect>
          <multiselect v-model="value"
                       :options="options"
                       placeholder="Brand"
                       label="name"
                       track-by="id"
                       :searchable="false"
                       class="select">
          </multiselect>
        </div>
        <div class="filter__item">
          <multiselect v-model="value"
                       :options="options"
                       placeholder="Brand"
                       label="name"
                       track-by="id"
                       :searchable="false"
                       class="select">
          </multiselect>
          <multiselect v-model="value"
                       :options="options"
                       placeholder="Brand"
                       label="name"
                       track-by="id"
                       :searchable="false"
                       class="select">
          </multiselect>
        </div>
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
        value: null,
        options: [
          {name: 'Herbivore', id: 'herbivore'},
          {name: 'Church Farm', id: 'church-farm'},
          {name: 'Hallo Sapa', id: 'hallo-sapa'},
        ]
      }
    }
  }
</script>
