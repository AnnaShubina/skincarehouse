<template>
  <header class="_Search search" :class="{ active: isActive }">
    <input type="text" ref="search" class="search__field" v-model="searchString">
    <button class="search__btn" @click="openSearch">
      <SearchSvg/>
    </button>
  </header>
</template>

<script>
  import SearchSvg from '../assets/img/icons/search.svg'

  export default {
    name: 'Search',
    components: {
      SearchSvg
    },
    data() {
      return {
        isActive: false,
        searchString: ''
      }
    },
    methods: {
      onBodyClick(e) {
        if (e.target.closest('.search') === null) {
          this.closeSearch();
        } else {
          this.openSearch();
        }
      },
      openSearch() {
        this.isActive = true;
        this.$refs.search.focus();
        document.body.addEventListener('click', this.onBodyClick);
      },
      closeSearch() {
        this.isActive = false;
        this.searchString = '';
      }
    },
    beforeDestroy() {
      document.body.removeEventListener('click', this.onBodyClick);
    }
  }
</script>

