<template>
  <body>
    <input type="checkbox" id="check">
    <!--header area start-->
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
        <h3>ITF <span>Management</span></h3>
      </div>
      <div class="right_area">
         <span class="logout_btn">Ibadan Area Office
       <a href="" class="logout"><i class="fas fa-sign-out-alt"></i></a>
        </span>
      </div>
    </header>
    <!--header area end-->
    <!--sidebar start-->
    <div class="sidebar">
      <center>
        <img src="../assets/itf_log.png" class="profile_image" alt="">
        <h4>Industrial Training Fund</h4>
      </center>
      <router-link to="/user/dashboard/home"><i class="fas fa-desktop"></i><span>Dashboard</span></router-link>
      <router-link to="/user/dashboard/programs"><i class="fas fa-cogs"></i><span>Programs</span></router-link>
      <router-link to="/user/dashboard/trainee-list"><i class="fas fa-table"></i><span>Trainee List</span></router-link>
      <router-link to="/user/dashboard/registeration"><i class="fas fa-th"></i><span>Registeration</span></router-link>
    </div>
    <!--sidebar end-->

    <div class="content">
        <router-view></router-view>
    </div>

  </body>
</template>

<script>
export default {

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
header {
    position: fixed;
    background: #22242A;
    width: 100%;
    height: 70px;
    padding: 0px 20px 20px 20px;
}

.left_area h3{
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 900;
}
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.left_area span{
  color: #19B3D3;
}

.logout_btn{
  padding: 5px;
  text-decoration: none;
  float: right;
  margin-top: -30px;
  margin-right: 40px;
  border-radius: 2px;
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  transition: 0.5s;
  transition-property: background;
}
.logout{
    margin-left: 25px;
}

.sidebar {
    background: #2f323a;
    margin-top: 70px;
    padding-top: 30px;
    position: fixed;
    left: 0;
    width: 250px;
    height: 100%;
    transition: 0.5s;
    transition-property: left;
}

.sidebar .profile_image{
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.sidebar h4{
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
}

.sidebar a{
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

.sidebar a:hover{
  background: #19B3D3;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
}

.sidebar i{
  padding-right: 10px;
}

label #sidebar_btn{
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 300px;
  font-size: 20px;
  margin: 16px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover{
  color: #19B3D3;
}

#check:checked ~ .sidebar{
  left: -190px;
}

#check:checked ~ .sidebar a span{
  display: none;
}

#check:checked ~ .sidebar a{
  font-size: 20px;
  margin-left: 170px;
  width: 80px;
}

.content{
  margin-left: 250px;
  /* background: url(background.png) no-repeat; */
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
  padding: 80px 20px 10px;
}

#check:checked ~ .content{
  margin-left: 60px;
}

#check{
  display: none;
}

</style>