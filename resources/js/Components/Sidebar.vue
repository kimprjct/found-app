<template>
  <aside class="sidebar">
    <div class="profile-section">
      <img src="/assets/avatar.png" alt="Profile Image" class="profile-image" />
      <span class="profile-name">KRK</span>
    </div>
    <nav class="sidebar-menu">
      <Link :href="route('admin.dashboard')"
      :active="route().current('admin.dashboard')"  :class="{ 'nav-link': true, 'active': route().current('admin.dashboard') }">Home</Link>
      <Link :href="route('admin.lost')"
      :active="route().current('admin.lost')"  :class="{ 'nav-link': true, 'active': route().current('admin.lost') }">Manage Lost Items</Link>
      <Link :href="route('admin.found')"
      :active="route().current('admibn.found')"  :class="{ 'nav-link': true, 'active': route().current('admin.found') }">Manage Found Items</Link>
      <Link :href="route('admin.claimReq')"
      :active="route().current('admin.claimReq')"  :class="{ 'nav-link': true, 'active': route().current('admin.claimReq') }">Claim Requests</Link>
      <Link :href="route('admin.foundReq')"
      :active="route().current('admin.foundReq')"  :class="{ 'nav-link': true, 'active': route().current('admin.foundReq') }">Found Requests</Link> <!-- Added this link -->
      <Link :href="route('admin.user')"
      :active="route().current('admin.user')"  :class="{ 'nav-link': true, 'active': route().current('admin.user') }">User Management</Link>
      <Link :href="route('admin.history')"
      :active="route().current('admin.history')"  :class="{ 'nav-link': true, 'active': route().current('admin.history') }" >Claim History</Link>
    </nav>
  </aside>
</template>



<script setup>
import { ref } from "vue";
import Sidebar from "@/Components/Sidebar.vue";
import AdminHeader from "@/Components/AdminHeader.vue";

import { Head, Link } from "@inertiajs/vue3";

const showingNavigationDropdown = ref(false);
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #d9d9d9;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #ccc;
  height: calc(170vh - 100px); /* Full height minus header height */
}

.profile-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

.profile-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-right: 10px;
}

.profile-name {
  font-weight: bold;
  font-size: 18px;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav-link {
  padding: 10px;
  color: #333;
  text-align: center;
  text-decoration: none;
  margin: 5px 0;
  background-color: #e5e5e5;
  border-radius: 0px;
  transition: background-color 0.3s;
  font-size: 18px;
}

.nav-link:hover {
  background-color: #c0c0c0;
}

.nav-link.active {
  background-color: #a9a9a9;
  color: black;
}
</style>
