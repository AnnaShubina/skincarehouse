<template>
  <header class="_Search search" :class="{ active: isActive }">
    <input type="text" ref="search" class="search__field">
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
        isActive: false
      }
    },
    methods: {
      openSearch() {
        this.isActive = true;
        document.body.addEventListener('click', this.onBodyClick);
      },
      onBodyClick(e) {
        if (e.target.closest('.search') === null) {
          this.isActive = false;
        } else {
          this.isActive = true;
          this.$refs.search.focus();
        }
      }
    },
    beforeDestroy() {
      document.body.removeEventListener('click', this.onBodyClick);
    }
  }
</script>

