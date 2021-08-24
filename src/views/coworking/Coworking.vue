<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative w-100"
           style="background-image: url(https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/intro-home.jpg)">
        <div class="video">
          <div class="embed-responsive embed-responsive-16by9 overlay-img">
            <img class="w-100 d-block"
                 src="../../../public/images/gazebo.jpeg"
                 alt="">
          </div>
        </div>
        <div class="hover d-flex align-items-center">
          <div class="container">
            <div class=" p-sm-5 p-4"><h1 class="lubalin mb-4" style="color: #fff;">Beautiful work space and a meeting place.</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="container block-text pb-5" id="row-x1" style="margin-top: 8%;">
      <div class="row justify-content-between align-items-center pb-5">
        <div class="col-lg-5  mt-lg-0 mt-5 text-editor order-lg-1 pl-lg-3 pr-lg-5"><h2 class="mb-3">Creating Global
          Connections</h2>
          <p><span style="font-weight: 400;">Come to our coworking space, pick a hot desk, fire up your laptop and get to work.  You will choose to work from task desks, garden benches, tree swings indoor couches all at the price of one We will also give you access to meeting rooms to meet your clients and make the deals.</span>
          </p>
          <div class="d-block mt-3">
            <router-link class="btn btn-primary d-block mt-1" target="_self" to="/coworking">Book a Space</router-link>
          </div>
        </div>
      </div>
    </div>
    <CoworkingRates/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Navigation from "@/components/NavBar";
import CoworkingRates from "@/views/coworking/CoworkingRates";

export default {
  name: "Coworking",
  components: {CoworkingRates, Navigation, Footer}
}
</script>

<style scoped>

</style>
