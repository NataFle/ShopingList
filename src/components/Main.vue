<template>
<div id="main">
  <router-view :items="items" :key="$route.fullPath"></router-view>
</div>
</template>
<script>

export default {
  name: 'Main',
  components: {
    
  },
  data () {
    return {   
        items: [{id: 1, name:'Tomatos', cost : 5, description: 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America and Central America. ' }, 
               {id: 2, name: 'Bread', cost: 10, description: 'Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures diet'}],

    }
  },
   mounted () {   
    this.$on('saveItem', function (item) {
      item.cost = Number(item.cost )      
      if(item.id == -1) {//Add new item 
        item.id = this.items.length + 1         
        this.items.push(item)
      }
      else {
         var index = this.items.findIndex(obj => obj.id == item.id) 
         if(index > -1) {
             this.$set(this.items, index, item)
         }
      }  
    }) 
   },
  methods: {
  }
}
</script>  