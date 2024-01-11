<script setup>

</script>


<template>
    <div>  

       
    <div class="h-14 max-w-3xl mx-auto flex justify-between items-center">
        <h3 class="text-xl font-medium text-black">
            Accesorios
        </h3>
        <a href="#" class="text-xs  text-black">
            todos los accesorios
        </a>
        
    </div>
    <div class="bg-gray-100 border-t border-gray-300">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl py-10">
                MagSafe
            </h1>
        </div>
    </div>

    <!--Filter y tree-->

    <div class="h-14 border-t border-b border-gray-300 text-gray-400 text-xs sticky top-0">
       <div class=" max-w-8xl mx-auto h-full flex justify-between items-center ">
         <div class="flex space-x-1">
           <svg xmlns="http://www.w3.org/2000/svg"  class="h-4 w-4" viewBox="0 -960 960 960" fill="currentColor"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>
            <span>
                Filtro
            </span>
          </div>
            <div>Ordenar por: 
                <select name="Selection" id="" class="text-black">
                    <option value="0">Destacados</option>
                    <option value="1">Precio</option>
                    <option value="2">Nombre</option>
                    <option value="3">Fecha</option>
                </select>
            </div>
       </div>

    </div>

    </div>
    
</template>



