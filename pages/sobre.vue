<template>
    <div>
    <Nav/>
      <div id="main" class="nav-in"> 
        <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i> Voltar</a>
      </div>
      <div id="main">
          <div class="main-c"><i class="fas fasi fa-address-card"></i></div>  
          <h1>Sobre</h1>
        <H2 class="main-c">leandrocesar.co</H2>
        <p class='main-c'>
          A proposta deste site, é divulgar os projetos de <b>'Leandro Cesar Ramos da Costa'</b>.<br>
        </p>
        <br>
        <div class="hr"></div>
          <!-- <a href="sobre#teste">teste</a> -->
          <h3 class="main-c">Leandro Cesar Ramos da Costa</h3>
          <!-- Colocar uma foto minha embaixo!! -->
          <!-- <div class="leandro-id">
            <img src="/src/assets/favicon.svg" alt="">
          </div> -->
          <p class="nav-in"><i class="fas fa-link"></i> <a href="http://lattes.cnpq.br/3830820363501969" target="_blank">Currículo Lattes - CNPQ <i class="fas fa-external-link-alt"></i></a></p>
          <p>
            <ul class="main-l">
              <li>Profissional de Educação Física;</li>
              <li>CREF: 029260-G/RJ;</li>
              <li>Graduação em Educação Física - Universidade Salgado de Oliveira - UNIVERSO (2005 - 2008);</li> 
              <li>Pós-Graduação Lato-Sensu (especialização) em Acupuntura - Universidade Celso Lisboa - UCL (2018 - 2022);</li>
              <li>Pós-Graduando em Cinesiologia, Biomecânica e Treinamento Físico - Universidade Castelo Branco - UCB (2021 - atual);</li>
              <li>Pós-Graduando em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação - Universidade Castelo Branco - UCB (2021 - atual);</li>
              <li>Instrutor de Krav-maga (Brown Belt) - BUKAN;</li>
              <li>Quase Professor de Yoga - SHIVA STUDIO;</li>
            </ul>       
        </p>
        
            <!--
        <h3 class="main-c">
          Projetos
        </h3>
        <div class='projetos'>
            <h4 @click='educa' class='dateYear' :class='{ dateYearHover: aplicarEduca }'>Educação Física</h4>
            <h4 @click='acupu' class='dateYear' :class='{ dateYearHover: aplicarAcupu }'>Acupuntura</h4>
            <h4 @click='umSete' class='dateYear' :class='{ dateYearHover: aplicarTree }'>Krav-maga</h4>
            <h4 @click='umUm' class='dateYear' :class='{ dateYearHover: aplicarFour }'>Programação</h4>
            <h4 @click='zeroOito' class='dateYear' :class='{ dateYearHover: aplicarFive }'>Espiritismo</h4>
            <h4 @click='zeroCinco' class='dateYear' :class='{ dateYearHover: aplicarSix }'>| 2005 |</h4>
            <h4 @click='oitoSeis' class='dateYear' :class='{ dateYearHover: aplicarSeven }'>| 1986 |</h4>
            
        </div>
        <br>
        <div v-html='projetos'></div>
            -->
        <div class="hr"></div>
        <h3 class="main-c">
          Acontecimentos <br> | linha do tempo |
        </h3>
        <div class='years'>
            <h4 class='dateYear' >|</h4>
            <h4 @click='doisDois' class='dateYear' :class='{ dateYearHover: aplicarEight }'>2022</h4>
            <h4 class='dateYear' >|</h4>
            <h4 @click='doisUm' class='dateYear' :class='{ dateYearHover: aplicar }'> 2021</h4>
            <h4 class='dateYear' >|</h4>
            <h4 @click='umOito' class='dateYear' :class='{ dateYearHover: aplicarTwo }'> 2018</h4>
            <h4 class='dateYear' >|</h4>
            <h4 @click='umSete' class='dateYear' :class='{ dateYearHover: aplicarTree }'> 2017</h4>
            <h4 class='dateYear' >|</h4>
            <h4 @click='umUm' class='dateYear' :class='{ dateYearHover: aplicarFour }'> 2011</h4>
            <h4 class='dateYear' >|</h4>
            <h4 @click='zeroOito' class='dateYear' :class='{ dateYearHover: aplicarFive }'> 2008</h4>
            <h4 class='dateYear' >|</h4>
            <h4 @click='zeroCinco' class='dateYear' :class='{ dateYearHover: aplicarSix }'> 2005</h4>
            <h4 class='dateYear' >|</h4>
            <h4 @click='oitoSeis' class='dateYear' :class='{ dateYearHover: aplicarSeven }'> 1986</h4>
            <h4 class='dateYear' >|</h4>
        </div>
        <br>
        <div v-html='acontecimentos'></div>
      </div>

      <Footer/>
    </div>
</template>

<script>
export default {
  head: {
    title: 'Sobre | Leandro Cesar Ramos da Costa | Site',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Sobre Leandro Cesar Ramos da Costa, Personal Leandro Cesar, Professor Leandro Cesar'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Personal, Personal Trainer, Niterói, São Gonçalo, Professor Leandro Cesar'
      }
    ]
  },
  data() {
      return {
          aplicar : '',
          aplicarTwo : '',
          aplicarTree : '',
          aplicarFour : '',
          aplicarFive : '',
          aplicarSix : '',
          aplicarSeven : '',
          aplicarEight : true,
          aplicarEduca : true,
          aplicarAcupu : '',
          projetos: `<h4>Personal | Consultoria</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Ativo</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          <h4>EternFlow.com</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Em desenvolvimento</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>`,
          acontecimentos: `
          <h4>2022:</h4>
        <h4 style="text-align: left;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conlusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
          <br>
        <h4 style="text-align: left;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa; 
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          <br>
          
          `,
      }
  },
  methods: {
      doisUm() {
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.acontecimentos = `
          <h4>2021:</h4>
        <h4 style="text-align: left;"> Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Cinesiologia, Biomecânica e Treinamento Físico - Universidade 
              Castelo Branco - UCB;     
            </li>
          </ul>
          <h4 style="text-align: left;"> Julho</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação - Universidade 
              Castelo Branco - UCB;
            </li>
          </ul>
        <h4 style="text-align: left;"> Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Reinício do estágio em Acupuntura - Pós Pandemia (COVID-19);
            </li>
          </ul>
          <br>
          `
      },
      umOito(){
        this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos = `
          <h4>2018:</h4>
        <h4 style="text-align: left;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Acupuntura - Universidade Celso Lisboa - UCB;
            </li>
          </ul>
          <br>
          `
      },
      umSete() {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = true,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos = 
          `
          <h4>2017:</h4>
        <ul class="com-bullet com-indent">
          <h4 style="text-align: left;">Março</h4>
          <li>
            Início do curso de Formação de Professor de Yoga - Shiva Studio - Rio de Janeiro - RJ;
          </li>
          </ul>
          <br>
          `
      },
      umUm(){
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = true,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos =
          `
          <h4>2011:</h4>
        <h4 style="text-align: left;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          <br>
        <h4 style="text-align: left;">Março</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          <br>
          `
      },
      zeroOito(){
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = true,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos =
          `
          <h4>2008:</h4>
        <h4 style="text-align: left;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          <br>
          `
      },
      zeroCinco() {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = true,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos =
          `
          <h4>2005:</h4>
        <h4 style="text-align: left;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          <br>
          `
      },
      oitoSeis () {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = true,         
         this.aplicarEight = false,
          this.acontecimentos = 
          `
          <h4>1986:</h4>
        <h4 style="text-align: left;">Outubro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          `
      },
      doisDois () {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = true,
          this.acontecimentos = 
          `
          <h4>2022:</h4>
        <h4 style="text-align: left;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conlusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
          <br>
        <h4 style="text-align: left;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa; 
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          <br>
          `
      },
      educa () {
        this.aplicarEduca = true,
        this.aplicarAcupu = false,
          this.projetos = 
          `
          <h4>Personal | Consultoria</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Ativo</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          <h4>EternFlow.com</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Em desenvolvimento</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          `
      },
      acupu () {
        this.aplicarAcupu = true,
        this.aplicarEduca = false,
          this.projetos = 
          `
          <h4>Deep Acupuntura</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Em Desenvolvimento</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          `
      }
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin:0;
}

.years {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start; 
  align-self: center;
    overflow-x: auto;
  
}
.years h4 {
  padding: 5px 5px;
}

.projetos {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-end;  
    align-self: center;
}
.projetos h4 {
    padding: 5px 10px;
  cursor: pointer;
}

.dateYear {
  color: #899fa4;
  cursor: pointer;
}

.dateYearHover {
  color: #fadb41;
}
</style>
