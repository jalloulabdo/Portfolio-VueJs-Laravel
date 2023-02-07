<template>
    <section class="portfolio section" id="portfolio">
              <h2 class="section__title">Portfolio</h2>  
              <span class="section__subtitle">Most recent work</span>

              <div class="portfolio_container container swiper-container">
                <div class="swiper-wrapper">
                    <!--============ PORTFOLIO 1 ==============-->
                    <div class="portfolio_content grid swiper-slide">
                        <img src="/img/Screenshot2.png" alt="" class="portfolio_img">

                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Lux Energie Solution</h3>
                            <p class="portfolio_description">
                                Website for a company specializing in
                                heating, electricity, renewable energies
                            </p>
                        </div>
                    </div>
                    <!--============ PORTFOLIO 2 ==============-->
                    <div class="portfolio_content grid swiper-slide">
                        <img src="/img/Screenshot.png" alt="" class="portfolio_img">

                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Yobeen Cloud</h3>
                            <p class="portfolio_description">
                                Yobeen Cloud is an application for easy, interactive, reliable and efficient management of farm irrigation. and management of measured and forecast meteorological data.
                            </p>
                        </div>
                    </div>
                    <!--============ PORTFOLIO 3 ==============-->
                    <div class="portfolio_content grid swiper-slide">
                        <img src="/img/Screenshot3.png" alt="" class="portfolio_img">

                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Table Flipping</h3>
                            <p class="portfolio_description">
                            </p>
                        </div>
                    </div>
                </div>

                <!--Add Arrow-->
                <div class="swiper-button-next">
                </div>
                <div class="swiper-button-prev">
                </div>
                <!--Add Pagination-->
                <div class="swiper-pagination"></div>
              </div>
    </section>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import { Autoplay, Navigation, Pagination } from "swiper";
import Swiper from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Navigation, Pagination]);
onMounted ( (async) =>{
    new Swiper('.portfolio_container', {
        observer: true,
        observeParents: true,
        parallax:true,
        slidesPerView: 1,
        loop:true,
        autoplay: true,
        simulateTouch:true,
        navigation: {
            nextEl: '.portfolio_container .swiper-button-next',
            prevEl: '.portfolio_container .swiper-button-prev',
          },
    });
})

</script>

<style>
.portfolio_data {
    max-width: 93%;
}
</style>