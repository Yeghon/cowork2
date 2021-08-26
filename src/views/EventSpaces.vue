<template>
  <div>
    <navigation/>
    <main>
      <div class="container-medium py-5 mb-5 page-intro" id="intro-landing">
        <div class="row pt-5">
          <div class="col-lg-5 order-lg-2">
            <div class="max-text mx-auto pt-4">
              <h1 class="mt-2">Welcome all to host events with us</h1>
              <p>We have amenities to host your events. Our facilities are flexible to host any kind of event as you may
                request.
              </p>
            </div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5">
            <div class="img-intro"><img class="w-100"
                                        src="../../public/images/undraw_urban_design_kpu8.png"
                                        alt=""></div>
          </div>
        </div>
      </div>
      <div class="bg-light" id="row-5">
        <div class="container pt-3 pb-5">
          <div class="row">
            <div align="center" class="col-12 pt-5"><h2>Some events we host</h2></div>
          </div>
          <div class="pt-4 card-group row">
            <div class="card mb-lg-0 mb-4 mx-3 px-0">
              <div class="effect-img"><img class="w-100"
                                           src="../../public/images/undraw_special_event_4aj8.png"
                                           alt=""></div>
              <div class="card-body py-4"><h6 class="black">Conferences</h6></div>
            </div>
            <div class="card mb-lg-0 mb-4 mx-3 px-0">
              <div class="effect-img"><img class="w-100"
                                           src="../../public/images/undraw_into_the_night_vumi.png"
                                           alt=""></div>
              <div class="card-body py-4"><h6 class="black">Fireside Chat</h6></div>
            </div>
            <div class="card mb-lg-0 mb-4 mx-3 px-0">
              <div class="effect-img"><img class="w-100"
                                           src="../../public/images/undraw_remotely_2j6y.png"
                                           alt=""></div>
              <div class="card-body py-4">
                <h6 class="black">Hackathons</h6>
              </div>
            </div>
          </div>
          <div style="display: grid; place-items: center">
            <router-link class="btn btn-primary mt-5" target="_self" to="/book-a-space">Book a Space</router-link>
          </div>
        </div>
      </div>
    </main>
    <newsletter/>
    <Footer/>
  </div>

</template>

<script>
import Navigation from "@/components/NavBar";
import Newsletter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default {
  name: "EventSpaces",
  components: {Footer, Newsletter, Navigation}
}
</script>

<style scoped>

</style>
