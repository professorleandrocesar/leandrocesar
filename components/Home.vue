<template>
<div>    
  <div class="main">
    <h1>Meu negócio</h1>
    <a href="https://deepacupuntura.com">
      <i class="fas fa-building"></i><br>Deep Acupuntura
    </a>
  </div>
  <div class="main">
    <h1>Serviços</h1>
      <NuxtLink to="personal" class='lineBtn' :class='{ lineBtnHover: aplicar }'>
        <i class="fas fa-dumbbell"></i><br>Personal
      </NuxtLink>
  <div class='btn-after'>
      <NuxtLink to="/avaliacao" class=''>
        <i class="fas fa-clipboard"></i><br>Avaliação
      </NuxtLink>
      <NuxtLink to="/consultoria" class=''>
        <i class="fas fa-running"></i><br>Consultoria
      </NuxtLink>
      </div>
  </div>
  <div class="main btn-afterTwo">
    <a href="https://blog.leandrocesar.co">
      <i class="fas fa-blog"></i><br>Blog
    </a>
    <NuxtLink to="/parceiros">
      <i class="fas fa-handshake"></i><br>Parceiros
    </NuxtLink>
    <NuxtLink to="/links">
      <i class="fas fa-link"></i><br>Links
    </NuxtLink>
  </div>

  </div>
</template>
<script>
export default {
data() {
        return {
            content: ``,
            contenticonone: ``,
            contenticontwo: ``,
            contenttwo: '',
            finalidades: ``,
            aplicar: true,
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
      <div class='btn-after'>
      <a to="/avaliacao" class=''>
        <i class="fas fa-clipboard"></i><br>Avaliação
      </a>
      <a href="https://leandrocesar.co/consultoria" class=''>
        <i class="fas fa-running"></i><br>Consultoria
      </a>
      <a href="https://leandrocesar.co/personal" class=''>
        <i class="fas fa-dumbbell"></i><br>Personal
      </a>
      </div>
      `,
      this.contenticonone= `<i class="fas fa-angle-down"></i>`,
      this.contenticontwo= `<i class="fas fa-angle-right"></i>`,
      this.contenttwo = ``
    },
    trainning() {
        this.contenttwo = `
        Programa de atividade física personalizado, estruturado de acordo com os objetivos, tempo disponível e local para o treinamento,
        suas motivações e sendo readaptado de acordo com o feddback do cliente.
      `,
      this.content = ``,
        this.contenticonone= `<i class="fas fa-angle-right"></i>`,
        this.contenticontwo= `<i class="fas fa-angle-down"></i>`
    },
    estetica() {
      this.finalidades = `- Desenvolvimento e manutenção da estética corporal: <br><ul><li>Hipertrofia: Aumento da massa corporal magra,
            sendo o treinamento de musculação a melhor forma de desenvolver a musculatura; </li><li>Diminuição do % de gordura:
            Redução da gordura corporal, por meio de exercícios aeróbicos de baixa intensidade e longa duração (iniciantes sedentários),
            utilizando os lipídeos como 'combustível' principal, provocando diminuição no percentual de gordura;</li></ul>`,
      this.aplicar = true,
      this.aplicarTwo = false,
      this.aplicarTree = false,
      this.aplicarFour = false,
      this.aplicarFive = false,
      this.aplicarSix = false
    },
    terapeutica() {
      this.finalidades = `- Correção e/ou estabilização de desvios e disfunções orgânicas, reabilitação,
      lesões por esforço repetitivo (LER), doenças osteomusculares relacionadas ao trabalho (DORT);`,
      this.aplicar = false,
      this.aplicarTwo = true,
      this.aplicarTree = false,
      this.aplicarFour = false,
      this.aplicarFive = false,
      this.aplicarSix = false
    },
    profilatica() {
      this.finalidades = `- Prevenção de desvios posturais, de lesões musculares e articulares, de falta de
      atividade física permanente, de lesões por esforça repetitivo;`,
      this.aplicar = false,
      this.aplicarTwo = false,
      this.aplicarTree = true,
      this.aplicarFour = false,
      this.aplicarFive = false,
      this.aplicarSix = false
    },
    preparacao() {
      this.finalidades = `- Desenvolvimento e aprimoramento das qualidades físicas relacionadas às estruturas
      cardiorrespiratórias e neuromusculares:<ul><li>Resistência Aeróbica: É desenvolvida através de exercícios aeróbicos, como
      caminhada, corrida, natação, ciclismo, proporcionando maior eficiência nas atividades do dia-a-dia ou para esportes competitivos;</li>
      <li>Força: Aumento de Força muscular com exercícios direcionados para este tipo de trabalho realizados na musculação;</li>
      </ul> `,
      this.aplicar = false,
      this.aplicarTwo = false,
      this.aplicarTree = false,
      this.aplicarFour = true,
      this.aplicarFive = false,
      this.aplicarSix = false
    },
    competitiva() {
      this.finalidades = `- Relacionada ao treinamento de modalidades esportivas;<br>- Desenvolvimento e/ou aperfeiçoamento de
      valências físicas, tais como:
      <ul>
       <li>Agilidade; </li>
       <li>Velocidade; </li>
       <li>Equilíbrio; </li>
       <li>Coordenação;</li>
       <li>Resistência;</li>
       <li>Flexibilidade;</li>
       <li>Descontração;</li>
       <li>Ritmo;</li>
       <li>Potência;</li>
       </ul>`,
      this.aplicar = false,
      this.aplicarTwo = false,
      this.aplicarTree = false,
      this.aplicarFour = false,
      this.aplicarFive = true,
      this.aplicarSix = false
    },
    especiais() {
      this.finalidades = `- Aplicadas à terceira idade, hipertensos, diabéticos etc.;<br>- Conhecimento dos diversos quadros patológicos,
      para que se possa prescrever exercícios físicos de forma segura e eficaz, buscando otimizar os benefícios para estes grupos especiais;`,
      this.aplicar = false,
      this.aplicarTwo = false,
      this.aplicarTree = false,
      this.aplicarFour = false,
      this.aplicarFive = false,
      this.aplicarSix = true
    }
  }
}
</script>