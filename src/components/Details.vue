<template>
<div id="divMain">
    <div>
     <input class="item" type="text" v-model="itemName" id="itemName" name="itemName" placeholder="Name">
     <input  class="item" type="number" v-model="itemCost"  id="itemPrice" name="itemPrice" placeholder="Price">  
    </div>
    <div>
       <textarea  class="item" id="description" v-model="itemDescription"  name="description" rows="20" placeholder="Description"></textarea>  
    </div>
    <div>
      <input type="button" id="cancel" @click="cancel" value="Cancel">
      <input type="button" id="save" @click="save" value="Save">  
    </div>
     
</div>
</template>
<script>
export default {
    name: 'Details',
     props: {
       id : {
        type: Number,
        default : -1   
       },
       name : {
       type: String,
       default : ''
      },
      cost: {
       type: Number,
       default : 0
      },
      description : {
       type: String,
       default : ''
      }
     },
     data() {
          return {
             itemId: this.id,
             itemName: this.name, 
             itemCost: this.cost,
             itemDescription : this.description
          }
     },
     methods: {
         cancel(){
               this.$router.back()
         },
         save() {
            this.$parent.$emit('saveItem',{id: this.itemId , name: this.itemName,
                                           cost: this.itemCost, description : this.itemDescription} )
            
            this.$router.back()
            
         }         
    },
     computed : {      
       
     }
}
</script>
<style >
#divMain {
  margin-left: 1rem;
  margin-right: 1rem;
 }
 .item {
   width: 100%;
   margin-bottom: 1rem;
 }
 #cancel{
     margin: 0.5rem!important
 }
</style>