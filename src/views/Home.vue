<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#" style="text-align: center">HRMS</a>
                    <div id="close-sidebar" @click="closeMenu">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="../assets/user.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Baba
                            <strong>Baba</strong>
                        </span>
                        <span class="user-role">Administrator</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class="sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
                        <li>
                            <router-link to="/">
                                <i class="fa fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/users">
                                <i class="fa fa-users"></i>
                                <span>Users</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/payrolls">
                                <i class="fas fa-money-bill"></i>
                                <span>Payrolls</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/recruitments">
                                <i class="fa fa-user-plus"></i>
                                <span>Recruitments</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-globe"></i>
                                <span>Maps</span>
                            </a>
                        </li>
                        <hr>
                        <li>
                            <a href="#">
                                <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
        </nav>
        <!-- page-content  -->
        <main class="page-content">
            <router-view/>
        </main> 
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
    </div>
</template>

<script src="../main.js" type="text/javascript"></script>
<script>
export default {
    name: "admin",
    components: {},
    methods: {
        closeMenu(){
            $(".page-wrapper").toggleClass("toggled");
        }
    }
};
</script>

<style>

</style>