<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative w-100">
        <div class="video">
          <div class="embed-responsive embed-responsive-16by9 overlay-img">
            <img class="w-100 d-block"
                 src="../../../public/images/undraw_interior_design_9i70.png"
                 alt="">
          </div>
        </div>
      </div>
    </main>
    <div style="display: grid; place-items: center; margin-top: 150px; margin-bottom: 150px; padding: 20px">
      <div style="font-size: 16px; font-weight: 600; color: #4c4c4c; margin: 16px"><h2 style="font-family: Typo_Round_bold;">Equipped private office for you
        with two extra seats.</h2>
      </div>
      <div>
        <h3 style="font-size: 20px; font-weight: 600; color: #343434; letter-spacing: -0.03em; line-height: 1.5">
          <p>
          <span style="font-weight: 400;">
            Use other amenities in the space. <br>
            You can choose to work from the outdoors gazebo or swing while paying for the private office.</span>
          </p></h3>
        <div style="display: grid; place-items: center">
          <router-link class="btn btn-primary mt-5" target="_self" to="/book-a-space">Book a Space</router-link>
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
