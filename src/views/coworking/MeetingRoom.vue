<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative w-100"
           style="background-image: url(https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/intro-home.jpg)">
        <div class="video">
          <div class="embed-responsive embed-responsive-16by9 overlay-img">
            <img class="w-100 d-block"
                 src="../../../public/images/executive_boardroom1.jpeg"
                 alt="">
          </div>
        </div>
      </div>
    </main>
    <div class="container block-text pb-5" id="row-x1">
      <div class="row justify-content-between align-items-center pb-5">
        <div class="col-lg-5  mt-lg-0 mt-5 text-editor order-lg-1 pl-lg-3 pr-lg-5"><h2 class="mb-3">We offer the most
          flexible meeting spaces at affordable rates.</h2>
          <p><span style="font-weight: 400;">From a 4 seater meeting room to a full 16 seater boardroom with servings and equipped with the tech to help you host your meeting</span>
          </p>
<!--          <div class="d-block mt-3">-->
<!--            <router-link class="btn btn-primary d-block mt-1" target="_self" to="/coworking">Book a Space</router-link>-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <div id="header-video" class="position-relative w-100"
         style="background-image: url(https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/intro-home.jpg)">
      <div class="video">
        <div class="embed-responsive embed-responsive-16by9 overlay-img">
          <img class="w-100 d-block"
               src="../../../public/images/executive_boardroom1.jpeg"
               alt="">
        </div>
      </div>
    </div>
    <div class="container block-text pb-5" id="row-x1">
      <div class="row justify-content-between align-items-center pb-5">
        <div class="col-lg-5  mt-lg-0 mt-5 text-editor order-lg-1 pl-lg-3 pr-lg-5"><h2 class="mb-3">Why our meeting
          rooms.</h2>
          <ul v-for="benefit in benefits" :key="benefit">
            <li><p><span style="font-weight: 400;">{{ benefit }}</span></p></li>
          </ul>
          <div class="d-block mt-3">
            <router-link class="btn btn-primary d-block mt-1" target="_self" to="/coworking">Book a Room</router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Navigation from "@/components/NavBar";

export default {
  name: "MeetingRoom",
  components: {Navigation, Footer},
  data() {
    return {
      benefits: [
        'Flexible hourly/daily rate',
        'From 4 seater meeting rooms to 16 seater board rooms to 60 seater conferences',
        'Secretarial support',
      ],
    }
  }
}
</script>

<style scoped>

</style>
