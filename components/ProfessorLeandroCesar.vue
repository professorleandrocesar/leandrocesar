<template>
  <div>

   

    <div class='profile'>
      <img src='img/myFotoTwo.jpg' alt=''>
      <div>
        <h1>Leandro Cesar</h1>
        <h4>Professor | Educador físico</h4>
      </div>
    </div>

    <div class='main-one'>
      <a href="https://instagram.com/professorleandrocesar">
        <i class="fa-brands fa-instagram-square"></i> @professorleandrocesar
      </a> 
      
      <a href="/#">
        <i class="fa-regular fa-id-card"></i> CREF: 029260-G/RJ
      </a> 
      
      <a href="http://lattes.cnpq.br/3830820363501969">
        <i class="fai fa-solid fa-link"></i>  Currículo Lattes
      </a>
    </div>

    <div class='divider'></div>
    
    <div class='main-two'>
      <code>
        <b>#vemtreinarcomigo</b>
        <br>
        Bora treinar junto! 
      </code>
      <a href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20na%20sua%20Consultoria%20e%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20'>
      <i class="fa-brands fa-whatsapp"></i> Marcar Horário
      </a>
    </div>  

    <div class='divider'></div>
    
    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-arrows-spin"></i> Serviços</h5>
      </div>
    </div>
    <div class='main-four'>
      <div class='main-four-card'>
        <div @click='geral' >
          <h4>Geral</h4>
        </div>
        <div @click='personal' >
          <h4>Personal Trainer</h4>
        </div>
        <div @click=''>
          <h4>Consultoria</h4>
        </div>
        <div @click=''>
          <h4>Avaliação Física</h4>
        </div>
        <div @click=''>
          <h4>Combos</h4>
        </div>
      </div>  
    </div>  

    <div class='divider'></div>
    <div class='divider-ultimate'></div>
  
  </div>
</template>

<style scoped>
a{
  text-decoration: none;
  color: #aaa;
}

i {
  color: #fff;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.8em;
  padding-left: 10px;
  border-left: solid 5px #fadb41;
  color:#ddd;
}

.divider {
  height:15px;
  background-color: #00293789;
}

.divider-ultimate {
  height:30px;
  background-color: #002937;
}

.profile {
  background: #002937;    
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:20px 0 5px 0;
  margin-top:-10px;
}

.profile a {
  text-decoration: none;
  color: #fff;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
  color: #fadb41;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #fff;
}

.main-one{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  box-shadow: 0px 10px 5px #fadb41;
  background: #002937;    
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i, .main-one a:nth-child(2) i{
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a{
  margin: 0 0 0 10px;
  color: #ddd;
}

.main-two {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 15px 0 18px 0;
  color: black;
  box-shadow:  0px 10px 20px #fadb41;
  background: #002937;    
  color: #fff;
}

.main-two a {
    margin: 20px 0 0 0px;
    color: #fadb41;
    font-weight: 600;
}

.main-two i {
    color: #fadb41;
    font-size: 1.1em;
    font-weight: 600;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fadb41;
  background: #002937;  
  overflow-x:auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #fadb41;
}

.main-tree h5{
  margin: 10px 0px 22px 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin:-10px 0 0 0;
  color: #fff;
  box-shadow: 0px 10px 5px #fadb41;
  background: #002937;  
  overflow-x:auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5{
  margin-left: 10px;
}

.main-four-card {
  height: 150px;
  width: 200px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card a {
  border: solid .1px #dddddd54;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 15px;
  background: #92929240;
  padding: 0px 10px 0px 10px;
  border-radius: 12% 12% 12% 0%;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
border-radius: 50%;
margin: 10px 0 0 10px;
padding: 0 15px 0 0;
}


@media only screen and (max-width: 369px) {

  }

</style>