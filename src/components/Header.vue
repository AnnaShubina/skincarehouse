<template>
  <header class="_Header header">
    <div class="header__wrap">
      <div class="header__nav">
        <button class="header__navBtn">
          <BurgerSvg/>
        </button>
      </div>
      <div class="header__center">
        <div class="header__indent"></div>
        <router-link to="/" class="header__logo">
          <LogoSvg/>
        </router-link>
      </div>
      <div class="header__right">
        <div class="header__search">
          <button class="header__searchBtn">
            <SearchSvg/>
          </button>
        </div>
        <div class="header__basket">
          <button class="header__basketBtn">
            <BasketSvg/>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import BurgerSvg from '../assets/img/icons/burger.svg'
  import LogoSvg from '../assets/img/icons/logo.svg'
  import BasketSvg from '../assets/img/icons/basket.svg'
  import SearchSvg from '../assets/img/icons/search.svg'

  export default {
    name: 'Header',
    components: {
      BurgerSvg,
      LogoSvg,
      BasketSvg,
      SearchSvg
    },
    data() {
      return {}
    }
  }
</script>
