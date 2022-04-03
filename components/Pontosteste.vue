<template>
        <div id="main" class="nav-in"> 
        <div class="main-l">
            <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i> Voltar</a>
        </div>
        <div class="main-c"><i class="fas fasi fa-dumbbell"></i></div>
                <h1>Tabela dos principais pontos</h1>
            
            <p class="main-c">| Pontos com '*' aprensentam detalhes abaixo da tabela |</p>
            <div class="table-overflow">

            <table>          
                <thead>
                    <th class="headcol">Tipo de ponto/Merediano</th>
                    <th>Pulmão</th>
                    <th>Intestino Grosso</th>
                    <th>Estômago</th>
                    <th>Baço-pâncreas</th>
                    <th>Coração</th>
                    <th>Intestino Delgado</th>
                    <th>Bexiga</th>
                    <th>Rim</th>
                    <th>Pericárdio</th>
                    <th>Triplo Aquecedor</th>
                    <th>Vesícula Biliar</th>
                    <th>Fígado</th>
                </thead>
                <tfoot></tfoot>
                <tbody>
                    <tr>
                        <th class="headcol">Fonte (yuan)</th>
                        <td @click="pNove" class="dot">*P9</td>
                        <td class="ig sete dot">IG7</td>
                        <td class='e-quarenta-dois dot'>E42</td>
                        <td class='bp-tres dot'>BP3</td>
                        <td class='c-sete dot'>C7</td>
                        <td class='id-quatro dot'>ID4</td>
                        <td class='b-sessenta-quatro dot'>B64</td>
                        <td class='r-um dot'>R1</td>
                        <td class='pc-sete dot'>PC7</td>
                        <td class='ta-quatro dot'>TA4</td>
                        <td class='vc-quarenta dot'>VB40</td>
                        <td class='f-tres dot'>F3</td>
                    </tr>
                    <tr>
                        <th class="headcol">Luo (junção)</th>
                        <td @click="pSete" class="dot">*P7</td>
                        <td class="ig-seis dot">IG6</td>
                        <td class='e-quarenta dot'>E40</td>
                        <td class='bp-quatro dot'>BP4</td>
                        <td class='c-cinco dot'>C5</td>
                        <td class='id-sete dot'>ID7</td>
                        <td class='b-cinquenta-oito dot'>B58</td>
                        <td class='r-quatro dot'>R4</td>
                        <td class='pc-seis dot'>PC6</td>
                        <td class='ta-cinco dot'>TA5</td>
                        <td class='vb-trinta-sete dot'>VB37</td>
                        <td class='f-cinco dot'>F5</td>
                    </tr>
                    <tr>
                        <th class="headcol">Tonificação</th>
                        <td @click="pNove" class="dot">*P9</td>
                        <td class='ig-onze dot'>IG11</td>
                        <td class='e-quarenta-um dot'>E41</td>  
                        <td class='bp-dois dot'>BP2</td>
                        <td class='c-nove dot'>C9</td>
                        <td class='id-tres dot'>ID3</td>
                        <td class='b-sessenta-sete dot'>B67</td>
                        <td class='r-sete dot'>R7</td>
                        <td class='pc-nove dot'>PC9</td>
                        <td class='ta-tres dot'>TA3</td>
                        <td class='vc-quarenta-tres dot'>VB43</td>
                        <td class='f-oito dot'>F8</td>
                    </tr>
                    <tr>
                        <th class="headcol">Sedação</th>    
                        <td @click="pCinco" class="dot">P5</td>
                        <td class='ig-dois dot'>IG2</td>
                        <td class='e-quarenta-cinco dot'>E45</td>
                        <td class='bp-cinco dot'>BP5</td>
                        <td class='c-sete dot'>C7</td>
                        <td class='id-oito dot'>ID8</td>
                        <td class='b-sessenta-cinco dot'>B65</td>
                        <td class='r-um dot'>R1</td>
                        <td class='pc-sete dot'>PC7</td>
                        <td class='ta-dez dot'>TA10</td>
                        <td class='vb-trinta-oito dot'>VB38</td>
                        <td class='f-dois dot'>F2</td>
                    </tr>
                    <tr>
                        <th class="headcol">Shu dorsal</th>
                        <td class="b-treze dot">B13</td>
                        <td class='b-vinte-cinco dot'>B25</td>
                        <td class='b-vinte-um dot'>B21</td>
                        <td class='b-vinte dot'>B20</td>
                        <td class='b-quinze dot'>B15</td>
                        <td class='b-vinte-sete dot'>B27</td>
                        <td class='b-vinte-oito dot'>B28</td>
                        <td class='b-vinte-tres dot'>B23</td>
                        <td class='b-quatorze dot'>B14</td>
                        <td class='b-vinte-dois dot'>B22</td>
                        <td class='b-dezenove dot'>B19</td>
                        <td class='b-dezoito dot'>B18</td>
                    </tr>
                    <tr>
                        <th class="headcol">Shu dosal externo</th>
                        <td class="b-quarenta-dois dot">B42</td>
                        <td>--</td>
                        <td class='b-cinquenta dot'>B50</td>
                        <td class='b-quarenta-nove dot'>B49</td>
                        <td class='b-quarenta-quatro dot'>B44</td>
                        <td>--</td>
                        <td>--</td>
                        <td class='b-cinquenta-dois dot'>B52</td>
                        <td class='B-quarenta-tres dot'>B43</td>
                        <td class='b-cinquenta-um dot'>B51</td> 
                        <td class='b-quarenta-oito dot'>B48</td>
                        <td class='b-quarenta-sete dot'>B47</td>
                    </tr>
                    <tr>
                        <th class="headcol">Horário</th>
                        <td class="p-oito dot">P8</td>
                        <td class='ig-um dot'>IG1</td>
                        <td class='e-trinta-seis dot'>E36</td>
                        <td class='bp-tres dot'>BP3</td>
                        <td class='c-oito dot'>C8</td>
                        <td class='id-cinco dot'>ID5</td>
                        <td class='b-sessenta-seis dot'>B66</td>
                        <td class='r-dez dot'>R10</td>
                        <td class='pc-oito dot'>PC8</td>
                        <td class='ta-seis dot'>TA6</td>
                        <td class='vb-quarenta-um dot'>VB41</td>
                        <td class='f-um dot'>F1</td>    
                    </tr>
                    <tr>
                        <th class="headcol">Xi (acúmulo)</th>
                        <td class="p-seis dot">P6</td>
                        <td class='ig-sete dot'>IG7</td>
                        <td class='e-trinta-quatro dot'>E34</td>
                        <td class='bp-oito dot'>BP8</td>
                        <td class='c-seis dot'>C6</td>
                        <td class='id-seis dot'>ID6</td>
                        <td class='b-sessenta-tres dot'>B63</td>
                        <td class='r-cinco dot'>R5</td>
                        <td class='pc-quatro dot'>PC4</td>
                        <td class='ta-sete dot'>TA7</td>
                        <td class='vb-trinta-seis dot'>VB36</td>
                        <td class='f-seis dot'>F6</td>
                    </tr>
                    <tr>
                        <th class="headcol">Entrada</th>
                        <td class="p-um dot">P1</td>
                        <td class='ig-quatro dot'>IG4</td>
                        <td class='e-um dot'>E1</td>
                        <td class='bp-um dot'>BP1</td>
                        <td class='c-um dot'>C1</td>
                        <td class='id-um dot'>ID1</td>
                        <td class='b-um dot'>B1</td>
                        <td class='r-um dot'>R1</td>
                        <td class='pc-um dot'>PC1</td>
                        <td class='ta-um dot'>TA1</td>
                        <td class='vb-um dot'>VB1</td>
                        <td class='f-um dot'>F1</td>
                    </tr>
                    <tr>
                        <th class="headcol">Saída</th>
                        <td @click="pSete" class="dot">*P7</td>
                        <td class='ig-vinte dot'>IG20</td>
                        <td class='e-quarenta-dois dot'>E42</td>
                        <td class='bp-vinte-um dot'>BP21</td>
                        <td class='c-nove dot'>C9</td>
                        <td class='id-dezenove dot'>ID19</td>
                        <td class='b-sessenta-sete dot'>B67</td>
                        <td class='r-vinte-dois dot'>R22</td>
                        <td class='pc-oito dot'>PC8</td>
                        <td class='ta-vinte-dois dot'>TA22</td>
                        <td>--</td>
                        <td class='f-quatorze dot'>F14</td>
                    </tr>
                    <tr>
                        <th class="headcol">Janela do Céu</th>
                        <td class="p-tres dot">P3</td>
                        <td class='ig-dezoito dot'>IG18</td>
                        <td class='e-nove dot'>E9</td>
                        <td>--</td>
                        <td>--</td>
                        <td class='id-dezesseis-dezessete dot'>ID16 e ID17</td>
                        <td class='b-dez dot'>B10</td>
                        <td>--</td>
                        <td class='pc-um dot'>PC1</td>
                        <td class='ta-dezesseis dot'>TA16</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                </tbody>
            </table>  
            </div>
                
                <div v-html="content"></div>
            <br>
        </div>
</template>
<script>
export default {
    data() {
        return {
            content: ''
        }
    },

    methods: {
        pNove() {
            this.content= `
            <hr>
            <h1>
                <b>
                    P9 - Tai Yuan
                    <br>
                    Ponto de fonte Yuan
                </b>
            </h1>
            <div class="main-c"><img src="" alt="Imagem do local de punção do ponto 'P9'"></div>
            <h4><b>Localização:</b></h4>
            <p>
                No espaço da articulação da mão, no punho, lado da região palmar (prega distal do punho), radial a 
                artéria e ulnar ao tendão do músculo abdutor longo do polegar.
            </p>
            <h4><b>Punção:</b></h4>
            <p>
                Vertical, de 0,2 a 0,5 cun. 
                <br>
                <b>Cuidado:</b> Proximidade com a artéria radial;
            </p>
            <h4><b>Indicações e efeitos mais importantes:</b></h4>
            <p>
                <b>Fortalece o pulmão, transforma o muco, diminui a energia qi do pulmão:</b> Doenças do trato respiratório, como tosse, dispneia.
                <br>
                <b>Regula e harmoniza os vazos (harmoniza a relação zong-qi e circulação do sangue):</b> Doenças vasculares, doença cardíaca indireta, 
                por exmplo, em palpitações e dispneia de carga.
                <br>
                <b>Torna Permeável o canal de energia e alivia dores:</b> Problemas no trato do canal de energia e do canal de energia musculotendíneo.
            </p>
            <h4><b>Particularidades:</b></h4>
            <p>
                Ponto fonte Yuan, ponto terra, ponto de tonificação. Ponto importante para fortalecer a energia qi e do yin do pulmão.
                <br>
                Ponto especial para artérias e vasos sanguíneos; fortalece e recupera as pessoas que estão esgotadas ou com poucas reservas, assim cuja mente e
                espírito estão 'presas' num abismo, tornando possível que a pessoa tenha maior controle e estabilidade.
            </p>
            <hr>
        `
        },


        pSete() {
            this.content= `
            <hr>
            <h1>
                <b>
                    P7 - Lie Que
                    <br>
                    Ponto Luo (junção)
                </b>
            </h1>
            <div class="main-c"><img src="" alt="Imagem do local de punção do ponto 'P7'"></div>
            <h3><b>Localização:</b></h3>
            <p>
                Diretamente sobre o processo estilóide do rádio, no lado radial do antebraço, cerca de 1,5 cun proximal ao espaço na articulação da mão, no punho,
                em uma depressão em forma de "V".
            </p>
            <h3><b>Punção:</b></h3>
            <p>
                Oblíqua, de 0,5 a 1 cun, em direção ao ombro ou ao punho.
                <br>
                <b>Cuidado:</b> Veia cefálica;
            </p>
            <h3><b>Indicações e efeitos mais importantes:</b></h3>
            <p>
                <b>Beneficia a nuca e a cabeça:</b> Problemas na nuca, cabeça e região cervical da coluna.
                <br>
                <b>Abre o exterior, conduz o vento para fora, diminui a energia qi do pulmão:</b> Infecções com febre, paresia facial, neuralgia do trigêmio, dores na
                cabeça, doenças das vias respiratórias.
                <br>
                <b>Abre e regula o Vaso Concepção:</b> Retenção de lóquios puerperais, dores nas genitálias.
                <br>
                <b>Regula os caminhos da água:</b> Doenças das vias urinárias.
                <br>
                <b>Torna permeável o canal de energia e alivia a dor:</b> Problemas no membro superior no trajeto do canal de energia.
                <br>
                <b>Como ponto luo:</b> Distúrbios psiquícos (gargalhadas inadequadas, esquecimento..).
            </p>
            <h3><b>Particularidades:</b></h3>
            <p>
                Ponto Luo, ponto de abertura do Vaso Concepção, ponto de saída; usado principalmente para equilibrar os dois orgão no elemento, com isso, frequentemente
                usado com IG6(ponto luo) ou com IG4 (ponto-fonte yuan). Efeito poderoso no órgão e efeito especial nos pulmões, garganta, naris e cabeça. Acalma e acomoda o
                espírito, fazendo com a pessoa que está uma respiração curta ou tensa, respire de maneira mais profunda. Alivia a tensão da garganta, possibilitando que a 
                pessoa chore, principalmente se o pesar e a trsiteza foram reprimidos por um longo tempo.
            </p>
        `
        },
        pCinco() {
            this.content= `
            <hr>
            <h1>
                <b>
                    P5 - Chize
                    <br>
                    Ponto de Sedação
                </b>
            </h1>
            <div class='main-c'><img src="" alt="Imagem do local de punção do ponto 'P5'"></div>
            <h3><b>Localização:</b></h3>
            <p>
                Radial ao tendão do bíceps, na prega do cotovelo.
            </p>
            <h3><b>Punção:</b></h3>
            <p>
                Vertical, de 0,5 a 1 cun. Melhor maneira de puncionar é deixar o cotovelo em leve flexão e antebraço em supinação
                <br>
                <b>Cuidado:</b> ;
            </p>
            <h3><b>Indicações e efeitos mais importantes:</b></h3>
            <p>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                </p>
            <h3><b>Particularidades:</b></h3>
            <p>
                
            </p>
            `
        },
        o() {
            this.content= `
            <hr>
            <h1>
                <b>
                    
                    <br>
                    
                </b>
            </h1>
            <div class='main-c'><img src="" alt="Imagem do local de punção do ponto ''"></div>
            <h3><b>Localização:</b></h3>
            <p>
                        
            </p>
            <h3><b>Punção:</b></h3>
            <p>
                
                <br>
                <b>Cuidado:</b> ;
            </p>
            <h3><b>Indicações e efeitos mais importantes:</b></h3>
            <p>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                <br>
                <b>:</b> .
                </p>
            <h3><b>Particularidades:</b></h3>
            <p>

            </p>
        `
        }     
    }
}
</script>