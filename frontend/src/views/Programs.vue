<template>
  <div class="main">
    <div>
      <div class="program-title"><b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button></div>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <ul>
          <li>tens</li>
        </ul>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
  <div>
      <div class="program-title"><b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button></div>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <ul>
          <li>tens</li>
        </ul>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
  <div>
      <div class="program-title"><b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button></div>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <ul>
          <li>tens</li>
        </ul>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
  <div>
      <div class="program-title"><b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button></div>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <ul>
          <li>tens</li>
        </ul>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
    <div class="add-btn">
    <a href=""><img src="../assets/add logo.png" alt=""><span class="add">ADD</span></a>
  </div>
  
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main{
  width: 80%;
  background-color: black;
}
.program-title{
  padding: 2rem;

}
:root .btn-secondary {
    color: #fff;
    background-color:  #C62020;
    border-color: #6c757d;
}
:root .btn-secondary:hover{
  background-color: black;
}
 :root .btn{
    display: inline-block;
    font-weight: 700;
    color: white;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 2rem 2rem;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 0.rem;
}
#app {
    text-align: center;
    color: #2c3e50;
}
.add-btn{
  text-align: right;

}
img{
  height: 30px;
  width: 30px;
  margin-right: 0.5rem;
}
.add{
  color: black;
  font-weight: 700;
  text-decoration: none;
}
.add:hover{
  text-decoration: none;
}

</style>