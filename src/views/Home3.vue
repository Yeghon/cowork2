<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative"
           style="background-image: url('images/mustard-lounge-15-pax-office01-Copy-3-scaled.jpg')">
        <div class="hover d-flex align-items-center justify-content-center">
          <div style="align-items: center; align-content: center">
            <div class="p-sm-5 p-4 flex content-header justify-content-center align-content-center">
              <h3 class="lubalin mb-4 text-center content-header-text text-capitalize">Not your <em>ordinary</em> <br>
                Office Space</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container-medium pt-5 pb-5 page-intro">
        <div class="row py-5">
          <div class="col-lg-5 order-lg-2 pt-4">
            <div class="max-text mx-auto">
              <nav aria-label="breadcrumb" class="breadcrumb_nav mb-3" typeof="BreadcrumbList"
                   vocab="https://schema.org/"><span property="itemListElement" typeof="ListItem"><router-link
                  class="home"
                  property="item"
                  title="Go to Talent Garden."
                  to="/"
                  typeof="WebPage"><span
                  property="name">Home</span></router-link><meta content="1" property="position"></span><span
                  class="mx-1">/</span><span property="itemListElement" typeof="ListItem"><router-link
                  class="courses-root post post-courses"
                  property="item"
                  title="Go to Innovation School."
                  to="/innovation-school"
                  typeof="WebPage"><span
                  property="name">Innovation School</span></router-link><meta content="2"
                                                                              property="position"></span><span
                  property="itemListElement" typeof="ListItem"><meta content="3" property="position"></span></nav>
              <div class="line"></div>
              <h1 class="mt-2">What makes us unique</h1>
              <p>Work within the greenest space in nairobi, excellent outdoor gazebos,
                The space is set to give you clean, quiet and wellness centered co-working and training space
              </p> <a
                id="anchor-course" class="btn btn-primary mt-4 smooth" href="#course">Learn more</a></div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5"><img alt=""
                                                                     class="w-100 d-block"
                                                                     src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/Hero_Image_Talent_Garden_Zoom_Background_4-900x720.jpg">
          </div>
        </div>
      </div>
      <our-services/>
      <benefits-of-joining-us/>
      <our-locations/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "@/components/NavBar";
import Footer from "@/components/Footer";
import OurServices from "@/views/home/OurServices";
import BenefitsOfJoiningUs from "@/views/home/BenefitsOfJoiningUs";
import OurLocations from "@/views/home/OurLocations";

export default {
  name: "Home2",
  components: {OurLocations, BenefitsOfJoiningUs, OurServices, Footer, Navigation}
}
</script>

<style scoped>
.content-header {
  background: transparent !important;
  text-align: center;
}

.content-header-text {
  color: white;
  font-size: 5em;
}

/*.parent {*/
/*  position: absolute;*/
/*  width: 873px;*/
/*  height: 1085px;*/
/*  background: #C4C4C4;*/
/*  border: 1px solid #000000;*/
/*  box-sizing: border-box;*/
/*  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
/*}*/

/*.top {*/
/*  position: absolute;*/
/*  width: 872px;*/
/*  height: 185px;*/
/*  background: #73AD45;*/
/*}*/

/*.unique {*/
/*  position: static;*/
/*  width: 873px;*/
/*  height: 116px;*/
/*  background: rgba(0, 0, 0, 0.77);*/
/*}*/

/*.tour {*/
/*  position: static;*/
/*  width: 873px;*/
/*  height: 311px;*/
/*  background: #0E0C0C;*/
/*}*/

</style>
