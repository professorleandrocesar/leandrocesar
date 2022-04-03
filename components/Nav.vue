<template>
<div id="nav"> 
    <NuxtLink to="/">Início</NuxtLink> |
    <NuxtLink to="/sobre">Sobre</NuxtLink>
</div>
</template>
<script>
export default {
    data() {
        return {
            mudar: false
        }
    }
}
</script>
<style>
#nav {
    padding: 15px 0 10px 0;
    font-size: 1em;
    text-align: center;
    /* 
    Para colocar barra fixa:
    position: fixed;
    top: 0;
    margin: auto;
    height: 50px;
    width: 100%; */
}

#nav a {
    font-weight: bold;
    color: #899fa4;
    display: inline;
    transition: all 0.24s linear;
}

#nav a:hover {
    text-decoration: underline;
}

#nav a.nuxt-link-exact-active {
    color: #fadb41;
    text-decoration: underline;  
}
</style>