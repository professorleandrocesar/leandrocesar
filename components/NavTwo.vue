<template>
    <div class='nav-two'>
        <div>
            <div>
                <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i></a>
            </div>
            <div>
                <nuxt-link to="/app"><i class="fa-solid fa-right-to-bracket"></i></nuxt-link>
                <nuxt-link to=""><i class="fa-solid fa-share-nodes"></i></nuxt-link>
                <nuxt-link to=""><i class="fa-solid fa-bars"></i></nuxt-link>
            </div>
        </div>
    </div>

</template>
<style scoped>
.nav-two{
  height: 35px;
  position: sticky;
  top: -1px;
  background: #002937;    
  border-radius: 0% 0% 10% 10%;
  box-shadow: 0px .5px 5px #fadb4130;
  z-index: 10;
}

.nav-two div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.nav-two a{
  cursor: pointer;
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-two i {
  color: #929292;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>
