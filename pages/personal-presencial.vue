<template>
    <div>
        <Nav/>
        <div>
      <div id="main" class="nav-in"> 
        <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i> Voltar</a>
        <br>
        <NuxtLink to='/horarios'><i class="far fa-calendar-check"></i> Meus Horários Livres</NuxtLink>
      <br>
      </div>
    <div class="main-c"><i class="fas fasi fa-dumbbell"></i></div>
    <div id="main">
      <h1>Personal Presencial</h1>
      <p class="main-c">
        Treinamento individualizado em ambiente de academia;
        <br>
        --
        <br>
        Obtenha resultados rápidos, de acordo com o seu condicionamento atual.
      </p>
      <div class="hr"></div>
      <br>
        <h4>Vantagens</h4>
        <ul>
          <li>Variação nos treinamentos com estímulos adequados;</li>
          <li>Total atenção nos seus objetivos;</li>
          <li>Orientação constante, em relação aos exercícios e tarefas, na qual deverá realizar;</li>
          <li>Correção e observação permanente de seus movimentos;</li>
          <li>Apoio sistemático para a conclusão dos seus exercícios (motivação);</li>
        </ul>
        <br>
        <h4 style='color: #fadb41;'>Exclusividades</h4>
        <ol>
          <li style='list-style-type: decimal;'>Avaliação Física inicial gratuita;</li>
          <li style='list-style-type: decimal;'>Reavaliações gratuitas (2 em 2 meses);</li>
          <li style='list-style-type: decimal;'>Séries mensais exclusivas (online e permanente);</li>
        </ol>
        <br>  
        <h4>Público-alvo:</h4>
        <ul>
          <li>Iniciante ao avançado;</li>
          <li>Clientes desmotivados, indisciplinados etc.;</li>
          <li>Clientes Especiais (sedentários, terceira idade, hipertensos, cardiopatas, diabéticos etc.);</li>
          <li>Clientes que querem resultados raṕidos;</li>
        </ul>
        <h5><NuxtLink class='horarios' to='/horarios'>Clique aqui</NuxtLink> para ver meus horários!</h5>
        <div class='cursor'><h4 @click='local'><span v-html="contenticontwo"></span> Local de treinamento</h4></div>
        <div v-html='location'></div>
        <br>
      <!-- <div class="hr"></div> -->
      </div>
      <div class="btn-wtp">
        <a href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Olá%20Leandro%20Cesar,%20fiquei%20interessado(a)%20na%20sua%20Consultoria%20e%20nos%20seus%20Serviços,%20me%20chamo%20' title="Conversar no WhatsApp" target="_blank">
          <i class="fab fa-whatsapp"></i> Saber +
        </a>
      </div>
      <br>
  </div>
        <Footer/>
    </div>
</template>
<script>
export default {
  head: {
    title: 'Personal Presencial | Professor Leandro Cesar',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Personal Trainer | Presencial | Professor Leandro Cesar | Atendimentos em Niterói - RJ'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Personal Trainer, Niterói, Professor Leandro Cesar'
      }
    ]
  },
  data() {
    return {
      location: '',
      contenticonone: `<i class="fas fa-angle-down"></i>`,
      contenticontwo: `<i class="fas fa-angle-right"></i>`,
      aplicar: true
    }
  },
  methods: {
    local() {
      this.location = `<br><h4>Academia BodyClass</h4><p>Endereço: Av. Visconde do Rio Branco, 455 - Centro - Niterói -RJ. (em frente as barcas)</p><br><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.514618698685!2d-43.12574868523105!3d-22.89438204318384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983c4e1511e69%3A0xb1617a7a91bc5d56!2sBodyClass%20Fitness%20Center!5e0!3m2!1spt-BR!2sbr!4v1634451070609!5m2!1spt-BR!2sbr" width="300" height="300" style="border:0;" margin="auto;" allowfullscreen="" loading="lazy"></iframe>
      `
      this.contenticontwo = '<i class="fas fa-angle-down"></i>'
    }
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

.main-c a {
  text-align: center;
}

.horarios {
  font-size: 1.1em;
  font-weight: bolder;
  color: #fadb41;
  cursor: pointer;
  display: inline;
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