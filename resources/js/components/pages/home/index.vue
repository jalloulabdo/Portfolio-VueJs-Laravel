<template>
    <!--==================== HEADER ====================-->
    <Header ></Header>
    <!--==================== MAIN ====================-->
    <main class="main">
        <!--==================== HOME ====================-->
        <Home></Home>
        <!--==================== ABOUT ====================-->
        <About></About>
        <!--==================== SKILLS ====================-->
        <Skils></Skils>
        <!--==================== QUALIFICATION ====================-->
        <Qualification></Qualification>
         <!--==================== SERVICES ====================-->
         <Services></Services>
         <!--==================== PORTFOLIO ====================-->
         <Portfolio></Portfolio>
         <!--==================== PROJECT IN MIND ====================-->
         <ProjectInMind></ProjectInMind>
          <!--==================== TESTIMONIAL ====================-->
          <!--==================== CONTACT ME ====================-->
          <ContactMe></ContactMe>
    </main>

     <!--==================== FOOTER ====================-->
    <Footer></Footer>
     <!--==================== SCROLL TOP ====================-->
     <a href="#" class="scrollup" id="scroll-up">
          <i class="uil uil-arrow-up scrollup_icon"></i>
     </a>
</template>

<script setup>
import Header from '../layout/head.vue'
import Footer from '../layout/footer.vue'
import Home   from '../layout/home.vue'
import About   from '../layout/about.vue'
import Skils   from '../layout/skills.vue'
import Qualification   from '../layout/qualification.vue'
import Services   from '../layout/services.vue'
import Portfolio   from '../layout/portfolio.vue'
import ProjectInMind   from '../layout/projectinmind.vue'
import TestImonial   from '../layout/testimonial.vue'
import ContactMe   from '../layout/contactme.vue'
import * as SwiperBundle from './js/swiperBundle.js'
import * as mainHome from './js/mainHome.js'

</script>


<style>

  @import './css/baseHome.css';
  @import './css/swiper-bundle.min.css';  
</style>