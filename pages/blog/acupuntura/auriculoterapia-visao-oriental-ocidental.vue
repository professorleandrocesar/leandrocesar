<template>
  <div>

    <div id="main">

      <!-- Início Cabeçalho principal da página -->
      <h1>{{ postTitle }}</h1>
      <h4>{{ subPostTitle }}</h4>
      <h5 class="main-r">
        {{ autorOne }}
        <br>
        {{ autorTwo }}
        <br>
        {{ autorTree }}
        <br>
        {{ autorFour }}
        <br>
        {{ autorFive }}
        <br>
        {{ autorSix }}
      </h5>
      <!-- Fim Cabeçalho principal da página -->
      <div class='details'>
        <h4 @click='articleResume' class='postTitle' :class='{ postTitleHover: aplicar }'>
          Resumo Completo
        </h4>
        <a href="/auriculoterapia-visao-oriental-ocidental.pdf" download="" class='postTitle'
          :class='{ postTitleHover: aplicarTwo }'>
          Download
        </a>
      </div>
      <div v-html='outputPostOne'></div>

      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: [this.postTitle + this.subPostTitle + ' |' + this.area + ' |' + this.autor],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: [this.descript]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [this.key]
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.svg' },
        { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
        { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
        { rel: 'manifest', href: '/img/site.webmanifest' },
        { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#002937' }
      ],
    }
  },
  data() {
    return {
      postTitle: 'AURICULOTERAPIA: Uma Visão Geral Dentro do Pensamento Oriental e Ocidental¹',
      subPostTitle: '', /* deixar com um espaço inicial */
      area: ' Lesões | Blog', /* deixar com um espaço inicial */
      autorOne: 'FIORI, Lucas²', /* deixar com um espaço inicial */
      autorTwo: 'MACHADO, Deborah³', /* deixar com um espaço inicial */
      autorTree: 'GUIMARÃES, Carla²', /* deixar com um espaço inicial */
      autorFour: 'DA COSTA, Leandro²', /* deixar com um espaço inicial */
      autorFive: 'PAIXÃO, Natália²', /* deixar com um espaço inicial */
      autorSix: 'MACHADO, Patrique²',  /* deixar com um espaço inicial */
      descript: '', /* descrição de no máximo 200 caracteres */
      key: ', , ', /* colocar 3 keywords */
      date: '06/06/2022',
      hours: '07:00',
      oneReeditionDate: '',
      oneReeditionHours: '',
      aplicar: true,
      aplicarTwo: 'true',
      aplicarRef: '',
      aplicarTree: '',
      aplicarFour: '',
      aplicarFive: '',
      aplicarSix: '',
      aplicarSeven: '',
      outputPostOne: `
           <!-- Início do conteúdo principal -->   
          <h4 style="margin-left: 10px; margin-right: 5px;">
        Resumo completo
      </h4>   
    <p style="margin-left: 10px; margin-right: 5px;">
A Medicina Tradicional Chinesa (MTC) tem sua origem das combinações da prática da moxabustão, acupuntura e da farmacologia natural cujos efeitos e resultados eram eficazes e precisos. A Acupuntura é o conjunto de conhecimentos teórico-empíricos da MTC através da aplicação de agulhas e de moxas. Existem diversas teorias na MTC para podermos tratar patologias, como a teoria dos 5 Elementos, Princípio de Geração (Ciclo Sheng), Princípio de Controle (Dominância – Ciclo KE), a teoria Yin/Yang, teoria dos meridianos (canais de energia) e a teoria dos canais unitários. A dor lombar é o principal problema de saúde entre os países ocidentais industrializados e uma das principais causas de despesas médicas, ausência e incapacidade. Existem 4 métodos diagnósticos na MTC que são a inspeção, audição e olfação, anamnese e palpação de pulso e palpação. A lombalgia TaiYang precisa ser diferenciada da lombalgia da protusão e hérnia discais lombar, esta apresenta perda de força muscular, alteração da sensibilidade, hipotrofia dos músculos da perna e sinal positivo no Teste de Lasègue. Pela literatura relacionada à lombalgia Tai Yang, houve evidência consistente da relevância do tratamento da acupuntura para tal patologia, porém é sugestivo estudos mais aprofundados sobre o tema. Objetivos: identificar e diferenciar os diversos tipos de lombalgias dentro da visão ocidental e oriental e assim elaborar o tratamento ideal para os pacientes diagnosticados com Lombalgia TaiYang.    </p>
    <p style="margin-left: 10px; margin-right: 5px; font-size:.8em;">
      ¹ Artigo - Revista Brasileira de Medicina Chinesa - Ano XI n° 34 pg.:26 a 28, ² Lucas Rocha Fiori Sobreira, Carla A. da S. M. Guimarães, Leandro César Ramos da Costa, Natália Paixão Santos da Silva, Patrique Machado de Sá - Formados em Acupuntura Pelo Centro Universitário Celso Lisboa; ³ Deborah Vieira Machado - Graduanda em Fisioterapia do Centro Universitário Celso Lisboa. 
    </p>         
          `,
    }
  },
  methods: {
    articleResume() {
      this.aplicar = true,
        this.aplicarTwo = true,
        this.aplicarRef = false,
        this.outputPostOne = `
           <!-- Início do conteúdo principal -->   
          <h4 style="margin-left: 10px; margin-right: 5px;">
        Resumo completo
      </h4>   
    <p style="margin-left: 10px; margin-right: 5px;">
A Medicina Tradicional Chinesa (MTC) tem sua origem das combinações da prática da moxabustão, acupuntura e da farmacologia natural cujos efeitos e resultados eram eficazes e precisos. A Acupuntura é o conjunto de conhecimentos teórico-empíricos da MTC através da aplicação de agulhas e de moxas. Existem diversas teorias na MTC para podermos tratar patologias, como a teoria dos 5 Elementos, Princípio de Geração (Ciclo Sheng), Princípio de Controle (Dominância – Ciclo KE), a teoria Yin/Yang, teoria dos meridianos (canais de energia) e a teoria dos canais unitários. A dor lombar é o principal problema de saúde entre os países ocidentais industrializados e uma das principais causas de despesas médicas, ausência e incapacidade. Existem 4 métodos diagnósticos na MTC que são a inspeção, audição e olfação, anamnese e palpação de pulso e palpação. A lombalgia TaiYang precisa ser diferenciada da lombalgia da protusão e hérnia discais lombar, esta apresenta perda de força muscular, alteração da sensibilidade, hipotrofia dos músculos da perna e sinal positivo no Teste de Lasègue. Pela literatura relacionada à lombalgia Tai Yang, houve evidência consistente da relevância do tratamento da acupuntura para tal patologia, porém é sugestivo estudos mais aprofundados sobre o tema. Objetivos: identificar e diferenciar os diversos tipos de lombalgias dentro da visão ocidental e oriental e assim elaborar o tratamento ideal para os pacientes diagnosticados com Lombalgia TaiYang.    </p>
    <p style="margin-left: 10px; margin-right: 5px; font-size:.8em;">
      ¹ Artigo - Revista Brasileira de Medicina Chinesa - Ano XI n° 34 pg.:26 a 28, ² Lucas Rocha Fiori Sobreira, Carla A. da S. M. Guimarães, Leandro César Ramos da Costa, Natália Paixão Santos da Silva, Patrique Machado de Sá - Formados em Acupuntura Pelo Centro Universitário Celso Lisboa; ³ Deborah Vieira Machado - Graduanda em Fisioterapia do Centro Universitário Celso Lisboa. 
    </p>     
          `
    },
    articleAnatomia() {
      this.aplicar = false,
        this.aplicarTwo = true,
        this.aplicarRef = false,
        this.outputPostOne = `
          <div>
      <h4 style="margin-left: 10px; margin-right: 5px;">
        Anatomia
      </h4>
    </div>
    <p style="margin-left: 10px; margin-right: 5px;">
      O joelho é uma articulação sinovial com estruturas bem complexas. É formada pelos ossos do 
      fêmur, tíbia, e patela. Conectados pelos muitos componentes articulares para garantir sua 
      movimentação e estabilidade, permitindo sustentar grandes cargas para a mobilidade, necessárias
      para as atividades locomotoras do dia-a-dia.<sup> 2</sup>.
    </p>
    <div>
      <img src="/img/articulacao-do-joelho.png" alt="Foto de uma articulação do joelho" style="margin-left: 10px; height:400px;">
      <br>
      <sub style="margin-left: 10px; margin-right: 5px;">Corte sagital do Joelho direito (Rasch e Burke, 1986 p.340) <sup> 3</sup></sub>    
    </div>
    <p>
    </p>
    
    <!-- Fim do Conteúdo principal da página -->
          `
    },
    articleReferencia() {
      this.aplicar = false,
        this.aplicarRef = true,
        this.aplicarTwo = false,
        this.outputPostOne = `
      <h4 style="margin-left: 10px; margin-right: 5px;">Referências Bibliográficas:</h4>
      <p style="margin-left: 10px; margin-right: 5px;">
        1) (Macnicol, 2002)
        <br>
        2) Biomecânica Básica
        <br>
        3) Rasch e Burke    
      </p>
          `

    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.3em;
  margin: 20px 0 0 10px;
  line-height: 1.1;

}

h4 {
  font-size: 1em;
  margin: 5px 0 0 10px;
}

h5 {
  margin: 0px 10px 20px 0px;
  text-align: right;
}

.details {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-end;
  align-self: center;
}

.details h4 {
  padding: 5px 10px;
  cursor: pointer;
}

.postTitle {
  color: #bbb;
}

.postTitleHover {
  color: #000;
}

.details a {
  color: #666;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  margin: 5px 0 0 10px;
}
</style>