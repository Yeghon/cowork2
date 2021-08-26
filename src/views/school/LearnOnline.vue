<template>
  <div>
    <navigation/>
    <main>
      <div class="container-medium pt-5 pb-5 page-intro">
        <div class="row py-5">
          <div class="col-lg-5 order-lg-2 pt-4">
            <div class="max-text mx-auto">
              <h1 class="mt-2">Talent Garden Innovation School <span class="orange">Online</span></h1>
              <p>We are currently offering the following courses online.</p> <a href="#course"
                                                                                class="btn btn-primary mt-4 smooth"
                                                                                id="anchor-course">Go to our
              courses</a></div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5"><img class="w-100 d-block"
                                                                     src="../../../public/images/undraw_Online_learning_re_qw08.png"
                                                                     alt=""></div>
        </div>
      </div>
      <div class="bg-light py-5" id="course">
        <div class="container py-5">
          <div class="col-12">
            <h2 align="center" class="mt-2">Our courses</h2>
            <p align="center" class="mb-0">Talent Garden Innovation School offers programmes and training courses for
              individuals and
              companies.</p>
            <div class="mt-5 container-filter" id="MixItUp8ABD34">
              <div class="mix  online  part-time  calabiana-milan-innovation-school  italian  business"><a
                  href="#"
                  class="px-5 py-4 bg-white d-block w-100 mb-3 single-course ">
                <div class="row align-items-center py-1">
                  <div class="col-lg-7 mb-lg-0 mb-4 pb-lg-0 pb-4">
                    <div class="type d-inline-block mr-2 font-weight-bold text-uppercase text-primary"
                         style="font-size:12px; letter-spacing:2px">Online
                    </div>
                    <h4 class="black lubalin font-weight-bold mb-0 font-size-24 d-block my-2">General web
                      development-Php, html, JS</h4>
                  </div>
                  <div
                      class="col-lg-2 col-sm-6 mb-sm-0 mb-4 text-center border-left d-sm-block d-flex align-items-center">
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <router-link class="btn btn-primary d-block mt-1" target="_self" to="/book-a-space">Book a Space
                    </router-link>
                  </div>
                </div>
              </a></div>
              <div class="mix  online  part-time   italian  marketing"><a
                  href="#"
                  class="px-5 py-4 bg-white d-block w-100 mb-3 single-course ">
                <div class="row align-items-center py-1">
                  <div class="col-lg-7 mb-lg-0 mb-4 pb-lg-0 pb-4">
                    <div class="type d-inline-block mr-2 font-weight-bold text-uppercase text-primary"
                         style="font-size:12px; letter-spacing:2px">Online
                    </div>
                    <h4 class="black lubalin font-weight-bold mb-0 font-size-24 d-block my-2">Start up 101- Starting a
                      business in Kenya A-Z
                      Master</h4>
                  </div>
                  <div
                      class="col-lg-2 col-sm-6 mb-sm-0 mb-4 text-center border-left d-sm-block d-flex align-items-center">
                  </div>
                  <div class="col-lg-3 col-sm-6">
                    <router-link class="btn btn-primary d-block mt-1" target="_self" to="/book-a-space">Book a Space
                    </router-link>
                  </div>
                </div>
              </a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5 mt-5">
        <WhyTrainWithUs/>
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
import WhyTrainWithUs from "@/views/school/WhyTrainWithUs";

export default {
  name: "online",
  components: {WhyTrainWithUs, Footer, Newsletter, Navigation},
  data() {
    return {
      courses: [
        {name: 'General web development-Php, html, JS'},
        {name: 'Start up 101- Starting a business in Kenya A-Z'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
