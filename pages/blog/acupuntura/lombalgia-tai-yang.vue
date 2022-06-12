<template>
<div>

  <div id="main">
  
    <!-- Início Cabeçalho principal da página -->
    <h1>{{postTitle}}</h1><h4>{{subPostTitle}}</h4>
    <h5 class="main-r">
      {{autorOne}}
      <br>
      {{autorTwo}}
      <br>
      {{autorTree}}
      <br>
      {{autorFour}}
      <br>
      {{autorFive}}
      <br>
      {{autorSix}}
    </h5>
    <!-- Fim Cabeçalho principal da página -->
    <div class='details'>
      <h4 @click='articleResume' class='postTitle' :class='{ postTitleHover: aplicar }'>
              Resumo Completo
              </h4>
      <a href="/lombalgia-tai-yang.pdf" download="" class='postTitle' :class='{ postTitleHover: aplicarTwo }'>
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
      ]       
    }
  },
  data() {
      return {
        postTitle: 'A Acupuntura no Tratamento da Lombalgia Tai Yang: Revisão Bibliográfica¹',
        subPostTitle: '', /* deixar com um espaço inicial */
        area: ' Lesões | Blog', /* deixar com um espaço inicial */
        autorOne: 'FIORI, Lucas²', /* deixar com um espaço inicial */
        autorTwo: 'PAIXÃO, Natália²', /* deixar com um espaço inicial */
        autorTree: 'GUIMARÃES, Carla²', /* deixar com um espaço inicial */
        autorFour: 'DA COSTA, Leandro²', /* deixar com um espaço inicial */
        autorFive: 'MACHADO, Patrique²', /* deixar com um espaço inicial */
        autorSix: 'De Moraes, Cláudio³',  /* deixar com um espaço inicial */
        descript: '', /* descrição de no máximo 200 caracteres */
        key: ', , ', /* colocar 3 keywords */
        date: '06/06/2022',
        hours: '07:00',
        oneReeditionDate: '',
        oneReeditionHours: '',
        aplicar : true,
        aplicarTwo : 'true',
        aplicarRef : '',
        aplicarTree : '',
        aplicarFour : '',
        aplicarFive : '',
        aplicarSix : '',
        aplicarSeven : '',
        outputPostOne: `
          <!-- Início do conteúdo principal -->   
          <h4 style="margin-left: 10px; margin-right: 5px;">
        Resumo Completo
      </h4>   
    <p style="margin-left: 10px; margin-right: 5px;">
      Venho percebendo relatos, de alunos e até de alguns clientes de Personal,
      queixando-se de dores nos joelhos. Na grande maioria das reclamações
      as dores estão localizadas na parte medial (interna) do joelho.
    </p>
    <p style="margin-left: 10px; margin-right: 5px;">
      Nesta região medial, há uma grande incidência de entorses do Ligamento Cruzado Anterior (LCA);
      </p>
     <blockquote>
      É uma das lesões mais
      comuns na articulação do joelho, com frequência de ocorrência de 5 a 10 vezes maior em 
      relação a lesão de outros ligamentos localizados no joelho<sup> 1</sup>. 
      </blockquote>
      <p style="margin-left: 10px; margin-right: 5px;">
      Este texto é um esforço, para melhor entender o complexo articular do joelho, fazendo uma revisão 
      anatômica e mais específicamente entender o ligamento cruzado anterior e sua lesão ligamentar. 
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
      A Medicina Tradicional Chinesa (MTC) tem sua origem das combinações da prática da moxabustão, acupuntura e da farmacologia natural cujos efeitos e resultados eram eficazes e precisos. A Acupuntura é o conjunto de conhecimentos teórico-empíricos da MTC através da aplicação de agulhas e de moxas. Existem diversas teorias na MTC para podermos tratar patologias, como a teoria dos 5 Elementos, Princípio de Geração (Ciclo Sheng), Princípio de Controle (Dominância – Ciclo KE), a teoria Yin/Yang, teoria dos meridianos (canais de energia) e a teoria dos canais unitários. A dor lombar é o principal problema de saúde entre os países ocidentais industrializados e uma das principais causas de despesas médicas, ausência e incapacidade. Existem 4 métodos diagnósticos na MTC que são a inspeção, audição e olfação, anamnese e palpação de pulso e palpação. A lombalgia TaiYang precisa ser diferenciada da lombalgia da protusão e hérnia discais lombar, esta apresenta perda de força muscular, alteração da sensibilidade, hipotrofia dos músculos da perna e sinal positivo no Teste de Lasègue. Pela literatura relacionada à lombalgia Tai Yang, houve evidência consistente da relevância do tratamento da acupuntura para tal patologia, porém é sugestivo estudos mais aprofundados sobre o tema. Objetivos: identificar e diferenciar os diversos tipos de lombalgias dentro da visão ocidental e oriental e assim elaborar o tratamento ideal para os pacientes diagnosticados com Lombalgia TaiYang.
    </p>
    <p style="margin-left: 10px; margin-right: 5px;">
      A Medicina Tradicional Chinesa (MTC) tem sua origem das combinações da prática da moxabustão, acupuntura e da farmacologia natural cujos efeitos e resultados eram eficazes e precisos. A Acupuntura é o conjunto de conhecimentos teórico-empíricos da MTC através da aplicação de agulhas e de moxas. Existem diversas teorias na MTC para podermos tratar patologias, como a teoria dos 5 Elementos, Princípio de Geração (Ciclo Sheng), Princípio de Controle (Dominância – Ciclo KE), a teoria Yin/Yang, teoria dos meridianos (canais de energia) e a teoria dos canais unitários. A dor lombar é o principal problema de saúde entre os países ocidentais industrializados e uma das principais causas de despesas médicas, ausência e incapacidade. Existem 4 métodos diagnósticos na MTC que são a inspeção, audição e olfação, anamnese e palpação de pulso e palpação. A lombalgia TaiYang precisa ser diferenciada da lombalgia da protusão e hérnia discais lombar, esta apresenta perda de força muscular, alteração da sensibilidade, hipotrofia dos músculos da perna e sinal positivo no Teste de Lasègue. Pela literatura relacionada à lombalgia Tai Yang, houve evidência consistente da relevância do tratamento da acupuntura para tal patologia, porém é sugestivo estudos mais aprofundados sobre o tema. Objetivos: identificar e diferenciar os diversos tipos de lombalgias dentro da visão ocidental e oriental e assim elaborar o tratamento ideal para os pacientes diagnosticados com Lombalgia TaiYang.¹ TCC do Curso de Pós-graduação em Acupuntura do Centro Universitário Celso Lisboa ² FIORI; PAIXÃO; GUIMARÃES; DA COSTA; MACHADO, pós-graduandos do Curso de Acupuntura do Centro Universitário 
             Celso Lisboa; ³ DE MORAES, Cláudio, professor e orientador. 
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
  margin: 20px 0 0 10px ;
      line-height: 1.1;

}

h4{
  font-size: 1em  ;
  margin: 5px 0 0 10px ;
}

h5{
  margin: 0px 10px 20px 0px ;
  text-align: right;
}
.details {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content:space-end;  
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
   color: #000;
   text-decoration: none;
   font-weight: bold;
   font-size: 1em  ;
  margin: 5px 0 0 10px ;
 }


</style>