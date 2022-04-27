<template>
  <div>

    <div class='profile'>
      <img src='img/myFotoTwo.jpg' alt=''>
      <div>
        <h1>Leandro Cesar</h1>
        <h4> <i class="fa-solid fa-person-rays"></i> Empreendedor</h4>
      </div>
    </div>

    <div class='main-one'>
      <nuxt-link to="/deepacupuntura">
        <i class="fa-solid fa-building"></i> Dono do Deep Acupuntura
      </nuxt-link> 
      <a href="https://goo.gl/maps/4bbTEUKuQDbqotTG9">
        <i class="fa-solid fa-location-dot"></i> Niterói - Rio de Janeiro - Brasil
      </a>       
      <a href="https://github.com/professorleandrocesar">
        <i class="fa-brands fa-github"></i>  GitHub
      </a>
    </div>

    <div class='divider'></div>
    
    <div class='main-two'>
      <code>
        <i class="fa-solid fa-quote-left"></i> A felicidade não é algo que simplesmente acontece conosco. <br>É algo que nós fazemos acontecer.
        <br>
        Mihaly Csikszentmihalyi      
      </code>
    </div>  

    <div class='divider'></div>
    
    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-bars-progress"></i> Projetos Ativos</h5>
      </div>
    </div>

    <div class='main-four'>
      <div class='main-four-card'>
        <nuxt-link to="/professor">
          <img src='img/myFotoTwo.jpg' alt='' class='mini-profile'> 
          <span>Leandro Cesar</span>
          <br>
          <h4>@professorleandrocesar</h4>
          <p>Personal trainer | Consultoria | <br>Avaliação Física | Krav-maga</p>
        </nuxt-link>
        <nuxt-link to="/deepacupuntura">
          <img src='img/myFotoTwo.jpg' alt='' class='mini-profile'> 
          <span>Leandro Cesar</span>
          <br>
          <h4>@deepacupuntura </h4>
          <p>Clinica de Medicina Chinesa</p>
        </nuxt-link>
      </div>  
    </div>  

    <div class='divider'></div>

    <div class='main-tree'>
      <div>
        <h5><i class="fa-brands fa-youtube"></i> YouTube - Últimas</h5>
      </div>
    </div>

    <div class='main-five'>
      <div class='main-five-card'>
        <a>
          <img src='img/myFotoTwo.jpg' alt='' class='mini-profile'> 
          <span>Leandro Cesar</span>
          <br>
          <h4><i class="fa-solid fa-angle-right"></i> Aprenda Marleting digital do zero com anucios, dsds dsdfdf</h4>
           <iframe width="250" height="200" src="https://www.youtube.com/embed/KWtQk_uocXg" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4>@professorleandrocesar</h4>
        </a>
        <a>
          <img src='img/myFotoTwo.jpg' alt='' class='mini-profile'> 
          <span>Leandro Cesar</span>
          <br>
          <h4><i class="fa-solid fa-angle-right"></i> Aprenda Marleting digital do zero com anucios, dsds dsdfdf</h4>
           <iframe width="250" height="200" src="https://www.youtube.com/embed/KWtQk_uocXg" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h4>@professorleandrocesar</h4>
        </a>
      </div>  
    </div>  

    <div class='divider'></div>

    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-blog"></i> Blog - Destaques</h5>
      </div>
    </div>
    
    <div class='main-six'>
      <div class='main-six-card'>
        <a>
          <img src='img/myFotoTwo.jpg' alt='' class='mini-profile'> 
          <span>Leandro Cesar</span>
          <br>
          <h4>@professorleandrocesar</h4>
        </a>
        <a>
          <img src='img/myFotoTwo.jpg' alt='' class='mini-profile'> 
          <span>Leandro Cesar</span>
          <br>
          <h4>@professorleandrocesar</h4>
        </a>
      </div>  
    </div>  

    <div class='divider'></div>

    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-handshake"></i> Parceiros</h5>
      </div>
    </div>

    <div class='main-seven'>
      <div class='main-seven-card'>
        <a>
          
        </a>
        <a>
        </a>
      </div>  
    </div>  

    <div class='divider'></div>

    
    <br>
    <br>
    <br>

  </div>
</template>
<style scoped>
  body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a{
  text-decoration: none;
  color: #aaa;
}

i {
  color: #aaa;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color:#888;
}

.divider {
  height:15px;
  background-color: #dddddd54;
}

.nav-one{
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a{
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:10px 0 5px 0;
  color:black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
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
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
  box-shadow: 0px 4px 5px #ddd;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i, .main-one a:nth-child(2) i{
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(3) i{
  padding-right: 2px;
  margin: 0 0 0 2px;
}

.main-one a{
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 0 15px 0;
  color: black;
  box-shadow:  4px 4px 10px #bbb;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x:auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #555;
}

.main-tree h5{
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
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
  width: 600px;
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
  margin: 0 0 0 10px;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5{
  margin-left: 10px;
}

.main-five-card {
  height: 370px;
  width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-five-card a {
  border: solid .1px #dddddd54;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-five-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-five-card h4 {
  margin: 0 5px 0 10px;
}

.main-five-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-six i {
  font-size: 1.2em;
  color: #555;
}

.main-six h5{
  margin-left: 10px;
}

.main-six-card {
  height: 150px;
  width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid .1px #dddddd54;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h4 {
  margin: 0 5px 0 10px;
}

.main-six-card p {
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