<template>
  <div>
    <div id="main" class="nav-in"> 
        <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i> Voltar</a>
      </div>
    <div class="main-c"><i class="fas fasi fa-yin-yang"></i></div>
    <div id="main" >
      <h1>Acupuntura</h1>
      <p>
          Em Construção!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Acupuntura | Professor Leandro Cesar',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Acupuntura | Professor Leandro Cesar | Atendimentos em Niterói e São Gonçalo - RJ'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Acupuntura, MTC, Medicinha Tradicional Chinesa, Niterói, São Gonçalo, Professor Leandro Cesar'
      }
    ]
  }
} 
</script>
