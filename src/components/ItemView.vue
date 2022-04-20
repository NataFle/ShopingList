<template>
<div>
   <h2>{{itemName}}</h2>
   <div id="divDesc">{{itemDescription}}</div>
   <div><input type="button" id="back" @click="back" value="Back"></div>
</div>
</template>
<script>
export default {
    name: 'ItemView',
     props: {      
       name : {
       type: String,
       default : ''
      },     
      description : {
       type: String,
       default : ''
      }
     },
     data() {
          return {
             itemName: this.name, 
             itemDescription : this.description
          }
     },
     methods: {
         back(){
               this.$router.back()
         },
     }
}
</script>
<style scope>
 #divDesc {
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
 }
</style>