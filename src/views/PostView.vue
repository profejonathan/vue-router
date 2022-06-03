<template>
<div>
  <Titulo texto="Post"></Titulo>
  <p> Parámetro {{ $route.params.id }}</p>
</div>

</template>

<script>
    import Titulo from '../components/Titulo.vue'
export default {
    name:'post',
    components: {
        Titulo
    }
}
</script>

<style>

</style>