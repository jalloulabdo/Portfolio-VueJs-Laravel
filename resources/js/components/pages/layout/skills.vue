<template>
    <section class="skills section" id="skills">
              <h2 class="section__title">Skills</h2>
              <span class="section__subtitle">My technical lever</span>

              <div class="skills_container container grid">
                <div>
                    <!--=========== SKILL 1 ============-->
                    <div class="skills_content " :class="first ? 'skills_open' : 'skills_close'">
                        <div class="skills_header">
                            <i class="uil uil-brackets-curly skills_icon"></i>

                            <div>
                                <h1 class="skills_title">Frontend developer</h1>
                            </div>

                            <i class="uil uil-angle-down skills_arrow" @click="firstSkill()"></i>
                        </div>
                        <div class="skills_list grid">
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">HTML</h3>
                                    <span class="skills_number">90%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_html"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">CSS</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_css"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">JavaScript</h3>
                                    <span class="skills_number">60%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_javascript"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Vue js</h3>
                                    <span class="skills_number">60%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_javascript"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">nuxt js</h3>
                                    <span class="skills_number">60%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_javascript"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--=========== SKILL 2 ============-->
                    <div class="skills_content " :class="secnd ? 'skills_open' : 'skills_close'">
                        <div class="skills_header">
                            <i class="uil uil-server-network skills_icon"></i>

                            <div>
                                <h1 class="skills_title">Backend developer</h1>
                            </div>

                            <i class="uil uil-angle-down skills_arrow" @click="secndSkill()"></i>
                        </div>
                        <div class="skills_list grid">
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">PHP</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_php"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Laravel</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_php"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Node J6</h3>
                                    <span class="skills_number">50%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_nodejs"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <!--=========== SKILL 3 ============-->
                    <div class="skills_content " :class="last ? 'skills_open' : 'skills_close'">
                        <div class="skills_header">
                            <i class="uil uil-server-network skills_icon"></i>

                            <div>
                                <h1 class="skills_title">Designer</h1>
                                <span class="skills_subtitle">More than 5 years</span>
                            </div>

                            <i class="uil uil-angle-down skills_arrow" @click="lastSkill()"></i>
                        </div>
                        <div class="skills_list grid">
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Figma</h3>
                                    <span class="skills_number">90%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_figma"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Photoshop</h3>
                                    <span class="skills_number">45%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_nodejs"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Illustrator</h3>
                                    <span class="skills_number">85%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_photoshop"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </section>
</template>

<script setup>
import { onMounted,ref } from 'vue';

const first= ref(true)
const secnd= ref(true)
const last= ref(true)

const firstSkill=() =>{
    first.value = !first.value
}
const secndSkill=() =>{
    secnd.value = !secnd.value
}
const lastSkill=() =>{
    last.value = !last.value
}



</script>