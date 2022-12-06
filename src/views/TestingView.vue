<template>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
    </Carousel>
  
    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item" @click="slideTo(slide)">{{ slide }}</div>
      </Slide>
    </Carousel>
  </template>
  
  <script>

  import "vue3-carousel/dist/carousel.css"; 
  import { Carousel, Slide } from 'vue3-carousel';
  
  export default {
    name: 'TestingView',
    components: {
      Carousel,
      Slide
    },
    data: () => ({
      currentSlide: 0,
    }),
    methods: {
      slideTo(val) {
        this.currentSlide = val
      },
    },
  }
  </script>