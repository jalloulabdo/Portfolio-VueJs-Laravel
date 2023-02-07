<template>
    <section class="services section" id="services">
              <h2 class="section__title">Services</h2> 
              <span class="section__subtitle">What is offer</span> 

              <div class="services_container container grid">
                <!--============== SERVICES 1 =============-->
                <div class="services_content">
                    <div>
                        <i class="uil uil-web-grid services_icon"></i>
                        <h3 class="services_title">Ui/Ux <br> Designer</h3>
                    </div>
                    <span class="button button--flex button--small button--link services_button" @click="showModalf(1)">
                        View More
                        <i class="uil uil-arrow-right button_icon"   ></i>
                    </span>

                    <div class="services_modal " :class="showModal1 ? 'active_modal' : ''">
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">UI/UX <br> Designer</h4>
                            <i class="uil uil-times services_modal-close" @click="closeModalf(1)"></i>

                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page development</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I create ux element interactions</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--============== SERVICES 2 =============-->
                <div class="services_content">
                    <div>
                        <i class="uil uil-web-grid services_icon"></i>
                        <h3 class="services_title">Frontend <br> Developer</h3>
                    </div>
                    <span class="button button--flex button--small button--link services_button"  @click="showModalf(2)">
                        View More
                        <i class="uil uil-arrow-right button_icon" ></i>
                    </span>

                    <div class="services_modal " :class="showModal2 ? 'active_modal' : ''">
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Frontend <br> Developer</h4>
                            <i class="uil uil-times services_modal-close" @click="closeModalf(2)"></i>

                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page development</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I create ux element interactions</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--============== SERVICES 3 =============-->
                <div class="services_content">
                    <div>
                        <i class="uil uil-web-grid services_icon"></i>
                        <h3 class="services_title">Backend <br> Developer</h3>
                    </div>
                    <span class="button button--flex button--small button--link services_button" @click="showModalf(3)">
                        View More
                        <i class="uil uil-arrow-right button_icon" ></i>
                    </span>

                    <div class="services_modal" :class="showModal3 ? 'active_modal' : ''">
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Backend <br> Developer</h4>
                            <i class="uil uil-times services_modal-close" @click="closeModalf(3)"></i>

                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page development</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I create ux element interactions</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--============== SERVICES 4 =============-->
                <div class="services_content">
                    <div>
                        <i class="uil uil-web-grid services_icon"></i>
                        <h3 class="services_title">Branding <br> Designer</h3>
                    </div>
                    <span class="button button--flex button--small button--link services_button" @click="showModalf(4)">
                        View More
                        <i class="uil uil-arrow-right button_icon" ></i>
                    </span>

                    <div class="services_modal" :class="showModal4 ? 'active_modal' : ''">
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Branding <br> Designer</h4>
                            <i class="uil uil-times services_modal-close" @click="closeModalf(4)"></i>

                            <ul class="services_modal-services grid">
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page development</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I create ux element interactions</p>
                                </li>
                                <li class="services_modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </section>
</template>

<script setup>
import { onMounted,ref } from 'vue';
const showModal1= ref(false)
const showModal2= ref(false)
const showModal3= ref(false)
const showModal4= ref(false)


const showModalf=(x) =>{

if(x===1){showModal1.value=!showModal1.value}
if(x===2){showModal2.value=!showModal2.value}
if(x===3){showModal3.value=!showModal3.value}
if(x===4){showModal4.value=!showModal4.value}

}

const closeModalf=(x) =>{

if(x===1){showModal1.value=!showModal1.value}
if(x===2){showModal2.value=!showModal2.value}
if(x===3){showModal3.value=!showModal3.value}
if(x===4){showModal4.value=!showModal4.value}

}
</script>