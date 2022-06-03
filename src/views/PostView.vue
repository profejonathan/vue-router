<template>
<div>
  <h1>Post</h1>
  <Titulo texto="Hola"></Titulo>
  <p> Parametro {{ $route.params.id }}</p>
</div>

</template>

<script>
    import Titulo from '../components/Titulo.vue'
export default {
    components: {
        Titulo
    }
}
</script>

<style>

</style>