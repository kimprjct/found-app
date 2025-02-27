<template>
    <header class="header">
        <div class="header-logo"></div>
        <img src="/assets/snsulogo.png" alt="Logo" class="logo-image" />
        <div class="header-title">
            <h1 class="logo-content">FoundU</h1>
            <p class="logo-content-2">Discover. Connect. Reclaim.</p>
        </div>
        <div class="header-controls">
            <!-- Notification Bell Icon with Red Badge -->
            <button class="notification-icon" @click="toggleNotifications">
                &#128276;
                <span v-if="notificationCount > 0" class="notification-badge">{{
                    notificationCount
                }}</span>
            </button>
            <div class="header-controls">
            <!-- Admin Dropdown -->
            <Dropdown align="right" width="48" >
                <template #trigger>
                    <span class="inline-flex rounded-md">
                        <button
                            type="button"
                            class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                        >
                            {{ $page.props.auth.user.name }}

                            <svg
                                class="-me-0.5 ms-2 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </span>
                </template>

                <template #content>
                    <DropdownLink :href="route('admin.profile')">
                        Profile
                    </DropdownLink>
                    <DropdownLink
                        :href="route('logout')"
                        method="post"
                        as="button"
                    >
                        Log Out
                    </DropdownLink>
                </template>
            </Dropdown>
            </div>
        </div>

        <!-- Notification Popup -->
        <div class="notifications-popup" v-if="notificationsActive">
            <div class="notifications-header">
                <h3>Notifications</h3>
            </div>
            <ul class="notification-list">
                <li v-for="(notification, index) in notifications" :key="index">
                    <span>{{ index + 1 }}.</span> {{ notification.message
                    }}<br />
                    <span>Date: {{ notification.date }}</span
                    ><br />
                    <router-link :to="notification.link" class="review-btn"
                        >Review</router-link
                    >
                </li>
            </ul>
            <router-link to="/home" class="view-all"
                >View All Notifications</router-link
            >
        </div>
    </header>
</template>

<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
</script>

<style scoped>
.header {
    width: 100%;
    height: 100px;
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 4px 2px -2px gray;
    margin-bottom: 1px;
    position: sticky;
}

.content-wrapper {
    display: flex;
    width: 100%;
}

.header-controls {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
}

.header-title {
    display: flex;
    flex-direction: column;
    margin-left: 0;
}

.logo-image {
    width: 85px;
    height: 85px;
}

.logo-content {
    font-family: "Bruno Ace SC", sans-serif;
    font-size: 24px;
    font-weight: bold;
}

.logo-content-2 {
    font-family: "Abel", sans-serif;
    font-size: 16px;
    font-weight: normal;
}

.notification-icon {
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    position: relative; /* Ensure badge is positioned relative to the bell */
}

.notification-badge {
    width: 20px; /* Increase the size of the badge */
    height: 20px;
    background-color: red;
    color: rgb(245, 245, 245);
    border-radius: 50%;
    position: absolute;
    top: -2px; /* Bring the badge closer to the top of the bell */
    right: -2px; /* Bring the badge closer to the right of the bell */
    font-size: 12px; /* Adjust font size to fit within the badge */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #eb0707; /* Optional: add border to make it stand out more */
}

.admin-dropdown {
    padding: 8px 10px;
    font-size: 16px;
    border-radius: 7px;
    background-color: white;
    border: 1px solid #ccc;
}

.notification-icon:hover {
    color: #007bff;
}

.admin-dropdown:hover {
    background-color: #c0c0c0;
}

/* Notification Popup Styling */
.notifications-popup {
    position: absolute;
    top: 100px;
    right: 20px;
    width: 300px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 15px;
    font-style: arial;
    font-weight: 500;
}

.notifications-header {
    padding: 10px;
    color: rgb(13, 13, 13);
    font-weight: bold;
    font-size: 20px;
}

.notification-list {
    list-style: none;
    padding: 0;
}

.notification-list li {
    padding: 10px;
    border-bottom: 1px solid #fcfcfc;
}

.review-btn {
    display: inline-block;
    padding: 8px 16px; /* Adds padding to make it look like a button */
    background-color: #ef7008; /* Sets the background color to match the original text color */
    color: rgb(18, 18, 18); /* Text color inside the button */
    text-decoration: none; /* Remove underline from the link */
    border-radius: 5px; /* Rounds the corners of the button */
    font-size: 14px; /* Adjust the font size */
    text-align: center; /* Centers the text inside the button */
    cursor: pointer; /* Shows a pointer cursor on hover */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Adds transition effects */
    font-weight: 500;
}
.view-all {
    display: block;
    padding: 10px;
    text-align: center;
    color: rgb(10, 113, 209);
    text-decoration: underline;
    border-radius: 5px;
}
</style>
