<template>
    <div class="shopping">
        <HeaderShayna />

         <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-left">
                <div class="breadcrumb-text product-more">
                <router-link to="/">
                    <i class="fa fa-home"></i> Home
                </router-link>
                <span>Shopping Cart</span>
                </div>
            </div>
            </div>
        </div>
        </div>
        <!-- Breadcrumb Section Begin -->

            <!-- Shopping Cart Section Begin -->
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th class="p-name text-center">Product Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr v-for="keranjang in keranjangUser" :key="keranjang.id">
                                                <td class="cart-pic first-row">
                                                    <img class="img-cart" :src="keranjang.photo" />
                                                </td>
                                                <td class="cart-title first-row text-center">
                                                    <h5>{{ keranjang.name }}</h5>
                                                </td>
                                                <td class="p-price first-row">${{ keranjang.price }}</td>
                                                <td>
                                                    <router-link v-bind:to="'/cart'">
                                                        <a @click="removeItem(keranjangUser.id)" href="#" class="delete-item">
                                                                <i class="material-icons">close</i>
                                                        </a>
                                                    </router-link>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <h4 class="mb-4 text-left" >
                                    Informasi Pembeli:
                                </h4>
                                <div class="user-checkout">
                                    <form>
                                        <div class="form-group text-left">
                                            <label for="namaLengkap">Nama lengkap</label>
                                            <input 
                                                    type="text" 
                                                    class="form-control" 
                                                    id="namaLengkap" 
                                                    aria-describedby="namaHelp" 
                                                    placeholder="Masukan Nama" 
                                                    v-model="customerInfo.name"
                                            />
                                        </div>
                                        <div class="form-group text-left">
                                            <label for="namaLengkap">Email Address</label>
                                            <input 
                                                    type="email" 
                                                    class="form-control" 
                                                    id="emailAddress" 
                                                    aria-describedby="emailHelp" 
                                                    placeholder="Masukan Email"
                                                    v-model="customerInfo.email"
                                            />
                                        </div>
                                        <div class="form-group text-left">
                                            <label for="namaLengkap">No. HP</label>
                                            <input 
                                                    type="text" 
                                                    class="form-control" 
                                                    id="noHP" 
                                                    aria-describedby="noHPHelp" 
                                                    placeholder="Masukan No. HP"
                                                    v-model="customerInfo.number"
                                            />
                                        </div>
                                        <div class="form-group text-left">
                                            <label for="alamatLengkap">Alamat Lengkap</label>
                                            <textarea 
                                                    class="form-control" 
                                                    id="alamatLengkap" 
                                                    rows="3"
                                                    v-model="customerInfo.address"
                                            >
                                            </textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="proceed-checkout text-left">
                                    <ul>
                                        <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                                        <li class="subtotal mt-3">Subtotal <span>${{ totalHarga }}.00</span></li>
                                        <li class="subtotal mt-3">Pajak <span>10% {{ ditambahPajak }}.00</span></li>
                                        <li class="subtotal mt-3">Total Biaya <span>${{ totalBiaya }}.00</span></li>
                                        <li class="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                                        <li class="subtotal mt-3">No. Rekening <span>105 001 0392243</span></li>
                                        <li class="subtotal mt-3">Nama Penerima <span>Ayara</span></li>
                                    </ul>
                                    <!-- <router-link v-bind:to="'/success'"  class="proceed-btn">I ALREADY PAID</router-link> -->
                                    <a @click="checkout()" href="#" class="proceed-btn">I ALREADY PAID</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Shopping Cart Section End -->

    </div>
</template>

<script>
import HeaderShayna from "@/components/HeaderShayna.vue";
import axios from "axios";

export default {
    name: "CartShayna",
    components: {
    HeaderShayna
  }, 
  data() {
    return {
        keranjangUser: [],
        customerInfo: {
            name: "",
            email: "",
            number: "",
            address: ""
        }
    };
  },
  methods: {
    removeItem(index) {
        this.keranjangUser.splice(index, 1);
        const parsed = JSON.stringify(this.keranjangUser);
        localStorage.setItem("keranjangUser", parsed);

        window.location.reload();
    },
    // fungsi mengirim data ke API
    checkout() {
        // map ini untuk membuat data semua menjadi array
        let productIds = this.keranjangUser.map(function(product) {
            return product.id;
        });

        let checkoutData = {
            name: this.customerInfo.name,
            email: this.customerInfo.email,
            number: this.customerInfo.number,
            address: this.customerInfo.address,
            transaction_total: parseInt(this.totalBiaya),
            transaction_status: "PENDING",
            transaction_details: productIds
        };

        axios
        .post(
          "http://127.0.0.1:8000/api/checkout",
          checkoutData
        )
        .then(() => this.$router.push("success"))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));

        localStorage.clear();
    }
  },
  mounted() {
    if (localStorage.getItem("keranjangUser")) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch (e) {
        localStorage.removeItem("keranjangUser");
      }
    }
  },
  computed: {
    totalHarga() {
        // reduce adalah fungsi untuk looping, tetapi tidak hanya menampilkan tetapi juga menghitung
      return this.keranjangUser.reduce(function(items, data) {
        return items + data.price;
      }, 0);
    },
    ditambahPajak() {
      return (this.totalHarga * 10) / 100;
    },
    totalBiaya() {
      return this.totalHarga + this.ditambahPajak;
    }
  }
};
</script>

<style scoped>
.img-cart {
    width: 100px;
    height: 100px;
}
</style>