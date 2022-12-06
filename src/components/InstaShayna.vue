<template>

  <!-- Instagram Section Begin -->
  <div class="instagram-photo">
        <div class="row">
                <div class="col-lg-12 mt-5">
                    <carousel items-to-show="5">
                        <slide v-for="slide in slides" :key="slide.id">
                            <div class="carousel__item">
                                <div class="insta-item set-bg" :style="slide.img_url">
                                    <div class="inside-text">
                                        <i class="ti-instagram"></i>
                                        <h5><a href="#">shayna_gallery</a></h5>
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
    <!-- Instagram Section End -->

</template>

<script>

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
name: 'InstaShayna',
components: {    
    Carousel, Slide, Pagination, Navigation
  },
  data: function() {
        return {
          slides: [
            {
              id: 1,
            //   img_url : { backgroundImage: "url('/img/insta-1.jpg)" }
            img_url :  { backgroundImage: "url('/img/insta-1.jpg')" }
            },
            {
              id: 2,
              img_url: { backgroundImage: "url('/img/insta-2.jpg')" }
            },
            {
              id: 3,
              img_url: { backgroundImage: "url('/img/insta-3.jpg')" }
            },
            {
              id: 4,
              img_url: { backgroundImage: "url('/img/insta-4.jpg')" }
            },
            {
              id: 5,
              img_url: { backgroundImage: "url('/img/insta-5.jpg')" }
            },
            {
              id: 6,
              img_url: { backgroundImage: "url('/img/insta-6.jpg')" }
            }
          ]
        };
  } //end of data function
}
</script>

<style scoped>

.insta-item {
    width: 100%;
}
.set-bg {
  width: 100%;
  height: 100%;
}

</style>