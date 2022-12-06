<template>
    <div class="product">
      <!-- component ini diimport sehingga memudahkan buat melakukan development ke depannya -->
          <HeaderShayna />
              <!-- Breadcrumb Section Begin -->
              <div class="breacrumb-section text-left">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="breadcrumb-text product-more">
                                  <router-link v-bind:to="'/'"><i class="fa fa-home"></i> Home</router-link>
                                  <span>Detail</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- Breadcrumb Section Begin -->

              <!-- Product Shop Section Begin -->
              <section class="product-shop spad page-details">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="row">
                                  <div class="col-lg-6">
                                      <div class="product-pic-zoom">
                                          <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                                            <Slide v-for="slide in slides" :key="slide.id">
                                              <div class="carousel__item">
                                                <img class="product-big-img" :src="slide.img_url" alt="" />
                                              </div>
                                            </Slide>
                                          </Carousel>
                                      </div>
                                      <div class="product-thumbs">
                                        <carousel id="thumbnails" :items-to-show="3" :wrap-around="true" v-model="currentSlide" ref="carousel">
                                          <slide v-for="slide in slides" :key="slide.id">
                                            <div class="carousel__item">
                                              <div class="pt" @click="slideTo(slide.id)" :class="slide.id == currentSlide ? 'active' : '' ">
                                                 <img :src="slide.img_url" alt="" />
                                             </div>
                                            </div>
                                          </slide>
                                        </carousel>
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="product-details text-left">
                                          <div class="pd-title">
                                              <span>oranges</span>
                                              <h3>Pure Pineapple</h3>
                                          </div>
                                          <div class="pd-desc">
                                              <p>
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                                              </p>
                                              <p>
                                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                                                  Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                                  Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                                  impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                                              </p>
                                              <h4>$495.00</h4>
                                          </div>
                                          <div class="quantity">
                                            <router-link v-bind:to="'/cart'"  class="primary-btn pd-cart">Add To Cart</router-link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <!-- Product Shop Section End -->

              <RelatedShayna />

          <FooterShayna />
    </div>
  </template>
  
  <script>
  import HeaderShayna from "@/components/HeaderShayna.vue";
  import FooterShayna from "@/components/FooterShayna.vue";
  import RelatedShayna from "@/components/RelatedShayna.vue";

  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide } from 'vue3-carousel';
  
  
  
  export default {
    name: 'ProductShayna',
    components: {
      HeaderShayna, 
      FooterShayna,
      RelatedShayna,
      Carousel, Slide
    },
    data: function() {
        return {
          slides: [
            {
              id: 0,
              img_url : 'img/mickey1.jpg'
            },
            {
              id: 1,
              img_url : 'img/mickey2.jpg'
            },
            {
              id: 2,
              img_url : 'img/mickey3.jpg'
            },
            {
              id: 3,
              img_url : 'img/mickey4.jpg'
            }
          ],
          currentSlide: 0
        };
  },  //end of data function
    methods: {
      slideTo(val) {
        this.currentSlide = val
      },
    }
  }
  </script>
  
  <style scoped>
  
  .product-thumbs .pt {
    margin-right: 14px;
  }
  
  </style>
  