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
      <div class="wrapper-flex" align="center">
        <div id="memberships" class="slider-membership position-relative pb-5 bg-light">
          <div class="container pt-5">
            <div class="row pt-5">
              <div class="col-12 slider theme-dark"><h2 class="mb-5">Some events we host.</h2>
                <div class="swiper-container membership-0 swiper-container-initialized swiper-container-horizontal">
                  <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="swiper-slide swiper-slide-active" style="width: 255px; margin-right: 30px;"><a
                        class="h-100 d-flex flex-column smooth bg-white" href="#intro-landing" target="_self">
                      <figure class="mb-0 d-flex justify-content-center align-items-center bg-white">
                        <div class="effect-img"><img class="w-100"
                                                     src="../../public/images/undraw_special_event_4aj8.png"
                                                     alt=""></div>
                      </figure>
                      <figcaption class="mt-0 py-4 px-sm-4 px-5 bg-white"><h6 class="black">Conferences</h6>

                        <p class="mb-0 black"></p></figcaption>
                      <span class="btn btn-primary d-block white px-3 py-3 text-uppercase mt-auto">Learn More</span>
                    </a>
                    </div>
                    <div class="swiper-slide swiper-slide-next" style="width: 255px; margin-right: 30px;"><a
                        class="h-100 d-flex flex-column smooth bg-white" href="#intro-landing" target="_self">
                      <figure class="mb-0 d-flex justify-content-center align-items-center bg-white">
                        <div class="effect-img"><img class="w-100"
                                                     src="../../public/images/undraw_into_the_night_vumi.png"
                                                     alt=""></div>
                      </figure>
                      <figcaption class="mt-0 py-4 px-sm-4 px-5 bg-white"><h6 class="black">Fireside Chat</h6>
                        <p class="mb-0 black"></p></figcaption>
                      <span class="btn btn-primary d-block white px-3 py-3 text-uppercase mt-auto">Learn More</span>
                    </a>
                    </div>
                    <div class="swiper-slide" style="width: 255px; margin-right: 30px;"><a
                        class="h-100 d-flex flex-column smooth bg-white" href="#intro-landing" target="_self">
                      <figure class="mb-0 d-flex justify-content-center align-items-center bg-white">
                        <div class="effect-img"><img class="w-100"
                                                     src="../../public/images/undraw_remotely_2j6y.png"
                                                     alt=""></div>
                      </figure>
                      <figcaption class="mt-0 py-4 px-sm-4 px-5 bg-white"><h6 class="black">Hackathons</h6>
                        <p class="mb-0 black"></p></figcaption>
                      <span class="btn btn-primary d-block white px-3 py-3 text-uppercase mt-auto">Learn More</span>
                    </a>
                    </div>
                  </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-block pb-5 mb-5" id="row-1"></div>
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
