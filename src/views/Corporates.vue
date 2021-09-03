<template>
  <div>
    <navigation/>
    <main>
      <div class="page-intro pt-5 mt-5">
        <div id="intro" class="container-medium pb-5 mb-sm-5">
          <div class="row">
            <div class="container-medium pt-5 pb-5 page-intro">
              <div class="row py-5">
                <div class="col-lg-5 pt-4 order-lg-2">
                  <div class="max-text mx-auto bg-white p-lg-0 p-4">
                    <h2 style="font-family: Typo_Round_bold;">Innovation & Partnerships<br> is to experience change
                      as an opportunity</h2>
                    <p><span
                        style="font-weight: 400;">We have partnered with corporate  entities on the areas of</span>
                    </p>
                    <p><b>Training</b><span style="font-weight: 400;">, We train staff on some skills that will boost your talent pool We offer a number of courses as listed in our talent pool We can offer custom made training on request as well</span>
                    </p>
                    <p><b>Seminars</b><span style="font-weight: 400;">, Come to our facility to undertake seminars and conferences Our space is the best to host outdoor events, social and networking events</span>
                    </p>
                    <p><b>Outsourcing</b><span style="font-weight: 400;">, We have a talent pool where you can pick from Our training produces top talent ready to add to your team We will interview, equip, onboard and send resources to join your team in the shortest time possible</span>
                    </p>
                    <p><b>Software Development</b><span style="font-weight: 400;">, We will develop and deliver software applications </span>
                    </p>
                    <p>&nbsp;</p>
                    <div class="mt-4">
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 mt-lg-0 mt-5 order-lg-1 pr-lg-5">
                  <img class="w-100 d-block" src="../../public/images/new-graphics/Client-Copy-10.jpg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-flex">
        <div class="bg-light" id="row-5">
          <div class="container pt-3 pb-5">
            <div class="row">
              <div align="center" class="col-12 pt-5"><h2 style="font-family: Typo_Round_bold;">Why Partner With Us</h2>
                <p>Talent Garden’s mission is to create local, vibrant, globally connected campuses that empower digital
                  &amp; tech communities.</p></div>
            </div>
            <div class="pt-4 card-group row">
              <div class="card mb-lg-0 mb-4 mx-3 px-0">
                <div class="effect-img"><img class="w-100"
                                             src="../../public/images/new-graphics/Client-Copy-09.jpg"
                                             alt=""></div>
                <div class="card-body py-4">
                </div>
                <h6 class="black">All talents under one roof</h6>
              </div>
              <div class="card mb-lg-0 mb-4 mx-3 px-0">
                <div class="effect-img"><img class="w-100"
                                             src="../../public/images/new-graphics/Client-Copy-04.jpg"
                                             alt=""></div>
                <div class="card-body py-4">
                </div>
                <h6 class="black">Speedy delivery of your project</h6>
              </div>
              <div class="card mb-lg-0 mb-4 mx-3 px-0">
                <div class="effect-img"><img class="w-100"
                                             src="../../public/images/new-graphics/Client-Copy-06.jpg"
                                             alt=""></div>
                <div class="card-body py-4"></div>
                <h6 class="black">Affordable rates</h6>
              </div>
              <div class="card mb-lg-0 mb-4 mx-3 px-0">
                <div class="effect-img"><img class="w-100"
                                             src="../../public/images/new-graphics/Client-Copy-07.jpg"
                                             alt=""></div>
                <div class="card-body py-4"></div>
                <h6 class="black">Training is our specialty</h6>
              </div>
            </div>
            <div class="row align-items-center justify-content-center">
              <div class="col-auto">
                <div class="d-block"><a class="btn btn-primary mt-5" href="#" data-toggle="modal"
                                        data-target="#modalForm5"> Contact Us </a>
                  <div class="modal fade" id="modalForm5" tabindex="-1" role="dialog" aria-labelledby="modalFormTitle"
                       aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered py-5" role="document">
                      <div class="modal-content p-5 bg-primary"><h3 class="white text-center mb-4">Contact Us</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: "corporates",
  components: {Footer, Newsletter, Navigation}
}
</script>

<style scoped>
.black {
  font-family: Typo_Round_bold;
  padding: 10px;
}
</style>
