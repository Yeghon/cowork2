<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative w-100"
           style="background-image: url(https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/intro-home.jpg)">
        <div class="video">
          <div class="embed-responsive embed-responsive-16by9 overlay-img">
            <img class="w-100 d-block"
                 src="../../../public/images/undraw_interior_design_9i70.png"
                 alt="">
          </div>
        </div>
      </div>
    </main>
    <div class="container block-text pb-5" id="row-x1">
      <div class="row justify-content-between align-items-center pb-5">
        <div class="col-lg-5  mt-lg-0 mt-5 text-editor order-lg-1 pl-lg-3 pr-lg-5"><h2 class="mb-3">Equipped private office for you with two extra task seats.</h2>
          <p><span style="font-weight: 400;">Use other amenities in the space. You can choose to work from the outdoors gazebo or swing while paying for the private office.</span></p>
          <div class="d-block mt-3">
            <router-link class="btn btn-primary d-block mt-1" target="_self" to="/coworking">Book a Space</router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "PrivateOffice",
  components: {Footer, Navigation}
}
</script>

<style scoped>

</style>
