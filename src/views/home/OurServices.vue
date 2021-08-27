<template>
  <div class="bg-light" id="row-5">
    <div class="container pt-3 pb-5">
      <div class="row">
        <div style="display: grid; place-items: center" class="col-12 pt-5"><h2>Our Services</h2></div>
      </div>
      <div class="pt-4 card-group row">
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="../../../public/images/undraw_co-working_825n.png"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Coworking Space</h6>
            <p class="text mb-0">Host over 200 innovators</p>
          </div>
          <div style="display: grid; place-items: center">
            <router-link class="btn btn-primary mt-5" target="_self" to="/coworking/subcoworking">Learn more
            </router-link>
          </div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="../../../public/images/undraw_teacher_35j2.png"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Private Office</h6>
            <p class="text mb-0">Have a dedicated space within the hub and access other amenities.</p>
          </div>
          <div style="display: grid; place-items: center">
            <router-link class="btn btn-primary mt-5" target="_self" to="/coworking/privateoffice">Learn more
            </router-link>
          </div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="../../../public/images/undraw_special_event_4aj8.png"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Host Events
          </h6>
            <p class="text mb-0">Seminars, fireside chats.</p></div>
          <div style="display: grid; place-items: center">
            <router-link class="btn btn-primary mt-5" target="_self" to="/event-spaces">Learn more</router-link>
          </div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="../../../public/images/undraw_Having_fun_re_vj4h.png"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Campus
          </h6>
            <p class="text mb-0">Train and equip innovators and job seekers on trendy technologies.</p>
          </div>
          <div style="display: grid; place-items: center">
            <router-link class="btn btn-primary mt-5" target="_self" to="/school/campus">Learn more</router-link>
          </div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="../../../public/images/undraw_Payments_re_77x0.png"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Corporate packages
          </h6>
            <p class="text mb-0">We outsource, build software applications for corporate</p>
          </div>
          <div style="display: grid; place-items: center">
            <router-link class="btn btn-primary mt-5" target="_self" to="/corporates">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurServices",
  data() {
    return {
      services: [
        {
          service: 'Coworking Space',
          description: 'Host over 200 innovators',
        },
        {
          service: 'Private Office',
          description: 'Have a dedicated space within the hub and access other amenities',
        },
        {
          service: 'Host Events',
          description: 'Seminars, fireside chats',
        },
        {
          service: 'Campus',
          description: 'Train and equip innovators and job seekers on trendy  technologies',
        },
        {
          service: 'Corporate Packages',
          description: 'We outsource, build software applications for corporate',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
