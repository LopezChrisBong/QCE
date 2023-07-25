
<template>
<div class=" bg-gray-100 w-full h-screen ">
 <Nav/>
    <Sidebar/>
    <router-view/>
</div>
   
</template>

<script setup>
import Nav from './pages/navigation/qce_nav.vue'
</script>
