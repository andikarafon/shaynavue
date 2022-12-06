<template>
  <!-- Related Products Section End -->
  <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- <carousel items-to-show="4"  :autoplay="2000" :wrap-around="true"> -->
        <div class="col-lg-12 mt-5">
          <carousel items-to-show="4">
            <slide v-for="slide in slides" :key="slide.id">
              <div class="carousel__item">
                <div class="single-hero-items set-bg">
                  <div class="product-item">
                    <div class="pi-pic set-pic">
                      <img :src="slide.img_url" alt="" />
                      <ul>
                        <li class="w-icon active">
                          <a href="#"><i class="icon_bag_alt"></i></a>
                        </li>
                        <li class="quick-view">
                          <router-link v-bind:to="'/product'">+ Quick View</router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">{{ slide.name }}</div>
                      <a href="#"> </a>
                      <div class="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
  <!-- Related Products Section End -->
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "WomanShayna",
  components: {
    Carousel,
    Slide,
  },
  data: function () {
    return {
      slides: [
        {
          id: 0,
          img_url: "img/products/women-1.jpg",
          name: "Woman 1",
        },
        {
          id: 1,
          img_url: "img/products/women-2.jpg",
          name: "Woman 2",
        },
        {
          id: 2,
          img_url: "img/products/women-3.jpg",
          name: "Woman 3",
        },
        {
          id: 3,
          img_url: "img/products/women-4.jpg",
          name: "Woman 4",
        },
      ],
    };
  }, //end of data function
};
</script>

<style scoped></style>
