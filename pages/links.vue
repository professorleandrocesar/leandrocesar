<template>
    <div>
        <Nav/>
        <div>
      <div id="main" class="nav-in"> 
        <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i> Voltar</a>
      </div>
    <div class="main-c"><i class="fas fasi fa-link"></i></div>
    <div id="main">
      <h1>Links</h1>
     <h3></h3>
     <br>
     <h3>EM MARÇO!!<br></h3>
     <!--
      <p class="main-c">
        Treinamento personalizado totalmente online;
        <br>
        --
        <br>
        De acordo com o seu objetivo e condicionamento, é feita uma série online, para fazer onde quiser.
      </p>
      <div class="hr"></div>
      <br>
        <h4>Vantagens</h4>
        <ol>
          <li>Acompanhamento online, independente da distância;</li>
          <li>Acompanhamento através de fotos, peso, medidas (cintura, quadril) etc;</li>
        </ol>
        <br>
        <h4>Público-alvo:</h4>
        <ol>
          <li>Intermediário ao avançado;</li>
          <li>Clientes motivados, disciplinados e focados;</li>
          <li>Iniciante ao avançado que está em Quarentena;</li>
          <li>Iniciante ao avançado que não tem tempo para ir à uma academia e/ou mora distante;</li>
        </ol>
        <br>
      </div>
      </div>
      <div class="btn-wtp">
        <a href="https://api.whatsapp.com/send?phone=5521971305858%20&text=Ola%20Leandro,%20quero%20saber%20mais%20informações%20da%20Consultoria%20Online!" title="Conversar no WhatsApp" target="_blank">
          <i class="fab fa-whatsapp"></i> Saber +
        </a>
      <br>
      <div id="main">
      <h3>Tipos e Valores</h3>
      <table>
        <thead>
          <th>Tipo de Série</th>
          <th>Valor por mês (30 dias) </th>
        </thead>
        <tfoot>
          <td colspan="6">
            <b>Legenda:</b>
            <br>
            Planilha => Planilha de treinamento contendo séries;
            <br>
            Série => Treino diário, contendo os exercícios, orientações;
          </td>
        </tfoot>
        <tbody>
          <tr>
            <td>1 série única(A)</td>
            <td>50 R$</td>
          </tr>
          <tr>
            <td style="color:#fadb41;">1 série alternada (A/B)</td>
            <td  style="color:#fadb41;">60 R$</td>
          </tr>
          <tr>
            <td>1 série (A/B/C) ou 1 série (A/B/C/D)</td>
            <td>80 R$</td>
          </tr>
          <tr>
            <td>1 série (A/B/C/D/E) ou 1 série (A/B/C/D/E/F)</td>
            <td>100 R$</td>
          </tr>
        </tbody>
      </table> -->
      </div> 
      <br> 
      </div> 
        <Footer/>
    </div>
</template> 
<script>
export default {
  head: {
    title: 'Avaliação Física | Professor Leandro Cesar',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Consultoria  Online | Professor Leandro Cesar | Atendimentos em Niterói e São Gonçalo - RJ'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Consultoria, Niterói, Professor Leandro Cesar'
      }
    ]
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
a {
    text-decoration: none;
    display: block;
    width: 100%;
    margin: 0;
    font-size: 1.3em;
    text-align: left;
  }

.btn h3 {
  font-size: 1em;
  color: #fff;
  cursor: pointer;
  background-color: #fadb4180;
  padding: 2px;
  margin: 20px auto;
  width: 35%;
  transition: all .2s linear;
  border-radius: .4em .4em .4em .4em; 
}
.btn h3:hover {
  color: #fadb41;
  background-color: #ffffff60;
  cursor: pointer;
}
.btn-wtp a{
  padding: 0;
    text-decoration: none;
    transition: all .4s linear;
    background: #fff;
    color: #777;
    text-indent: 0;
    width: 12%;
    text-align: center;
    margin: 10px auto;
    border-radius: 0.3em 0.3em 0.3em 0.3em;
}

.btn-wtp a:hover{
  
  color: #fff;
    background: #ffffff90;
}

@media only screen and (max-width: 1125px) {
  a {
    text-decoration: none;
    display: block;
    width: 100%;
    margin: 0;
    font-size: 1.3em;
    text-align: left;
  }

  .btn h3 {
  font-size: .9em;
  color: #fff;
  cursor: pointer;
  background-color: #fadb4180;
  padding: 8px;
  margin: 20px auto;
  width: 60%;
  transition: all .2s linear;
  border-radius: .4em .4em .4em .4em; 
}

.btn-wtp a{
  padding: 0;
    text-decoration: none;
    transition: color .4s linear, border .4s linear, background .4s linear;
    color: #777;
    text-indent: 0;
    background: #fff;
    width: 40%;
    text-align: center;
    margin: 10px auto;
    border-radius: 0.3em 0.3em 0.3em 0.3em;
}

}
</style>