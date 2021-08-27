<template>
  <div>
    <navigation/>
    <main>
      <div id="header-video" class="position-relative w-100"
           style="background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fsmall-garden-ideas-1614032371.jpg)">
        <div align="center" class="hover d-flex align-items-center" style="background: rgba(0, 0, 0, .6)">
          <div>
            <div class="content-text p-sm-5 p-4" style="background: rgba(0, 0, 0, .1)">
              <h3 class="lubalin mb-4" style="color: #ffffff; letter-spacing: 2px;">We are a unique <span
                  style="color: limegreen">garden</span> of innovation,
                Be part of our community to connect with digital leaders and learn new technologies to build the next
                digital innovation
              </h3>
              <div>
                <router-link class="btn btn-primary mt-5" target="_self" to="/coworking" style="margin: 10px; border-radius: 25px">Become a member</router-link>
                <router-link class="btn btn-primary mt-5" target="_self" to="/school/campus" style="margin: 10px; border-radius: 25px">Learn with us</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-medium pt-5 pb-5 page-intro">
        <div class="row py-5">
          <div class="col-lg-5 order-lg-2 pt-4">
            <div class="max-text mx-auto">
              <h1 class="mt-2">What makes us unique</h1>
              <p>Work within the greenest space in nairobi, excellent outdoor gazebos,
                The space is set to give you clean, quiet and wellness centered co-working and training space
              </p>
              <router-link to="/book-a-space" class="btn btn-primary mt-4 smooth" id="anchor-course">Learn more
              </router-link>
            </div>
          </div>
          <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5">
            <img class="w-100 d-block" src="../../public/images/undraw_different_love_a3rg.png" alt=""></div>
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
