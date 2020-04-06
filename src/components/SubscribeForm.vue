<template>
  <form class="_SubscribeForm fieldWrap" @submit.prevent.stop>
    <div class="field" v-if="!isSent" :class="{ error: errorEmail && email }">
      <input type="email" class="field__input"
             placeholder="E-mail address"
             v-model="email"
             @input="clearError"
             @keydown.enter="sendData">
      <button class="field__right field__arrow" v-if="!loading && !errorEmail" @click="sendData"></button>
      <span class="field__right field__error" v-if="!loading && errorEmail">{{ errorEmail }}</span>
      <span class="field__right" v-if="loading && !errorEmail"><LoaderSvg class="rotate"/></span>
    </div>
    <div class="fieldReady" v-if="isSent">
      Sent
      <span class="fieldReady__mark"><MarkSvg/></span>
    </div>
  </form>
</template>

<script>

  import MarkSvg from '../assets/img/icons/mark.svg'
  import LoaderSvg from '../assets/img/icons/rotate.svg'


  export default {
    name: 'SubscribeForm',
    components: {
      MarkSvg,
      LoaderSvg
    },
    data() {
      return {
        email: '',
        errorEmail: '',
        loading: false,
        isSent: false,
      }
    },
    methods: {
      sendData() {
        this.clearError();
        this.loading = true;
        setTimeout(() => {
          if (!this.email) {
            console.log(1);
            this.errorEmail = 'E-mail is empty';
            this.isSent = false;
            this.loading = false;
          } else {
            let isValidEmail = this.validateEmail(this.email);
            if (isValidEmail) {
              this.errorEmail = '';
              this.isSent = true;
              this.loading = false;
            } else {
              this.errorEmail = 'Wrong format';
              this.isSent = false;
              this.loading = false;
            }
          }
        }, 1000)

      },
      clearError() {
        this.errorEmail = '';
      },
      validateEmail(email) {
        const reg = /\S+@\S+\.\S+/;
        return reg.test(email);
      }
    }
  }
</script>
