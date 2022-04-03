<template>
  <div>
    
    <div id="main" class="main-c">
      <div id="main" class="nav-in"> 
        <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i> Voltar</a>
      </div>
      <div class="main-c">
    <br>
    <div class="main-c"><i class="fas fasi fa-calendar-alt"></i></div>  
      <h1>Agenda</h1>
      <br>
        <h3>Reserve o seu horário e faça o pagamento, realizando o passo-a-passo:</h3>
        <br>

        <i class="far fasi fa-calendar-check"></i>
        <h3>1º) Reserve seu horário</h3>
        
    
      <div class="btn">
      <a href='https://leandrocesarco.simplybook.me/v2/'  target='_blank'><h3>Agenda <i class="fas fa-external-link-square-alt"></i></h3></a>
      </div>
      <br>
        <br>
        
        <i class="fas fasi fa-money-check-alt"></i>  
        <h3>2º) Faça o pagamento</h3>
        
      </div>
        <table>
        <thead>
          <th>Serviços</th>
          <th>1 Sessão</th>
        </thead>
        <tfoot>
        </tfoot>
        <tbody>
          <tr>
            <th>Consultoria on line</tH>
            <td><a  class='dot' href="#">60 R$</a></td> 
          </tr>
          <tr>
            <th>Avaliação Física</tH> 
            <td><a  class='dot' href="#">50 R$</a></td> 
          </tr>

        </tbody>
      </table>
      <br>  
<div class="main-c">

        <i class="fas fasi fa-exclamation"></i>
        <h3>3º) Avise ao Professor</h3>
        <p>Entre em contato, se já realizou o pagamento ou se tem alguma dúvida!</p>
        </div>
        
    <div class="btn">
      <a href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Olá,%20já%20reservei%20meu%20horário%20no%20calendário%20e%20já%20fiz%20meu%20pagamento,%20me%20chamo%20'  target='_blank'><h3><i class="fab fa-whatsapp"></i> Quero começar agora!</h3></a>
      </div>
      <br>
        
    </div>  
  </div>
</template>

<script>
export default {
  head: {
    title: 'Horários | Personal | Professor Leandro Cesar',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Horário de Personal Trainer | Consultoria Presencial | Atendimentos em Niterói e São Gonçalo - RJ'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Personal, Personal Trainer, Niterói, São Gonçalo, Professor Leandro Cesar'
      }
    ]
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
    text-align: center;
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

.btn h4 {
  color: #fff;
  cursor: pointer;
}

.btn h4:hover {
  cursor: pointer;
}
.btn-wtp a{
  padding: 10px 0;
    text-decoration: none;
    transition: color .4s linear, border .4s linear, background .4s linear;
    color: #777;
    text-indent: 0;
    background: #fff;
    width: 95%;
    margin: 10px auto;
    border-radius: 0.3em 0.3em 0.3em 0.3em;
}

.line{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content:space-between;  
    align-self: center;
}

.lineBtn{
    border: solid .1px #899fa4;
    padding: 1px 20px;
    border-radius: 0.3em 0.3em 0.3em 0.3em;
    cursor: pointer;
}

.lineBtnHover {
  background: #ffffff20;
}

@media only screen and (max-width: 1125px) {
  a {
    text-decoration: none;
    display: block;
    width: 100%;
    margin: 0;
    font-size: 1.3em;
    text-align: center;
  }

  .btn h3 {
  font-size: .7em;
  color: #fff;
  cursor: pointer;
  background-color: #fadb4180;
  padding: 4px;
  margin: 20px auto;
  width: 55%;
  transition: all .2s linear;
  border-radius: .4em .4em .4em .4em; 
}
.line{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;  
    align-self: center;
}

.line h5 {
    border: solid .1px #ffffff60;
    padding: 1px 20px;
    border-radius: 0.3em 0.3em 0.3em 0.3em;
    margin: 10px 5px; 
}
}
</style>  