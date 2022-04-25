<template>
    
    <div class='nav-one'>
        <div>
            <nuxt-link to=""><i class="fa-solid fa-share-nodes"></i></nuxt-link>
            <nuxt-link to=""><i class="fa-solid fa-bars"></i></nuxt-link>
        
        </div>
    </div>

</template>
<style scoped>
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
</style>