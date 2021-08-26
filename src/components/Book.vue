<template>
  <div>
    <navigation/>
    <div align="center" style="margin: 30px">
      <div>
        <img src="public/images/deflogo.png"/>
      </div>
      <div>
        <h3>Book a Space/Room</h3>
      </div>
      <div style="position: center; margin: 20px; border: 3px solid limegreen; border-radius: 15px">
        <form>
          <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="fname" placeholder="firstname" required><br>

          <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="lname" placeholder="lastname" required><br>

          <label for="email">Email Address:</label><br>
          <input type="email" id="email" name="email" placeholder="email@123.com" required><br>

          <label for="phone" class="fa">Phone Number:</label><br>
          <input type="text" id="phone" name="phone" placeholder="07XXXXXXXX" required><br>

          <label for="product">Product:</label><br>
          <select required id="product">
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="dedicated">Dedicated desk</option>
          </select><br>
          <button class="btn btn-primary mt-4 smooth" id="anchor-course" style="margin-bottom: 10px; border-radius: 15px">Book a space</button>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "Book",
  components: {Footer, Navigation}
}
</script>

<style scoped>

label {
  margin: 15px;
}

</style>
