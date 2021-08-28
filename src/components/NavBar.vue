<template>
  <header class="position-fixed">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2 col-6 logo pl-lg-0 pl-4 py-2">
          <router-link class="ml-3 logo" to="/"><img
              class="bg-transparent" src="../../public/images/Talent-Logo-01.png"
              alt="Talent Garden" height="65px"></router-link>
        </div>
        <div class="d-lg-none d-block ml-auto pr-4">
          <button id="menuCollapse" @click="toggleNavbar()">
            <svg class="ham hamRotate" viewBox="0 0 100 100" width="52" onclick="this.classList.toggle('active')">
              <path class="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path>
              <path class="line middle" d="m 30,50 h 40"></path>
              <path class="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path>
            </svg>
          </button>
        </div>
        <nav id="nav" class="col-lg-10 text-right text-uppercase px-lg-3 px-0" v-bind:class="{ open: navOpen }">
          <div class="menu-main-menu-container">
            <ul id="menu-main-menu" class="menu">
              <li v-if="$route.name === 'corporates'" id="menu-item-24"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24 current-menu-item">
                <router-link active-class="current-menu-item" to="/corporates">Corporates</router-link>
              </li>
              <li v-else id="menu-item-24"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24">
                <router-link active-class="current-menu-item"
                             to="/corporates">Corporates
                </router-link>
              </li>
              <li v-if="$route.name === 'innovation-school'" id="menu-item-25"
                  class="menu-item menu-item-type-post_type current-menu-item menu-item-object-page menu-item-has-children menu-item-25">
                <router-link to="/school/campus">Campus &nbsp;<font-awesome-icon icon="chevron-down"/>
                </router-link>
                <SchoolSubMenu/>
              </li>
              <li v-else id="menu-item-25"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-25">
                <router-link to="/school/campus" class="fa fa-angle-down">Campus &nbsp;<font-awesome-icon
                    icon="chevron-down"/>
                </router-link>
                <SchoolSubMenu/>
              </li>
              <li v-if="$route.name === 'coworking'" id="menu-item-25"
                  class="menu-item menu-item-type-post_type current-menu-item menu-item-object-page menu-item-has-children menu-item-25">
                <router-link to="/coworking/subcoworking">Coworking &nbsp;<font-awesome-icon icon="chevron-down"/>
                </router-link>
                <coworking-sub-menu/>
              </li>
              <li v-else id="menu-item-25"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-25">
                <router-link to="/coworking/subcoworking">Coworking &nbsp;<font-awesome-icon
                    icon="chevron-down"/>
                </router-link>
                <coworking-sub-menu/>
              </li>
              <li v-if="$route.name === 'hire'" id="menu-item-25"
                  class="menu-item menu-item-type-post_type current-menu-item menu-item-object-page menu-item-has-children menu-item-25">
                <router-link to="#">Hire &nbsp;<font-awesome-icon icon="chevron-down"/>
                </router-link>
                <HireProfessionals/>
              </li>
              <li v-else id="menu-item-25"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-25">
                <router-link to="#">Hire &nbsp;<font-awesome-icon
                    icon="chevron-down"/>
                </router-link>
                <HireProfessionals/>
              </li>
              <li v-if="$route.name === 'about'" id="menu-item-21"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21 current-menu-item">
                <router-link to="/about">About</router-link>
              </li>
              <li v-else id="menu-item-21"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21">
                <router-link
                    to="/about">About
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import CoworkingSubMenu from "@/views/coworking/CoworkingSubMenu";
import SchoolSubMenu from "@/views/school/SchoolSubMenu";
import HireProfessionals from "@/views/hire/HireProfessionals";

export default {
  name: 'navigation',
  components: {HireProfessionals, SchoolSubMenu, CoworkingSubMenu},
  data: function () {
    return {
      navOpen: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.navOpen = !this.navOpen;
    }
  },
}
</script>
