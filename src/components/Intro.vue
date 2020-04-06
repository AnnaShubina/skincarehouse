<template>
  <section class="_Intro intro">
    <div class="intro__side">
      <div class="intro__social">
        <a href="#" class="intro__fb">
          <FacebookSvg/>
        </a>
        <a href="#" class="intro__inst">
          <InstSvg/>
        </a>
        <a href="#" class="intro__youtube">
          <YoutubeSvg/>
        </a>
      </div>
      <div class="intro__scroll" @click="$emit('goTo')">
        <ScrollSvg/>
      </div>
    </div>
    <div class="layout layout--inner swiper swiper--intro">
      <div class="swiper-container" v-swiper:mySwiper="swiperOption">
        <div class="intro__navigation">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="intro__number intro__numberActive ml-25">01/</div>
          <div class="intro__number ml-5">03</div>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="intro__wrap">
              <div class="intro__pic">
                <img src="../assets/img/intro-slider/main-girl.jpg" alt="">
              </div>
              <div class="intro__content">
                <div class="box">
                  <div class="box__header box__header--m">
                    <h2 class="box__title box__title--l">Rosewater <br> moisture cream</h2>
                    <span class="box__caption">Pink Cloud</span>
                    <div class="mt-20">
                      <router-link to="/" class="btn">Shop now</router-link>
                    </div>
                  </div>
                  <div class="box__content card card--flex">
                    <div class="card__pic card__pic--intro">
                      <img src="../assets/img/intro-slider/slide-1-product.jpg" alt="">
                    </div>
                    <div class="card__title card__title--intro">New creme <br> collection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="intro__wrap">
              <div class="intro__pic">
                <img src="../assets/img/intro-slider/slide-2-girl.jpg" alt="">
              </div>
              <div class="intro__content">
                <div class="box">
                  <div class="box__header box__header--m">
                    <h2 class="box__title box__title--l">Gentle <br> gel cleanser</h2>
                    <span class="box__caption">Honest Beauty</span>
                    <div class="mt-25">
                      <button class="btn">Shop now</button>
                    </div>
                  </div>
                  <div class="box__content card card--flex">
                    <div class="card__pic card__pic--intro">
                      <img src="../assets/img/intro-slider/slide-2-product.jpg" alt="">
                    </div>
                    <div class="card__title card__title--intro">New body <br> collection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="intro__wrap">
              <div class="intro__pic">
                <img src="../assets/img/intro-slider/slide-3.jpg" alt="">
              </div>
              <div class="intro__content">
                <div class="box">
                  <div class="box__header box__header--m">
                    <h2 class="box__title box__title--l">Soap <br> Icelandic Moss</h2>
                    <span class="box__caption">Halló Sápa</span>
                    <div class="mt-20">
                      <button class="btn">Shop now</button>
                    </div>
                  </div>
                  <div class="box__content card card--flex">
                    <div class="card__pic card__pic--intro">
                      <img src="../assets/img/intro-slider/slide3-product.jpg" alt="">
                    </div>
                    <div class="card__title card__title--intro">New soap <br> collection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import ScrollSvg from '../assets/img/icons/scroll.svg'
  import FacebookSvg from '../assets/img/icons/facebook.svg'
  import InstSvg from '../assets/img/icons/inst.svg'
  import YoutubeSvg from '../assets/img/icons/youtube.svg'

  export default {
    name: 'Intro',
    components: {
      ScrollSvg,
      FacebookSvg,
      InstSvg,
      YoutubeSvg
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 50,
          navigation: {
            nextEl: '.swiper--intro .swiper-button-next',
            prevEl: '.swiper--intro .swiper-button-prev',
          },
          breakpoints: {
          },
          on: {
            slideChange() {
              document.querySelector('.intro__numberActive').innerHTML = `0${this.activeIndex + 1}/`
            }
          }
        }
      }
    }
  }
</script>
