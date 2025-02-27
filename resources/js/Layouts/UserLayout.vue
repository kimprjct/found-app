<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";

import NavBar from "@/Components/NavBar.vue";
import Footer from "@/Components/Footer.vue";

const showingNavigationDropdown = ref(false);
</script>

<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo-section">
                <img
                    src="/assets/snsulogo.png"
                    alt="SNSU Logo"
                    class="logo-image"
                />
                <div>
                    <h1 class="navbar-title">FoundU</h1>
                    <p class="navbar-subtitle">Discover.Connect.Reclaim</p>
                </div>
            </div>

            <div class="navbar-links">
                <Link
                    :href="route('user.dashboard')"
                    :active="route().current('user.dashboard')"
                    :class="{
                        'navbar-link': true,
                        active: route().current('user.dashboard'),
                    }"
                    >Home</Link
                >
                <Link
                :href="route('user.lost')"
                    :active="route().current('user.lost')"
                    :class="{
                        'navbar-link': true,
                        active: route().current('user.lost'),
                    }"
                    >Lost</Link
                >
                <Link
                :href="route('user.found')"
                    :active="route().current('user.found')"
                    :class="{
                        'navbar-link': true,
                        active: route().current('user.found'),
                    }"
                    >Found</Link
                >

                <!-- Notification Button -->
                <Link  :href="route('user.notify')"
                    :active="route().current('user.notify')"
                    :class="{
                        'navbar-link': true,
                        active: route().current('user.notify'),
                    }">
                    <span class="notification-text">Notifications</span>
             
                </Link>

                <!-- Notification Popup -->
                <NotificationPopup v-if="showPopup" @close="closePopup" />

                <Link   :href="route('user.profile')"
                    :active="route().current('user.profile')"
                    :class="{
                        'navbar-link': true,
                        active: route().current('user.profile'),
                    }" class="navbar-link"
                    >Profile</Link
                >

                <!-- Sign Out Button -->
                <ResponsiveNavLink
                    class="signout-button"
                    :href="route('logout')"
                    method="post"
                          as="button"
                >
                    Sign Out
                </ResponsiveNavLink>
            </div>
        </div>
    </nav>

    <main class="mx-auto px-4 py-16 gradient-bg">
    <slot  />
</main>

    <Footer />
</template>

<style scoped>
.gradient-bg {
    background: linear-gradient(0deg, #FFE9E9 0%, #EDFFBB 100%);
}

.navbar-link {
    position: relative;
}

.notification-text {
    position: relative;
    display: inline-block;
}

.notification-badge {
    position: absolute;
    top: 8px; 
    right: 6px; 
    width: 12px;
    height: 12px;
    background-color: red;
    border-radius: 50%;
    border: 2px solid white;
}

.navbar {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    border-bottom: 1px solid #ddd;
    height: 80px;
    padding: 0.1rem 0;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo-section div {
    margin-left: -10px;
}

.logo-image {
    height: 5.5rem;
    width: 5.5rem;
    margin-right: 10px;
    margin-top: -8px;
}

.navbar-title {
    font-size: 28px;
    font-weight: bold;
    font-family: "Bruno Ace SC", sans-serif;
    margin: 0;
    margin-top: -5px;
}

.navbar-subtitle {
    font-family: "Abel", sans-serif;
    font-size: 0.875rem;
    color: black;
    margin-top: -8px;
}

.navbar-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.navbar-link {
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s;
}

.navbar-link.active {
    background-color: #d9d9d9;
    color: #000;
}

.signout-button {
    background-color: #d9d9d9;
    border: 1px solid #000;
    padding: 0.25rem 1rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s;
}

.signout-button:hover {
    background-color: #b0b0b0;
}
</style>
