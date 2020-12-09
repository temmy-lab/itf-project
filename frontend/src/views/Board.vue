<template>
  <div>
    <header>
        <div class="container">
            <div class="row">
                <img src="../assets/itf_log.png" alt="">
                <span class="span5">
                    <div class="site">
                        <div class="title">
                            INDUSTRIAL TRAINING FUND
                        </div>
                        <div class="sub-title">
                            Ibadan Area Office
                        </div>
                    </div> 
                </span>
            </div>    
        </div> 
    </header>
     <div>
        <div >
    <b-card no-body >
    <b-tabs pills card vertical nav-wrapper-class="col-md-2 tabs" >
      <b-tab title-item-class="tab-title tab-1" title="Program List" active><b-card-text class="tab" >Tab Contents 1</b-card-text></b-tab>
      <b-tab title-item-class="tab-title tab-2" title="Trainee List" ><b-card-text class="tab">Tab contents 2</b-card-text></b-tab>
      <b-tab title-item-class="tab-title tab-3" title="Registeration" ><b-card-text class="tab">Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
     </div>  
  </div>
</template>

<script>
 export default {

 }
</script>

<style>
header{
    background-color: black;
    padding: 8px 0px;
}
/* .nav-pills .tab-title .nav-link{
    background-color: #C62020;
} */
.site{
    margin-right: 10px;
    border-right-width: 10px;
    margin-left: 100px; 
    text-align: center;
}
.title{
    font-size: 2.5em;
    color: white;
    font-weight: bold;
    text-shadow: #C62020 2px 2px;
}
.sub-title{
    font-size: 20px;
    color: white;
    font-weight: bold;
    text-shadow: #C62020 2px 2px;
    margin: 0px 0px 0px;

}
/* b-tab{
    padding: 5rem 0rem;
} */
/* .col-md-2{
    background-color: #C62020;
} */
:root .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: black;
}

.nav-pills .nav-link .active{
    background-color: black;
}
.nav-pills .nav-link:hover{
    background-color: black;
}
.nav-pills .nav-link{
    color: white;
    font-weight: 700;
    margin-bottom: 5rem; 
    background-color: black;
}
.card-header {
    padding: 0rem 0rem;
    margin-bottom: 0;
    }
.nav-tabs li.active  a{
  display: block;
  background-color: green !important;
}
</style> 