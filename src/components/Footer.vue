<template>
  <footer class="_Footer footer">
    <div class="layout layout--inner">
      <div class="footer__wrap">
        <div class="footer__item footer__item--right">
          <div class="footer__title">Navigation</div>
          <router-link to="/" class="footer__link">Soap</router-link>
          <router-link to="/" class="footer__link">Creme</router-link>
          <router-link to="/" class="footer__link">Body</router-link>
          <router-link to="/" class="footer__link">New Arrivals</router-link>
          <router-link to="/" class="footer__link">Sale</router-link>
        </div>
        <div class="footer__item">
          <div class="footer__title">Payment</div>
        </div>
        <div class="footer__item footer__item--indent">
          <div class="footer__title">Social</div>
          <a href="#" target="_blank" class="footer__link">Instagram</a>
          <a href="#" target="_blank" class="footer__link">Facebook</a>
          <a href="#" target="_blank" class="footer__link">YouTube</a>
        </div>
        <div class="footer__item">
          <div class="footer__title">Contact us</div>
          <a href="tel: +1 (302) 123-45-67" class="footer__link">+1 (302) 123-45-67</a>
          <a href="mailto: SkinCareHouse@mail.com" class="footer__link">SkinCareHouse@mail.com</a>
        </div>
        <div class="footer__item">
          <div class="footer__title">Info</div>
          <router-link to="/" class="footer__link">About</router-link>
          <router-link to="/" class="footer__link">FAQ</router-link>
          <router-link to="/" class="footer__link">Accessibility</router-link>
          <router-link to="/" class="footer__link">Terms of use</router-link>
          <router-link to="/" class="footer__link">Shipping</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>


  export default {
    name: 'Footer',
    components: {

    },
    data() {
      return {}
    }
  }
</script>
