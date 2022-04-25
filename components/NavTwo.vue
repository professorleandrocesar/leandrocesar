<template>
    <div class='nav-one'>
        <div>
            <div>
                <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i></a>
            </div>
            <div>
                <nuxt-link to=""><i class="fa-solid fa-share-nodes"></i></nuxt-link>
                <nuxt-link to=""><i class="fa-solid fa-bars"></i></nuxt-link>
            </div>
        </div>
    </div>

</template>
<style scoped>
.nav-one{
  height: 35px;
  position: sticky;
  top: -1px;
  background: #002937;    
}

.nav-one div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.nav-one a{
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #929292;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>
