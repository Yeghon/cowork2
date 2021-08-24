<template>
  <div>
    <navigation/>
    <main>
      <div class="container-medium py-5 mb-5 page-intro" id="intro-landing">
        <div class="row pt-5">
          <div class="col-lg-5 order-lg-2">
            <div class="max-text mx-auto pt-4">
              <h1 class="mt-2">Connecting you to the next opportunity</h1></div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5">
            <div class="img-intro"><img class="w-100"
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.theworkspace.co.za%2Fwp-content%2Fuploads%2F2016%2F11%2F04-communal-office-space-1.jpg"
                                        alt=""></div>
          </div>
        </div>
      </div>
      <div class="wrapper-flex">
        <div class="pb-5 mb-5" id="row-0">
          <div class="bg-light pt-5">
            <div class="pt-5">
              <div class="container block-text pb-5" id="row-x0">
                <div class="row justify-content-between align-items-center pb-5">
                  <div class="col-lg-7 ">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fvideo%2FEyvF0jkPg%2Fvideoblocks-african-american-worker-talking-to-company-boss-happy-mixed-ethnicity-colleagues-work-in-trendy-loft-office-space-4k_rbglolnxsz_thumbnail-1080_01.png">
                  </div>
                  <div class="col-lg-5  mt-lg-0 mt-5 text-editor
pl-lg-5		"><h2 class="mb-3">We are a Community, not just a space</h2>
                    <p></p>
                    <p><span style="font-weight: 400;">We are a community of digital innovators and industry leaders. We offer a platform to network and connect our members to opportunities.
Our training and events are unique and tailored to suit the market trends.</span>
                    </p>
                    <p></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container block-text pb-5" id="row-x1">
          <div class="row justify-content-between align-items-center pb-5">
            <div class="col-lg-7 order-lg-2"><img class="w-100"
                                                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ylitalot.net%2Fimages%2F2014%2F09%2FM9113006_l.jpg"
                                                  alt=""></div>
            <div class="col-lg-5  mt-lg-0 mt-5 text-editor
order-lg-1 pl-lg-3 pr-lg-5"><h2 class="mb-3">Location</h2>
              <p></p>
              <p><span style="font-weight: 400;">We are located  along Ngong Road  within the ngong racecourse and jockey club.</span>
              </p>
              <p></p></div>
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
import Footer from "@/components/Footer";
import Newsletter from "@/components/NewsLetter";

export default {
  name: "about",
  components: {Newsletter, Footer, Navigation}
}
</script>

<style scoped>

</style>
