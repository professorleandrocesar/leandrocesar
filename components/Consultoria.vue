<template>
  <div>      
    <div id="main">
      <hr>
      <br>
      <div class="main-c"><i class="fas fasi fa-running"></i></div>
      <h1>Consultoria</h1>
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
            <td>30 R$</td>
          </tr>
          <tr>
            <td style="color:#fadb41;">1 série alternada (A/B)</td>
            <td  style="color:#fadb41;">40 R$</td>
          </tr>
          <tr>
            <td>1 série (A/B/C) ou 1 série (A/B/C/D)</td>
            <td>60 R$</td>
          </tr>
          <tr>
            <td>1 série (A/B/C/D/E) ou 1 série (A/B/C/D/E/F)</td>
            <td>75 R$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  
} 
</script>