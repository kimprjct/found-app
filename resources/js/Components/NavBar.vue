<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo-section">
        <img src="/assets/snsulogo.png" alt="SNSU Logo" class="logo-image" />
        <div>
          <h1 class="navbar-title">FoundU</h1>
          <p class="navbar-subtitle">Discover.Connect.Reclaim</p>
        </div>
      </div>

      <div class="navbar-links">
        <router-link to="/" class="navbar-link" >Home</router-link>
        <router-link to="/lost" class="navbar-link" >Lost</router-link>
        <router-link to="/found" class="navbar-link" >Found</router-link>

        <!-- Notification Button -->
        <button class="navbar-link" @click="togglePopup" >
          <span class="notification-text">Notifications</span>
          <span v-if="hasUnreadNotifications" class="notification-badge"></span>
        </button>

        <!-- Notification Popup -->
        <NotificationPopup v-if="showPopup" @close="closePopup" />

        <router-link to="/profile" class="navbar-link">Profile</router-link>

        <!-- Sign Out Button -->
        <button class="signout-button" >Sign Out</button>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style>
.navbar-link {
  position: relative;
}

.notification-text {
  position: relative;
  display: inline-block;
}

.notification-badge {
  position: absolute;
  top: 8px; /* Adjust as needed to align vertically */
  right: 6px; /* Adjust as needed to align horizontally with the "s" */
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;
  border: 2px solid white;
}


.navbar {
  background: rgba(255, 255, 255, 0.50);
  backdrop-filter: blur(2px);
  border-bottom: 1px solid #ddd;
  height: 80px;
  padding: 0.1rem 0;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
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
  font-family: 'Abel', sans-serif;
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
  background-color: #D9D9D9;
  color: #000;
}

.signout-button {
  background-color: #D9D9D9;
  border: 1px solid #000;
  padding: 0.25rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
}

.signout-button:hover {
  background-color: #B0B0B0;
}
</style>
