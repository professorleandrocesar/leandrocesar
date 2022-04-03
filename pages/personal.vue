<template>
    <div>
    <Nav/>
      <div id="main" class="nav-in"> 
        <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i> Voltar</a>
        <br>
        <NuxtLink to='/agenda'><i class="far fa-calendar-check"></i> Agenda | Reserva</NuxtLink>
      <br>
      </div>
    <div class="main-c"><i class="fas fasi fa-dumbbell"></i></div>
    <div id="main">
      <h1>Personal Trainer</h1>
      <!-- <div class="nav-in">
        <NuxtLink to="/horarios"><i class="fas fa-link"></i> Meus Horários livres</NuxtLink>
      </div>  -->
      <br>
      <h3>Serviço personalizado em Academias</h3>
      <hr>
      <p class='main-c-line-height-one'><b>
        Cansado de treinar sem ver resultado?
        </b>
      </p>
      <p class='main-c-line-height-one'><b>
        Tentou de tudo sem sucesso para perder peso?
        </b>
      </p>
      <p class='main-c-line-height-one'><b>
        Não consegue encontrar motivação para treinar sozinho?
        </b>
      </p>
      <p class='main-c-line-height-one'><b>
        Pretende abandonar o sedentarismo e iniciar a prática de exercício físico mas não sabe como começar?
        </b>
      </p>
      <hr>
      <br>
      <h3 class='main-l-personal'>
        Tenha resultados absolutos...
      </h3>
      <h3 class='main-r-personal'>
        ...com que tem experiência!
      </h3>
      <br>
      <h4 class='main-c'>
        O Personal Leandro Cesar tem...
      </h4>
      <div class='div-two-personal'>
            <div class='main-c'>
            <br>
            <i class="fasi fas fa-clipboard-list main-c"></i>
            <h3>Experiência</h3>

          <p class='main-l'>
          14 anos de experiência como Personal - Graduado desde 2008 pela UNIVERSO;
          <br>
          Experiência adquirida nas academias, com vários clientes de personal, assim como trabalhando em salas de musculação e 
          aulas coletivas. 'Professor Leandro Cesar' pode te ajudar a alcançar seus objetivos de forma segura e orientada.
          </p>
        </div>
            <div class="main-c">
            <br>
            <i class="fasi fas fa-user-plus"></i>
            
            <h3>Diferencial</h3>

          <p class='main-l'>Além de vários cursos na área, está se especializando em Cinesiologia, Biomecânica e Treinamento Físico;
          e também se especializando em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação;
          <br>
          
          </p>
            </div>
    </div>
    <div class='div-two-personal-two'>
            <div class="main-c">
            <br>
            <i class="fasi fas fa-user-ninja"></i>
            
            <h3>Atendimento Ninja</h3>
            <h4 class='main-c'>+ Vivência corporal<br>+ Velocidade<br>+ habilidades</h4>

          <p class='main-c'>- 8 anos de prática de capoeira;
          <br>- Desde 2011 é instrutor de Krav-maga;
          <br>- Formação em Professor de Yoga (em andamento);
          <br>
          </p>
            </div>
            </div>
            <br>
            <hr>
<div class="btn">
      <a href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Olá%20Leandro%20Cesar,%20fiquei%20interessado(a)%20no%20Personal,%20quero%20ser%20seu%20aluno(a),%20me%20chamo%20'  target='_blank'><h3><i class="fab fa-whatsapp"></i> Quero começar agora!</h3></a>
      </div>
            <hr>
<br>
       <div class="main-c">
            <br>
            <i class="fasi fas fa-users-cog"></i>
      <h3>Benefícios extras</h3>
      <h4 class='main-c'>Só pra quem é aluno de personal:</h4>
      <h5 class='main-c'><i class="fas fa-file-medical-alt"></i> Avaliação Física inicial;

          <br><i class="fas fa-file-prescription"></i> Reavaliações de 2 em 2 meses;
          <br><i class="fas fa-mobile-alt"></i> Série personalizada em aplicativo;
          <br><i class="fab fa-whatsapp"></i>  suporte por um canal direto via Whatsapp para tirar todas as suas dúvidas.;
          <br>
          </h5>
      </div>
<br> 
      <h3>Finalidades | Objetivos</h3>
      <p>Clientes de personal, procuram este serviço, por variados motivos:</p>
      <div class="line">

        <h5 @click='estetica()' class='lineBtn' :class='{ lineBtnHover: aplicar }'>Estéticos</h5>
        
        <h5 @click='terapeutica()' class='lineBtn' :class='{ lineBtnHover: aplicarTwo }'>Terapêuticos</h5>
        
        <h5 @click='profilatica()' class='lineBtn' :class='{ lineBtnHover: aplicarTree }'>Profiláticos</h5>
        
        <h5 @click='preparacao()' class='lineBtn' :class='{ lineBtnHover: aplicarFour }'>Preparatórios</h5>
        
        <h5 @click='competitiva()' class='lineBtn' :class='{ lineBtnHover: aplicarFive }'>Competitivos</h5>
        
        <h5 @click='especiais()' class='lineBtn' :class='{ lineBtnHover: aplicarSix }'>Especiais</h5>
      </div>
      <div v-html='finalidades'></div>
      <br>
      <hr>
      <h3>Perguntas frequentes</h3>
      <div class="btn">
      <h4 @click="trainer" class="persona"><span v-html="contenticonone"></span> Qual a diferença de personal trainer e personal training?</h4>
      <div v-html="content"></div>
      </div>
      <div class="btn">
      <h4 @click="trainning" class="persona"><span v-html="contenticontwo"></span> Qual a vantagem de ter um Personal Trainer?</h4>
      </div>
      <div v-html="contenttwo"></div>
      <br>
      <hr>
      <div class="btn">
      <a href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Olá%20Leandro%20Cesar,%20fiquei%20interessado(a)%20no%20Personal,%20quero%20ser%20seu%20aluno(a),%20me%20chamo%20'  target='_blank'><h3><i class="fab fa-whatsapp"></i> Quero começar agora!</h3></a>
      </div>
      <hr>
    </div>
        <Footer/>
    </div>
</template>
<script>
export default {
  head: {
    title: 'Personal | Professor Leandro Cesar',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Personal Trainer | Consultoria Presencial e Online | Professor Leandro Cesar | Atendimentos em Niterói e São Gonçalo - RJ'
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
            content: `Training = treinamento, aprendizado - o serviço. <br> Trainer = treinador - o profissional. Personal Trainer - o profissional.`,
            contenticonone: `<i class="fas fa-angle-down"></i>`,
            contenticontwo: `<i class="fas fa-angle-right"></i>`,
            contenttwo: '',
            finalidades: `- Desenvolvimento e manutenção da estética corporal: <br><ul><li>Hipertrofia: Aumento da massa corporal magra,
            sendo o treinamento de musculação a melhor forma de desenvolver a musculatura; </li><li>Diminuição do % de gordura:
            Redução da gordura corporal, por meio de exercícios aeróbicos de baixa intensidade e longa duração (iniciantes sedentários);
            </li></ul>`,
            aplicar: true,
            aplicarTwo: '',
            aplicarTree: '',
            aplicarFour: '',
            aplicarFive: '',
            aplicarSix: ''
        }
    },
  methods: {
    trainer() {
      this.content = `
        Training = treinamento, aprendizado - o serviço. <br> Trainer = treinador - o profissional. Personal Trainer - o profissional.       
      `,
      this.contenticonone= `<i class="fas fa-angle-down"></i>`,
      this.contenticontwo= `<i class="fas fa-angle-right"></i>`,
      this.contenttwo = ``
    },
    trainning() {
        this.contenttwo = `
        A maior vantagem é a motivação: o personal trainer contribuirá para evitar a rotina e monotonia dos treinos, diversificando o trabalho 
        desenvolvido e levando-o a sentir-se mais motivado e a não desistir, aumentará assim,  
        a sua frequência no treino, principalmente quando estamos falando a médio/longo prazo. Ou seja, a regularidade no exercício 
        é maior quando comparado àquelas pessoas que treinam sozinhas. Desse jeito, com certeza o resultado virá!
      `,
      this.content = ``,
        this.contenticonone= `<i class="fas fa-angle-right"></i>`,
        this.contenticontwo= `<i class="fas fa-angle-down"></i>`
    },
    estetica() {
      this.finalidades = `- Desenvolvimento e manutenção da estética corporal: <br><ul><li>Hipertrofia: Aumento da massa corporal magra,
            sendo o treinamento de musculação a melhor forma de desenvolver a musculatura; </li><li>Diminuição do % de gordura:
            Redução da gordura corporal, por meio de exercícios aeróbicos de baixa intensidade e longa duração (iniciantes sedentários);
            </li></ul>`,
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
      cardiorrespiratórias e neuromusculares para melhor condicionamento físico:<ul><li>Resistência Aeróbica: É desenvolvida através de exercícios aeróbicos, como
      caminhada, corrida, proporcionando maior eficiência nas atividades do dia-a-dia;</li>
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
      <br>
      
       | Agilidade  
       | Velocidade 
       | Equilíbrio 
       | Coordenação
       | Resistência
       | Flexibilidade
       | Descontração
       | Ritmo
       | Potência
       `,
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
    width: 90%;
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
    text-align: left;
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