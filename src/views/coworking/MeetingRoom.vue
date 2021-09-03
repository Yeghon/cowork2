<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative w-100">
        <div class="video">
          <div class="embed-responsive embed-responsive-16by9 overlay-img">
            <img class="w-100 d-block"
                 src="../../../public/images/new-graphics/Client-Copy-07.jpg"
                 alt="">
          </div>
        </div>
      </div>
    </main>
    <div style="display: grid; place-items: center; margin-top: 150px; margin-bottom: 150px; padding: 20px">
      <div style="font-size: 16px; font-weight: 600; color: #4c4c4c; margin: 16px"><h2>We offer the most
        flexible meeting spaces at affordable rates</h2>
      </div>
      <div>
        <h3 style="font-size: 20px; font-weight: 600; color: #343434; letter-spacing: -0.03em; line-height: 1.5">
          <p>
            <span style="font-weight: 400;">From a 4 seater meeting room to a full 16 seater boardroom with servings and equipped with the tech to help you host your meeting</span>
          </p></h3>
      </div>
    </div>
    <div id="header-video" class="position-relative w-100"
         style="background-image: url(https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/intro-home.jpg)">
      <div class="video">
        <div class="embed-responsive embed-responsive-16by9 overlay-img">
          <img class="w-100 d-block"
               src="../../../public/images/new-graphics/experts.jpeg"
               alt="">
        </div>
      </div>
    </div>
    <div style="display: grid; place-items: center; margin-top: 150px; margin-bottom: 150px; padding: 20px">
      <div style="font-size: 16px; font-weight: 600; color: #4c4c4c; margin: 16px"><h2>Why our meeting rooms</h2>
      </div>
      <div>
        <ul v-for="benefit in benefits" :key="benefit">
          <li><p><span style="font-weight: 400;">{{ benefit }}</span></p></li>
        </ul>
        <div style="display: grid; place-items: center">
          <router-link class="btn btn-primary mt-5" target="_self" to="/book-a-space">Book a Space</router-link>
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

h2 {
  font-family: Typo_Round_bold;
}

</style>
