<template>
  <div>
    <navigation/>
    <main>
      <div class="container-medium pt-5 pb-5 page-intro">
        <div class="row py-5">
          <div class="col-lg-5 order-lg-2 pt-4">
            <div class="max-text mx-auto">
              <nav aria-label="breadcrumb" class="breadcrumb_nav mb-3" typeof="BreadcrumbList"
                   vocab="https://schema.org/"><span property="itemListElement" typeof="ListItem"><router-link
                  property="item"
                  typeof="WebPage"
                  title="Go to Talent Garden."
                  to="/"
                  class="home"><span
                  property="name">Home</span></router-link><meta content="1" property="position"></span><span
                  class="mx-1">/</span><span property="itemListElement" typeof="ListItem"><router-link property="item"
                                                                                                       typeof="WebPage"
                                                                                                       title="Go to Innovation School."
                                                                                                       to="/innovation-school"
                                                                                                       class="courses-root post post-courses"><span
                  property="name">Innovation School</span></router-link><meta content="2"
                                                                              property="position"></span><span
                  class="mx-1">/</span><span property="itemListElement" typeof="ListItem"><span
                  property="name">Nairobi</span><meta property="position" content="3"></span></nav>
              <div class="line"></div>
              <h1 class="mt-2">Talent Garden Innovation School <span class="orange">Nairobi</span></h1>
              <p>Be part of the next generation of developers and innovators <br>
                by training with industry leaders on the trendiest <br>
                and on demand skills.
              </p> <a
                href="#course" class="btn btn-primary mt-4 smooth" id="anchor-course">Go to our courses</a></div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5"><img class="w-100 d-block"
                                                                     src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/Hero_Image_Talent_Garden_Zoom_Background_4-900x720.jpg"
                                                                     alt=""></div>
        </div>
      </div>
      <div class="bg-light py-5" id="course">
        <div class="container py-5">
          <div class="col-12">
            <div class="orange text-uppercase font-weight-bold font-size-14 lett-space-2 mb-4 d-flex align-items-start">
              Nairobi
            </div>
            <h2 class="mt-2">Our courses</h2>
            <p class="mb-0">We will be offering multiple courses running concurrently.</p>
            <form class="controls row my-5 align-items-center">
              <fieldset class="col-md-3 col-sm-6 select-wrapper filtro-language" data-filter-group=""><span
                  class="d-block">Languages:</span> <select class="select-campus custom-select d-inline-block">
                <option value="">All Languages</option>
                <option value=".italian">English</option>
                <option value=".italian">Swahili</option>
              </select></fieldset>
              <!--              <fieldset class="col-md-3 col-sm-6 my-sm-0 my-3 select-wrapper" data-filter-group=""><span-->
              <!--                  class="d-block">Type:</span> <select class="select-campus custom-select d-inline-block">-->
              <!--                <option value="">All Types</option>-->
              <!--                <option value=".part-time">Part Time</option>-->
              <!--              </select></fieldset>-->
              <!--              <fieldset class="col-md-3 col-sm-6 my-sm-0 my-3 select-wrapper filtro-topic" data-filter-group=""><span-->
              <!--                  class="d-block">Subject area:</span> <select class="select-campus custom-select d-inline-block">-->
              <!--                <option value="">All Subject areas</option>-->
              <!--                <option value=".business">Business</option>-->
              <!--              </select></fieldset>-->
              <!--              <fieldset class="col-md-3 col-12 ml-auto text-right">-->
              <!--                <button type="reset" class="control control-text reset py-2">Remove filters</button>-->
              <!--              </fieldset>-->
            </form>
            <div v-for="course in courses" :key="course" class="mt-5 container-filter" id="MixItUp8E8326">
              <div class="mix  italy  part-time  calabiana-milan-innovation-school  italian  business"><a
                  href="#"
                  class="px-5 py-4 bg-white d-block w-100 mb-3 single-course ">
                <div class="row align-items-center py-1">
                  <div class="col-lg-7 mb-lg-0 mb-4 pb-lg-0 pb-4">
                    <div class="type d-inline-block mr-2 font-weight-bold text-uppercase text-primary"
                         style="font-size:12px; letter-spacing:2px">Kenya
                    </div>
                    <h4 class="black lubalin font-weight-bold mb-0 font-size-24 d-block my-2">{{ course.name }}
                      Master</h4> <span class="black"><div
                      class="lang d-inline-block px-2 border mr-2 font-weight-medium text-uppercase"
                      style="font-size:12px; letter-spacing:1px; padding-top:2px">English</div> Nairobi Business park </span>
                  </div>
                  <div
                      class="col-lg-2 col-sm-6 mb-sm-0 mb-4 text-center border-left d-sm-block d-flex align-items-center">
                    <span class="primary d-block mb-0">08.10.2021</span> <span
                      class="black lett-space-2 font-size-12 text-uppercase ml-auto">Part Time</span></div>
                  <div class="col-lg-3 col-sm-6"><span class="btn btn-primary d-block py-3">Learn more</span></div>
                </div>
              </a></div>
              <!--              <div class="mix  italy   roma  italian "><a-->
              <!--                  href="#"-->
              <!--                  class="px-5 py-4 bg-white d-block w-100 mb-3 single-course ">-->
              <!--                <div class="row align-items-center py-1">-->
              <!--                  <div class="col-lg-7 mb-lg-0 mb-4 pb-lg-0 pb-4">-->
              <!--                    <div class="type d-inline-block mr-2 font-weight-bold text-uppercase text-primary"-->
              <!--                         style="font-size:12px; letter-spacing:2px">Italy-->
              <!--                    </div>-->
              <!--                    <h4 class="black lubalin font-weight-bold mb-0 font-size-24 d-block my-2">Percorso Executive in Data-->
              <!--                      Driven Business Transformation</h4> <span class="black"><div-->
              <!--                      class="lang d-inline-block px-2 border mr-2 font-weight-medium text-uppercase"-->
              <!--                      style="font-size:12px; letter-spacing:1px; padding-top:2px">Italian</div> Roma </span></div>-->
              <!--                  <div-->
              <!--                      class="col-lg-2 col-sm-6 mb-sm-0 mb-4 text-center border-left d-sm-block d-flex align-items-center">-->
              <!--                    <span class="primary d-block mb-0">07.02.2022</span> <span-->
              <!--                      class="black lett-space-2 font-size-12 text-uppercase ml-auto"></span></div>-->
              <!--                  <div class="col-lg-3 col-sm-6"><span class="btn btn-primary d-block py-3">Learn more</span></div>-->
              <!--                </div>-->
              <!--              </a></div>-->
              <!--              <div class="mix  italy   milano-luiss-hub  italian "><a-->
              <!--                  href="#"-->
              <!--                  class="px-5 py-4 bg-white d-block w-100 mb-3 single-course ">-->
              <!--                <div class="row align-items-center py-1">-->
              <!--                  <div class="col-lg-7 mb-lg-0 mb-4 pb-lg-0 pb-4">-->
              <!--                    <div class="type d-inline-block mr-2 font-weight-bold text-uppercase text-primary"-->
              <!--                         style="font-size:12px; letter-spacing:2px">Italy-->
              <!--                    </div>-->
              <!--                    <h4 class="black lubalin font-weight-bold mb-0 font-size-24 d-block my-2">Digital Business Strategy-->
              <!--                      – Major del Master in Management and Technology</h4> <span class="black"><div-->
              <!--                      class="lang d-inline-block px-2 border mr-2 font-weight-medium text-uppercase"-->
              <!--                      style="font-size:12px; letter-spacing:1px; padding-top:2px">Italian</div> Milano Luiss Hub </span>-->
              <!--                  </div>-->
              <!--                  <div-->
              <!--                      class="col-lg-2 col-sm-6 mb-sm-0 mb-4 text-center border-left d-sm-block d-flex align-items-center">-->
              <!--                    <span class="primary d-block mb-0">25.10.2021</span> <span-->
              <!--                      class="black lett-space-2 font-size-12 text-uppercase ml-auto"></span></div>-->
              <!--                  <div class="col-lg-3 col-sm-6"><span class="btn btn-primary d-block py-3">Learn more</span></div>-->
              <!--                </div>-->
              <!--              </a></div>-->
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
