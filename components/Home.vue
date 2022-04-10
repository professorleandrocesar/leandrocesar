<template>
<div>    
  <div class="main mainOne">
    <a @click="personal" class='lineBtn' :class='{ lineBtnHover: aplicar }'>
    <i class="fas fa-dumbbell"></i><br>Professor Leandro Cesar
    </a>   
  </div>

  <div v-html='content'></div>

  <div class="main mainTwo"> 
    <a @click="deep" class='lineBtnTwo' :class='{ lineBtnHoverTwo: aplicarTwo }'>
    <i class="fas fa-yin-yang"></i><br>Deep Acupuntura
    </a>
  </div>

  <div v-html='contentTwo'></div>
<!--
  <div class="main mainTree"> 
    <a @click="espirita" class='lineBtnTree' :class='{ lineBtnHoverTree: aplicarTree }'>
    <i class="fas fa-bible"></i><br>Espirita.xyz
    </a>
  </div>

  <div v-html='contentTree'></div>
  -->
</div>
</template>
<script>
export default {
data() {
        return {
            content: ``,
            contenticonone: ``,
            contenticontwo: ``,
            contentTwo: '',
            finalidades: ``,
            aplicar: '',
            aplicarTwo: '',
            aplicarTree: '',
            aplicarFour: '',
            aplicarFive: '',
            aplicarSix: ''
        }
    },
  methods: {
    personal() {
      this.content = `
      <div class="main mainOne">
      <a href="https://instagram.com/professorleandrocesar" class=''>
        <i class="fab fa-instagram-square"></i> Instagram
      </a>
      <a href="https://professorleandrocesar.com" class=''>
        <i class="fas fa-globe"></i> Site
      </a>
      <a href="https://youtube.com/leandrocesarcosta" class=''>
        <i class="fab fa-youtube"></i> Youtube
      </a>
    <a href="https://professorleandrocesar.com/blog">
      <i class="fas fa-blog"></i> Blog
    </a>
  </div>
      `,
      this.aplicar= true,
      this.aplicarTwo= false,
      this.contentTwo = ``,
      this.contentTree = ``
    },
    deep() {
        this.contentTwo = `
        <div class="main mainTwo">
      <a href="https://instagram.com/deepacupuntura" class=''>
        <i class="fab fa-instagram-square"></i> Instagram
      </a>
      <a href="https://deepacupuntura.com" class=''>
        <i class="fas fa-globe"></i> Site
      </a>
      <a href="https://www.youtube.com/channel/UCRaQUE-GsQ4GglE8hElm17w" class=''>
        <i class="fab fa-youtube"></i> Youtube
      </a>
  </div>
      `,
      this.content = ``,
      this.contentTree = ``,
      this.aplicar= false,
      this.aplicarTwo= true
    },
    espirita() {
        this.contentTree = `
        <div class="main mainTree">
      <a href="https://instagram.com/espirita.xyz" class=''>
        <i class="fab fa-instagram-square"></i> Instagram
      </a>
      <a href="https://espirita.xyz" class=''>
        <i class="fas fa-globe"></i> Site
      </a>
  </div>
      `,
      this.content = ``,
      this.contentTwo = ``,
      this.aplicar= false,
      this.aplicarTwo= true
    }
  }
}
</script>