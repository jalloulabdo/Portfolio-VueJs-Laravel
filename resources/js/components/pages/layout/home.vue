<template>
     <section class="home section" id="home">
                <div class="home_container container grid">
                    <div class="home_img">
                        <img src="/img/home.png" alt="">
                    </div>

                    <div class="home_data">
                        <h1 class="home_title">Hi, I'am Jalloul Abderrahim</h1>
                        <h3 class="home_subtitle">Full Stack Developer & Graphic Designer</h3>
                        <p class="home_description">
                            High level experience in web design,fornt-en and backend development, producing quality work.
                        </p>
                        <a href="#contact" class="button button--flex">
                            Contact Me <i class="uil uil-message button__icon"></i>
                        </a>
                        <div class="home_scroll">
                            <a href="#about" class="home_scroll-button button--flex"></a>
                            <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                            <span class="home_scroll-name">Scroll down</span>
                            <i class="uil uil-arrow-down home_scroll-arrow"></i>
                        </div>
                        <div class="home_social">
                            <span class="home_social-follow">Follow Me</span>
                            <div class="home_social-links">
                                <a href="https://www.linkedin.com/in/abderrahim-jalloul-901821176/" target="_blank" class="home_social-icon">
                                    <i class="uil uil-linkedin-alt"></i>
                                </a>
                                <a href="https://dribbble.com/Jalloul2" target="_blank" class="home_social-icon">
                                    <i class="uil uil-dribbble"></i>
                                </a>
                                <a href="https://github.com/jalloulabdo" target="_blank" class="home_social-icon">
                                    <i class="uil uil-github-alt"></i>
                                </a>
                            </div>
                        </div>

                        <div class="home_scroll_social">
                            <div class="home_scroll1" ref="myScrollTarget"  >
                                <a href="#about" class="home_scroll-button button--flex" ></a>
                                <i class="uil uil-mouse-alt home_scroll-mouse" @click="toBottom"></i>
                                <span class="home_scroll-name" @click="toBottom">Scroll down</span>
                                <i class="uil uil-arrow-down home_scroll-arrow" @click="toBottom"></i>
                            </div>
                            <div class="home_social1" >
                                <div class="home_social-link" >
                                    <a href="https://www.linkedin.com/in/abderrahim-jalloul-901821176/" target="_blank" class="home_social-icon">
                                        <i class="uil uil-linkedin-alt"></i>
                                    </a>
                                    <a href="https://dribbble.com/Jalloul2" target="_blank" class="home_social-icon">
                                        <i class="uil uil-dribbble"></i>
                                    </a>
                                    <a href="https://github.com/jalloulabdo" target="_blank" class="home_social-icon">
                                        <i class="uil uil-github-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
    </section>
</template>

<script>
export default {
methods: {
    toBottom(){
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
    }
}
}
</script>

<style>
.home_scroll-arrow{
    cursor: pointer;
}
.home_scroll-mouse{
    cursor: pointer;
}
</style>