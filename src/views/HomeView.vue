<template>
  <div class="home">
    <!-- component ini diimport sehingga memudahkan buat melakukan development ke depannya -->
        <HeaderShayna />
        <HeroShayna />
        <WomanShayna />
        <InstaShayna />
        <PartnerShayna />
        <FooterShayna />
  </div>
</template>

<script>
import HeaderShayna from "@/components/HeaderShayna.vue";
import HeroShayna from "@/components/HeroShayna.vue";
import WomanShayna from "@/components/WomanShayna.vue";
import InstaShayna from "@/components/InstaShayna.vue";
import PartnerShayna from "@/components/PartnerShayna.vue";
import FooterShayna from "@/components/FooterShayna.vue";



export default {
  name: 'HomeView',
  components: {
    HeaderShayna, 
    HeroShayna, 
    WomanShayna, 
    InstaShayna,
    PartnerShayna,
    FooterShayna
  }
}
</script>

<style scoped>


</style>
