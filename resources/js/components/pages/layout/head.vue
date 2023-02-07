<template>
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#home" class="nav_logo">
                    JALLOUL ABDERRAHIM
                </a>

                <div class="nav_menu" id="nav-menu">
                    <ul class="nav_list">
                        <li class="nav-item">
                            <a href="#home" class="nav_link active_link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav_link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#skills" class="nav_link">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a href="#services" class="nav_link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#portfolio" class="nav_link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav_link">Contact Me</a>
                        </li>
                    </ul>

                    <div class="nav_close" id="nav-close">
                        <i class="uil uil-times nav_close" id="nav-close"></i>
                    </div>
                </div>

                <div class="nav_btns">
                    <!--===== THEME CHANGE BUTTON =====-->
                    <i class="uil uil-moon change_theme" :class="isnight ? 'uil-sun' : 'uil-moon'"  @click="functionButton(this)"></i>

                    <div class="nav_toogle" id="nav-toggle">
                        <i class="uil uil-bars"></i>
                    </div>
                </div>
            </nav>
        </header>
</template>

<script setup>
import { onMounted,ref } from 'vue';
/*==================== DARK LIGHT THEME ====================*/  
const darkTheme =ref('dark-theme') 
const iconTheme = ref('uil-sun')
const isnight= ref(false)
//Previously selected topic(if user selected)
let selectedTheme = ref('') 
const selectedIcon = ref('')

 


const functionButton=(x) =>{
    
    document.body.classList.toggle(darkTheme.value)
    isnight.value = !isnight.value
    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme.value) ? 'dark' : 'light')
    selectedTheme=localStorage.getItem('selected-theme')
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme.value)
}
const sections = document.querySelectorAll('section[id]')
const scrollY = window.pageYOffset 

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
        console.log(sectionId)
  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
  } else {
    document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
  }
})
</script>