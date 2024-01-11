<script setup>

</script>





<template>
  
        <!--Articl-->
        

        
           <div class="" v-for="item in 9" :key="item">
             <div class="border-b border-r border-gray-300 text-center pt-10 pb-4 px-10 p-4" >
                <!--aspect square pour forcer la forma rectangulaire-->
                <div class="aspect-square">
                    <img src="@\assets\img\funda.jpg" alt="" class="w-full h-full object-center object-cover ">
                </div>

               
                    <p class="text-xs font-ligth text-orange-500 mb-2"> Nuevo  </p>
                    <h3 class="text-md font-ligth text-gray-700">
                         titulo de articulo {{ item }}
                    </h3>
                    <p class="text-base text-gray-900 mt-3"> 55,00 €</p>

                    <div class="flex justify-center space-x-2 mt-4">
                        <span class="rounded-full bg-blue-500 w-4 h-4 shadow-inner cursor-pointer"></span>
                        <span class="rounded-full bg-pink-500 w-4 h-4 shadow- cursor-pointer"></span>
                        <span class="rounded-full bg-green-500 w-4 h-4 shadow-inner cursor-pointer"></span>
                        <span class="rounded-full bg-yellow-500 w-4 h-4 shadow-inner cursor-pointer"></span>

               
                    </div>

           </div>

          

            </div> 
            

      

   

 
 
</template>



