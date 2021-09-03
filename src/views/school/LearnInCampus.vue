<template>
  <div>
    <navigation/>
    <main>
      <div class="container-medium pt-5 pb-5 page-intro">
        <div class="row py-5">
          <div class="col-lg-5 order-lg-2 pt-4">
            <div class="max-text mx-auto">
              <h1 class="mt-2" style="font-family: Typo_Round_bold;">Talent Garden Innovation School</h1>
              <p>Be part of the next generation of developers and innovators <br>
                by training with industry leaders on the trendiest <br>
                and on demand skills.
              </p> <a
                href="#course" class="btn btn-primary mt-4 smooth" id="anchor-course">Go to our courses</a></div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5"><img class="w-100 d-block"
                                                                     src="../../../public/images/new-graphics/Client-Copy-03.jpg"
                                                                     alt=""></div>
        </div>
      </div>
      <div class="bg-light py-5" id="course">
        <div class="container py-5">
          <div class="col-12" align="center">
            <h2 class="mt-2" style="font-family: Typo_Round_bold;">Our courses</h2>
            <p class="mb-0">We will be offering multiple courses running concurrently.</p>
            <div v-for="course in courses" :key="course" class="mt-5" id="MixItUp8E8326">
              <div class="mix  italy  part-time  calabiana-milan-innovation-school  italian  business"><a
                  href="#"
                  class="px-5 py-4 bg-white d-block w-100 mb-3 single-course ">
                <div class="row align-items-center py-1">
                  <div class="col-lg-7 mb-lg-0 mb-4 pb-lg-0 pb-4">
                    <h4 class="black lubalin font-weight-bold mb-0 font-size-24 d-block my-2" style="font-family: Typo_Round_bold;">{{ course.name }}</h4>
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
  name: "Nairobi",
  components: {WhyTrainWithUs, Footer, Newsletter, Navigation},
  data() {
    return {
      courses: [
        {name: 'PHP and PHP MVC Frameworks Laravel/Codeigniter'},
        {name: 'Javascript-Angular Js, Nodejs'},
        {name: 'AWS and Cloud Infrastructure'},
        {name: 'Data Science'},
        {name: 'Startup 101-Business plan, marketing, finance'},
        {name: 'DeFI and Crypto'},
        {name: 'Introduction to Programming-13-18yrs'},
      ]
    }
  }
}

</script>

<style scoped>

</style>
