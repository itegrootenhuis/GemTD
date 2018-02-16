<template>
  <section id="overview">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 id="test">{{ Title }}</h4>
                    <p>{{ overview }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
   data: function(){
       return{
           Title: 'Updates',
       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
