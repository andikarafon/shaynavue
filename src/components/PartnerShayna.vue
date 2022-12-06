<template>

  <!-- Partner Logo Section Begin -->
  <div class="partner-logo">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <carousel items-to-show="5">
                        <slide v-for="slide in slides" :key="slide.id">
                            <div class="carousel__item">
                                <div class="logo-item">
                                    <div class="tablecell-inner">
                                        <img :src="slide.img_url" alt="" />
                                    </div>
                                </div>
                             </div>
                        </slide>
                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
    <!-- Partner Logo Section End -->

</template>

<script>

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'PartnerShayna',
  components: {    
    Carousel, Slide, Pagination, Navigation
  },
  data: function() {
        return {
          slides: [
            {
              id: 1,
              img_url :  'img/logo-carousel/logo-1.png'
            },
            {
              id: 2,
              img_url : 'img/logo-carousel/logo-2.png'
            },
            {
              id: 3,
              img_url : 'img/logo-carousel/logo-3.png'
            },
            {
              id: 4,
              img_url : 'img/logo-carousel/logo-4.png'
            },
            {
              id: 5,
              img_url : 'img/logo-carousel/logo-5.png'
            }
          ]
        };
  }  //end of data function
}

</script>

<style scoped>

</style>