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
            <div class=" p-sm-5 p-4"><h1 class="lubalin mb-4" style="color: #fff; font-family: Typo_Round_bold;">Beautiful work space and a meeting
              place</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div style="display: grid; place-items: center; margin: 25px">
      <div style="font-size: 16px; font-weight: 600; color: #4c4c4c; margin: 16px"><h2 style="font-family: Typo_Round_bold;">Creating global connections</h2>
      </div>
      <div>
        <h3 style="font-size: 20px; font-weight: 600; color: #343434; letter-spacing: -0.03em; line-height: 1.5">
          <p>
          <span style="font-weight: 400;">
            Come to our coworking space, pick a hot desk, fire up your laptop and get to work <br>
            You will choose to work from task desks, garden benches, tree swings indoor couches all at the price of one <br>
            We will also give you access to meeting rooms to meet your clients and make the deals</span>
          </p></h3>
        <div style="display: grid; place-items: center">
          <router-link class="btn btn-primary mt-5" target="_self" to="/book-a-space">Book a Space</router-link>
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
