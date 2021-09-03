<template>
  <div>
    <navigation/>
    <main>
      <div class="container-medium py-5 mb-5 page-intro" id="intro-landing">
        <div class="row pt-5">
          <div class="col-lg-5 order-lg-2">
            <div class="max-text mx-auto pt-4">
              <h1 class="mt-2"><span>Connecting</span> you to the next opportunity</h1></div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5">
            <div class="img-intro"><img class="w-100"
                                        src="../../public/images/new-graphics/ClientCopy-23.jpg"
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
                    <img src="../../public/images/new-graphics/ClientCopy-25.jpg">
                  </div>
                  <div class="col-lg-5  mt-lg-0 mt-5 text-editor
pl-lg-5		"><h2 class="mb-3">We are a <span>Community</span>, not just a space</h2>
                    <p></p>
                    <p><span style="font-weight: 400;">We are a community of digital innovators and industry leaders<br>
                      We offer a platform to network and connect our members to opportunities<br>
                      Our training and events are unique and tailored to suit the market trends</span>
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
                                                  src="../../public/images/new-graphics/world.jpeg"
                                                  alt=""></div>
            <div class="col-lg-5  mt-lg-0 mt-5 text-editor
order-lg-1 pl-lg-3 pr-lg-5"><h2 class="mb-3">Location</h2>
              <p></p>
              <p><span style="font-weight: 400;">We are located  along Ngong Road  within the ngong racecourse and jockey club</span>
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

h1, h2 {
  font-family: Typo_Round_bold;
}

</style>
