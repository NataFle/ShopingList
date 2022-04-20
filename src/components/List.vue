<template>
<div>
    <h2>Shoping List</h2>
    <table id="shopingList">
        <tr v-for = "(item, index) in items" :key="item.id" >
            <td class="item-id accent">{{index + 1}}</td>
            <td class="item-name" @click="openView(item)"> {{item.name}}</td>
            <td @click="openView(item)">{{item.cost}} NIS</td>            
            <td><img :src="pencil" @click="editItem(item)"/></td>   
            <td @click="removeItem(index)"><img :src="trash" /></td>  
        </tr>
        <tr  v-if="totalCost" id="total-row">
            <td class="item-id"></td>
            <td class="item-name">Total:</td>
            <td>{{totalCost}} <span>NIS</span></td>
        </tr>
    </table>  
    <div class="new-button" @click="editItem()">
        + Add Product
    </div>
</div>
</template>

<script>
import trash from '../assets/trash.svg'
import pencil from '../assets/pencil-fill.svg'
export default {
    name: 'ShopingList',
     props: {
        items : {
        type: Array,
       }
     },
     data() {
          return {
              trash,
              pencil,
             }
     },
     methods: {
         //Add new item to the list
         editItem(item) {
            //Edit  item exist
            if(item)
             this.$router.push({ name: 'details', params: {id: item.id , name: item.name,
                                                         cost: item.cost, description : item.description} })
            else //Add new item
             this.$router.push({ name: 'details', params: {id: -1 , name: '',
                                                         cost: 0, description : ''} })                                             
         },
         removeItem(index) {
             this.items.splice(index, 1); 
         },
         openView(item) {
             this.$router.push({ name: 'view', params: {id: item.id,name: item.name, description : item.description} })      
         }
    },
     computed : {
      totalCost() {
         let sum = 0;

        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].cost;
        }
        return sum
       }
     }
}
</script>
<style >
#shopingList  {
  margin-left: auto;
  margin-right: auto;
}
#shopingList tr {
    height: 3rem;
  
}
table  td { 
    padding: 0.5rem;
     border-bottom: 1px gray solid;
   
}
#total-row td {
    border: 0px !important;
  
}
.item-name {
    width: 120px;
    text-align: left;
}

.item-id {
    width: 40px;
    border-right: 1px gray solid;
}
 .accent {
    color: orange;
    font-weight: 600;
    font-size: larger;
 }
 .new-button {
     cursor: pointer;
     color: orange; 
     padding: 2rem;
 }
</style>
