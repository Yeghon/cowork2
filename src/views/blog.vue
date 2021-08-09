<template>
  <div>
    <navigation/>
    <main>
      <div class="pt-5">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-12">
              <nav aria-label="breadcrumb" class="breadcrumb_nav mb-3" typeof="BreadcrumbList"
                   vocab="https://schema.org/"><span property="itemListElement" typeof="ListItem"><router-link
                  property="item"
                  typeof="WebPage"
                  title="Go to Talent Garden."
                  to="/"
                  class="home"><span
                  property="name">Home</span></router-link><meta content="1" property="position"></span><span
                  class="mx-1">/</span><span class="post post-page current-item">Blog</span></nav>
              <div class="line d-block mb-5"></div>
            </div>
            <div class="col-md-8"><h1 class="mb-3">Blog</h1>
              <p>Read all the important news about Talent Garden, discover the hottest trends from the digital and tech
                industry and explore new breakthrough opportunities with our experts.</p></div>
          </div>
        </div>
      </div>
      <section class="blog-page position-relative bg-light py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 categories">
              <li id="categories-5" class="widget widget_categories"><h2 class="widgettitle">Categories</h2>
                <ul>
                  <li class="cat-item cat-item-294"><a href="#">Coding</a></li>
                  <li class="cat-item cat-item-375"><a href="#">Community</a>
                  </li>
                  <li class="cat-item cat-item-309"><a href="#">Corporate
                    Transformation</a></li>
                  <li class="cat-item cat-item-323"><a href="#">Covid-19</a></li>
                  <li class="cat-item cat-item-303"><a
                      href="#">Coworking</a></li>
                  <li class="cat-item cat-item-162"><a href="#">Data</a></li>
                  <li class="cat-item cat-item-293"><a href="#">Design</a></li>
                  <li class="cat-item cat-item-395"><a href="#">Digital
                    Marketing</a></li>
                  <li class="cat-item cat-item-164"><a href="#">Digital
                    Transformation</a></li>
                  <li class="cat-item cat-item-125"><a href="#">Events</a></li>
                  <li class="cat-item cat-item-146"><a href="#">Freelance</a>
                  </li>
                  <li class="cat-item cat-item-163"><a href="#">HR</a>
                  </li>
                  <li class="cat-item cat-item-301"><a href="#">Innovation</a>
                  </li>
                  <li class="cat-item cat-item-300"><a href="#">Marketing</a>
                  </li>
                  <li class="cat-item cat-item-304"><a href="#">News</a></li>
                  <li class="cat-item cat-item-339"><a href="#">Project
                    Management</a></li>
                  <li class="cat-item cat-item-156"><a href="#">RRHH</a></li>
                  <li class="cat-item cat-item-299"><a href="#">Startup</a></li>
                  <li class="cat-item cat-item-373"><a href="#">Sustainability</a>
                  </li>
                  <li class="cat-item cat-item-381"><a href="#">Tag Life</a></li>
                  <li class="cat-item cat-item-1"><a
                      href="#">Uncategorized</a></li>
                </ul>
              </li>
            </div>
            <div class="col-lg-12 py-5">
              <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4">
                  <div class="bg-white d-block post"><a
                      href="#"
                      class="bg-white d-block post">
                    <div class="effect-img"><img width="463" height="350"
                                                 src="https://334045-1026637-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/08/Reskilling-463x350.jpg"
                                                 class="attachment-463x350 size-463x350 wp-post-image" alt="Reskilling"
                                                 loading="lazy"></div>
                  </a>
                    <div class="p-4 bg-white"><a
                        href="#"><h6
                        class="font-size-24 dark font-weight-bold">Reskilling: Trend or Investment for the Future?</h6>
                    </a>
                      <div class="categories-list"><a class="font-size-13 d-inline-block"
                                                      href="#">Tag Life</a></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <newsletter/>
    <Footer/>
  </div>

</template>

<script>
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default {
  name: "blog",
  components: {Navigation, Footer, Newsletter}
}
</script>

<style scoped>

</style>