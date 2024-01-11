<template>
  <div>
    <NavBar/>
    <TituloPagina/>
  </div>

  
  <div class="max-w-8xl mx-auto flex">
    <MenuLateral/>
 <div class="grid grid-cols-3  border-l border-gray-300 ">
    <GridArticl />
  </div>

  </div>

 
 
</template>

<script setup>
import GridArticl from '@/components/GridArticl.vue'
import NavBar from '@/views/NavBar.vue'
import TituloPagina from '@/views/TituloPagina.vue'
import MenuLateral from '@/views/MenuLateral.vue'

</script>

