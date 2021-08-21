<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative w-100"
           style="background-image: url(https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/intro-home.jpg)">
        <div class="video">
          <div class="embed-responsive embed-responsive-16by9 overlay-img">
            <img alt=""
                 class="w-100"
                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fsmall-garden-ideas-1614032371.jpg%3Fcrop%3D0.668xw%3A1.00xh%3B0.332xw%2C0%26resize%3D640%3A*&f=1&nofb=1">

          </div>
        </div>
        <div class="hover d-flex align-items-center">
          <div style="align-items: center; align-content: center">
            <div class="content-text p-sm-5 p-4"><h3 class="lubalin mb-4">Welcome to the <span style="color: limegreen">garden</span>
              of innovation,
              A green eco ecosystem to work like no other,
              We equip you with skills and technologies to build the next generation of innovations.
              Welcome to our community and be part of the next generation DIGITAL leaders
            </h3>
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
                  property="itemListElement" typeof="ListItem"><meta property="position" content="3"></span></nav>
              <div class="line"></div>
              <h1 class="mt-2">What makes us unique</h1>
              <p>Work within the greenest space in nairobi, excellent outdoor gazebos,
                The space is set  to give you clean, quiet and wellness centered  co-working and training space
              </p> <a
                href="#course" class="btn btn-primary mt-4 smooth" id="anchor-course">Learn more</a></div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5"><img class="w-100 d-block"
                                                                     src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/11/Hero_Image_Talent_Garden_Zoom_Background_4-900x720.jpg"
                                                                     alt=""></div>
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
