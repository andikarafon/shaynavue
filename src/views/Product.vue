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
                                            <Slide v-for="ss in productDetails.galleries" :key="ss.id">
                                              <div class="carousel__item">
                                                <img class="product-big-img" :src="ss.photo" alt="" />
                                              </div>
                                            </Slide>
                                          </Carousel>
                                      </div>
                                      <div class="product-thumbs">
                                        <carousel id="thumbnails" :items-to-show="3" :wrap-around="true" v-model="currentSlide" ref="carousel">
                                          <slide v-for="ss in productDetails.galleries" :key="ss.id" class="pt">
                                            <div class="carousel__item">
                                              <div class="pt" @click="slideTo(ss.id)" :class="ss.id == currentSlide ? 'active' : '' ">
                                                 <img :src="ss.photo" alt="" />
                                             </div>
                                            </div>
                                          </slide>
                                        </carousel>
                                      </div>
                                </div>
                                  <div class="col-lg-6">
                                      <div class="product-details text-left">
                                          <div class="pd-title">
                                              <span>{{ productDetails.type }}</span>
                                              <h3>{{ productDetails.name }}</h3>
                                          </div>
                                          <div class="pd-desc">
                                            <p v-html="productDetails.description"></p>
                                            <h4>${{ productDetails.price }}</h4>
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

  import axios from "axios";
  
  
  
  export default {
    name: 'ProductShayna',
    components: {
      HeaderShayna, 
      FooterShayna,
      RelatedShayna,
      Carousel, Slide
    },
                    data () {
                      return {
                        productDetails: [],
                        currentSlide: 0
                      };
                    },  //end of data function
                    methods: {
                      slideTo(val) {
                        this.currentSlide = val
                      },
                      setDataPicture(data) {
                        // replace object productDetails dengan data dari API
                        this.productDetails = data;
                        // replace value gambar default dengan data dari API (galleries)
                        // this.gambar_default = data.galleries[0].photo;
                      }
                    },
                    mounted() {
                                axios
                                  .get("http://shayna-backend.belajarkoding.com/api/products", {
                                    params: {
                                      id: this.$route.params.id
                                    }
                                  })
                                  //jika berhasil mengakses API-nya maka akan dijalankan perintah di bawah ini
                                  .then(res => this.setDataPicture(res.data.data))
                                  // eslint-disable-next-line no-console
                                  .catch(err => console.log(err));
                              }
  }
  </script>
  
  <style scoped>
  
  .product-thumbs .pt {
    margin-right: 14px;
  }
  
  </style>
  