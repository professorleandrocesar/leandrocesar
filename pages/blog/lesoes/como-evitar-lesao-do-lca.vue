<template>
<div>

  <div id="main">
  
    <!-- Início Cabeçalho principal da página -->
    <h1>{{postTitle}}</h1><h4>{{subPostTitle}}</h4>
    <h5 class="main-r">
      Autor: {{autor}}
      <br>Criado:
      <i class="far fa-calendar-minus"></i> {{date}}  <i class="far fa-clock"></i> {{hours}}
      <!--<br>Editado:
      <i class="far fa-calendar-minus"></i> {{oneReeditionDate}}  <i class="far fa-clock"></i> {{oneReeditionHours}} -->
    </h5>
    <!-- Fim Cabeçalho principal da página -->
    <div class='details'>
      <h4 @click='articleResume' class='postTitle' :class='{ postTitleHover: aplicar }'>
              Introdução
              </h4>
      <h4 @click='articleAnatomia' class='postTitle' :class='{ postTitleHover: aplicarTwo }'>
              Anatomia
              </h4>
      <h4 @click='articleReferencia' class='postTitle' :class='{ postTitleHover: aplicarRef }'>
              Referências
              </h4>
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
        postTitle: 'Como evitar lesão do ligamento LCA no joelho',
        subPostTitle: '', /* deixar com um espaço inicial */
        area: ' Lesões | Blog', /* deixar com um espaço inicial */
        autor: ' Professor Leandro Cesar', /* deixar com um espaço inicial */
        descript: '', /* descrição de no máximo 200 caracteres */
        key: ', , ', /* colocar 3 keywords */
        date: '11/04/2022',
        hours: '16:00',
        oneReeditionDate: '',
        oneReeditionHours: '',
        aplicar : true,
        aplicarTwo : '',
        aplicarRef : '',
        aplicarTree : '',
        aplicarFour : '',
        aplicarFive : '',
        aplicarSix : '',
        aplicarSeven : '',
        outputPostOne: `
          <!-- Início do conteúdo principal -->   
          <h4>
        Introdução
      </h4>   
    <p>
      Venho percebendo relatos, de alunos e até de alguns clientes de Personal,
      queixando-se de dores nos joelhos. Na grande maioria das reclamações
      as dores estão localizadas na parte medial (interna) do joelho.
    </p>
    <p>
      Nesta região medial, há uma grande incidência de entorses do Ligamento Cruzado Anterior (LCA);
    <p>
      <blockquote>
      É uma das lesões mais
      comuns na articulação do joelho, com frequência de ocorrência de 5 a 10 vezes maior em 
      relação a lesão de outros ligamentos localizados no joelho<sup> 1</sup>. 
      </blockquote>
      Este texto é um esforço, para melhor entender o complexo articular do joelho, fazendo uma revisão 
      anatômica e mais específicamente entender o ligamento cruzado anterior e sua lesão ligamentar. 
    </p>
    </p>
          
          
          `,
      }
  },
  methods: {
      articleResume() {
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarRef = false,
          this.outputPostOne = `
          <!-- Início do conteúdo principal -->   
    <h4>
        Introdução
      </h4>      
    <p>
      Venho percebendo relatos, de alunos e até de alguns clientes de Personal,
      queixando-se de dores nos joelhos. Na grande maioria das reclamações
      as dores estão localizadas na parte medial (interna) do joelho.
    </p>
    <p>
      Nesta região medial, há uma grande incidência de entorses do Ligamento Cruzado Anterior (LCA);
    <p>
      <blockquote>
      É uma das lesões mais
      comuns na articulação do joelho, com frequência de ocorrência de 5 a 10 vezes maior em 
      relação a lesão de outros ligamentos localizados no joelho<sup> 1</sup>. 
      </blockquote>
      Este texto é um esforço, para melhor entender o complexo articular do joelho, fazendo uma revisão 
      anatômica e mais específicamente entender o ligamento cruzado anterior e sua lesão ligamentar. 
    </p>
    </p>
          `
},
      articleAnatomia() {
          this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarRef = false,
          this.outputPostOne = `
          <div class='title-link'>
      <h4>
        Anatomia
      </h4>
    </div>
    <p>
      O joelho é uma articulação sinovial com estruturas bem complexas. É formada pelos ossos do 
      fêmur, tíbia, e patela. Conectados pelos muitos componentes articulares para garantir sua 
      movimentação e estabilidade, permitindo sustentar grandes cargas para a mobilidade, necessárias
      para as atividades locomotoras do dia-a-dia.<sup> 2</sup>.
    </p>
    <div class="legend">
      <img src="/img/articulacao-do-joelho.png" alt="Foto de uma articulação do joelho">
      <br>
      <sub>Corte sagital do Joelho direito (Rasch e Burke, 1986 p.340) <sup> 3</sup></sub>    
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
          <div class="refer">
      <h4>Referências Bibliográficas:</h4>
      <p>
        1) (Macnicol, 2002)
        <br>
        2) Biomecânica Básica
        <br>
        3) Rasch e Burke    
      </p>
    </div>
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
   color: #d8d8d880;
 }

 .maix{
   margin: 10px 0 0 0;
 }
@media only screen and (max-width: 820px) {
 .details h4, .details a{
   font-size: 1.2em;
 }
}
</style>