<template>
  <div class="bg-light" id="row-5">
    <div class="container pt-3 pb-5">
      <div class="row">
        <div class="col-12 pt-5"><h2>Our Services</h2></div>
      </div>
      <div class="pt-4 card-group row">
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Smart-Working.jpg"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Coworking Space</h6>
            <p class="text mb-0">Host over 200 innovators</p></div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Branded-Meeting-Room.jpg"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Private Office</h6>
            <p class="text mb-0">Have a dedicated space within the hub and access other amenities.</p></div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Corporate-Space.jpg"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Host Events
          </h6>
            <p class="text mb-0">Seminars, fireside chats.</p></div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Corporate-Space.jpg"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Campus
          </h6>
            <p class="text mb-0">Train and equip innovators and job seekers on trendy technologies.</p></div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Corporate-Space.jpg"
                                       alt=""></div>
          <div class="card-body py-4"><h6 class="black">Corporate packages
          </h6>
            <p class="text mb-0">We outsource, build software applications for corporate</p></div>
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
