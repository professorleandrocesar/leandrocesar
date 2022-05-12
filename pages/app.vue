<template>
  <div id="main">
    <div class="main-c">
      <h1>| app.leandrocesar |</h1>
    <input type="email" name="" id="usuario" placeholder="Usuário">
    <br>
    <input type="password" name="" id="senha" placeholder="Senha">
    <br>
    <input type="submit" value="Entrar" id="btn">
    </div>
  </div>
</template>

<style scoped>
style{
    background-color: black;
}

input {
  height: 2em;
  padding: 0 10px;
  margin: 10px;
  border-radius: 0.3em 0.3em 0.3em 0.3em;
  text-decoration: none;
  transition: color .4s linear, border .4s linear, background .4s linear;
  color: #777;
  text-indent: 0;
  background: #fff;
  width: 50%;
  border-radius: 0.3em 0.3em 0.3em 0.3em;
}
#btn {
  padding: 1px;
  height: 2em;
  text-decoration: none;
  transition: color .4s linear, border .4s linear, background .4s linear;
  color: #777;
  text-indent: 0;
  background: #fff;
  width: 20%;
  border-radius: 0.3em 0.3em 0.3em 0.3em;
  cursor: pointer;
}
#btn:hover {
  background: #fadb41;
    color: #fff;
}
</style>