<template>
  <div class="bg-light" id="row-5" align="center">
    <div class="container pt-3 pb-5">
      <div class="row">
        <div class="col-12 pt-5"><h2>Become a member and get full access</h2></div>
      </div>
      <div v-for="rate in rates" :key="rate" class="pt-4 card-group row">
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Smart-Working.jpg"
                                       alt=""></div>
          <div class="card-body py-4">
            <p>Daily Membership</p>
            <h3 class="black">Ksh. 2,000</h3>
            <p>Per Day, Excluding VAT</p>
            <p class="text mb-0">For companies that want to give their employees the opportunity to do smart<br>
              working in an innovative space that stimulates new ideas and connections with talented
              professionals.</p></div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Branded-Meeting-Room.jpg"
                                       alt=""></div>
          <div class="card-body py-4"><p>Monthly Membership</p>
            <h3 class="black">Ksh. 20,000</h3>
            <p>Per Day, Excluding VAT</p>
            <p class="text mb-0">An interactive space capable of adding value to business meetings with your
              partners and to convey the key message of your brand to the community. The meeting room can be
              reserved by the community online.</p></div>
        </div>
        <div class="card mb-lg-0 mb-4 mx-3 px-0">
          <div class="effect-img"><img class="w-100"
                                       src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Corporate-Space.jpg"
                                       alt=""></div>
          <div class="card-body py-4"><p>Dedicated Desk</p>
            <h3 class="black">Ksh. 25,000</h3>
            <p>Per Day, Excluding VAT</p>
            <p class="text mb-0">Choose between a dedicated private office from 4 up to 20 people or branded desks
              in an open space to experience our way of working in close contact with the community.</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoworkingRates",
  data() {
    return {
      rates: [
        {
          daily: {
            cost: 'Ksh. 2,000',
            imgSource: 'https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Smart-Working.jpg',
          },
          monthly: {
            cost: 'Ksh. 20,000',
            imgSource: 'https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Branded-Meeting-Room.jpg',
          },
          dedicatedDesk: {
            cost: 'Ksh. 25,000',
            imgSource: 'https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/Corporate-Space.jpg',
          },
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
