<template>
  <div class="mainProduct" @mouseover="showIt=true" @mouseleave="showIt=false">
    <div class="picture">
      <img v-if="product.quantity>0"  src="../assets/img/product.jpg" alt="Product Image" id="prod-img"> <img v-else src="../assets/img/product.jpg" alt="Denim Jeans" id="prod-img"/>
      <span class="card-buttons" v-if="showIt"> 
        <button class="box-btn"><NuxtLink to="/"><img src="../assets/img/viewproduct.png" alt="deets" id="view-details"/></NuxtLink></button>
        <button class="box-btn"><img src="../assets/img/likeproduct.png" alt="like" id="like-product"/></button>
      </span>
    </div>
    <div class="card-footer">
      <div id="product-name">{{product.name}}</div>
      <div id="product-price">P{{product.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      type:Object,
    }
  },
  data(){
    return{
      showIt: false,
    }
  }
}
</script>

<style scoped>
  .mainProduct{
    border: none;
    outline: 0;
    /* padding: 5px; */
    color: white;
    background-color: #FFFBEC;
    cursor: pointer;
    width: auto;
    height: auto;
    font-size: 18px;
    position: relative;
    margin: 10px;
    box-shadow: 1px 4px 6px #b0b0b0;
  }

  .picture{
    width: 100%;
    height: 200px;
    position: static;
  }

  #prod-img{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .card-buttons{
    /* background-color: #e95a85; */
    background-color: #FFFBEC;
    width: auto;
    height: auto;
    margin-bottom:65px;
    padding: 0px;
    z-index: 9;
    position: absolute;
    right:0;
    left: 0;
    bottom:0;
  }

  .card-footer{
    background-color: #e95a85;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    display: inline-flex;
  }

  .box-btn{
    width: 25px;
    height: 25px;
    padding: 0px;
    margin: 3px;
    color:black;
    background-color: #FFFBEC;
    margin-top: 0px;
    margin-bottom: 0px;
    border: none;
  }

  #product-name{
    color: #ffffff;
    font-size: 22px;
    font-size: 82%;
		text-align: center;
		font-weight: bold;
    margin: 10px;
  }

  #product-price{
    /* color: #e95a85; */
    color: #ffffff;
    font-size: 22px;
    font-size: 82%;
		font-weight: bold;
    margin: 10px;
    position: absolute;
    right: 0;
    z-index: 1;
  }

  #like-product{
    width: 100%;
    height: 100%;
  }

  #view-details{
    width: 100%;
    height: 100%;
  }
</style>