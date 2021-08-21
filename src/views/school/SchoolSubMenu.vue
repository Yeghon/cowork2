<template>
  <ul class="sub-menu">
    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-12651403">
      <ul class="sub-menu">
        <li id="menu-item-12651408"
            class="menu-item menu-item-type-taxonomy menu-item-object-courses_tax menu-item-12651408">
          <router-link
              to="/school/campus">Learn In Campus
          </router-link>
        </li>
      </ul>
    </li>
    <li id="menu-item-12651404"
        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-12651404">
      <ul class="sub-menu">
        <li id="menu-item-12651405"
            class="menu-item menu-item-type-taxonomy menu-item-object-courses_tax menu-item-12651405">
          <router-link
              to="/school/online">Learn Online
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SchoolSubMenu"
}
</script>

<style scoped>

</style>
