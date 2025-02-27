<script setup>
import InputError from "@/Components/InputError.vue";

import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
    userId: "",

    password: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <Head title="Register" />

    <div class="login-container">
      <!-- Background -->
      <div class="login-background"></div>
  
      <!-- Logo Section -->
      <div class="logo-container">
        <router-link to="/home">
          <div class="logo"></div>
        </router-link>
        <div class="logo-text">
          <h1 class="logo-title">FoundU</h1>
          <p class="tagline">DISCOVER. CONNECT. RECLAIM.</p>
        </div>
      </div>
  
      <!-- Main Title -->
      <h2 class="main-title">SNSU LOST AND FOUND SYSTEM</h2>
  
      <!-- Button Section -->
      <div class="button-container">
        <div class="button slider"></div>
     
        <Link :href="route('register')" class="button register"><span>Users</span></Link>
        <Link :href="route('welcome')" class="button login "><span>Admin
</span></Link>
      </div>
  
      <!-- Notification Section (Optional) -->
      <div class="notification" v-if="isNotificationVisible">
        <div class="check-mark">
          <img src="/assets/checkicon.webp" alt="Check Icon" width="38" height="36" />
        </div>
        <span class="action-success">{{ notificationMessage }}</span>
      </div>
  
      <!-- Sign-in Form (Login Component) -->
      <div class="signin-container">
   


        <form @submit.prevent="submit" class="form">
        <div>
            <input
                placeholder="ID Number"
                id="userId"
                type="userId"
                class="input-field"
                v-model="form.userId"
                
                autofocus
                autocomplete="username"
            />
            <InputError class="error-message" :message="form.errors.userId" />
        </div>

        <div >
            <input
                placeholder="Password"
                id="password"
                type="password"
                v-model="form.password"
                class="input-field"
                
                autocomplete="current-password"
            />
            <InputError class="error-message" :message="form.errors.password" />
        </div>

    

        <div>
      

            <button
                class="submit-btn"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                Log in
            </button>
        </div>
    </form>
      </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Bruno+Ace+SC&family=Italianno&display=swap");

.login-container {
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.login-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url("/assets/snsuphoto.png") center / cover no-repeat;
    z-index: -1;
}

.logo-container {
    position: absolute;
    top: 1px;
    left: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.logo {
    width: 110px;
    height: 121px;
    background: url("/assets/snsulogo.png") no-repeat center center;
    background-size: cover;
    margin-top: 1px;
}

.logo-text {
    margin-left: 10px;
}

.logo-title {
    color: #ffe9e9;
    font-family: "Bruno Ace SC", sans-serif;
    font-size: 27px;
}

.tagline {
    color: #ffe9e9;
    font-family: "Abel", sans-serif;
    font-size: 11px;
}

.main-title {
    color: #fff;
    font-size: 38px;
    font-weight: 800;
    margin-top: 60px;
    margin-left: 5px;
    text-align: center;
    padding-top: 30px;
}

.button-container {
    position: relative;
    width: 300px;
    height: 43px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(217, 217, 217, 0.16);
    border: 2px solid #eff32b;
    border-radius: 50px;
    overflow: hidden;
}

.button.slider {
    position: absolute;
    width: 125px;
    height: 100%;
    background-color: #2fa725;
    border-radius: 50px;
    transition: all 0.3s ease;
    z-index: 1;
}

.button.login,
.button.register {
    width: 125px;
    height: 100%;
    background: transparent;
    color: #fff;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    cursor: pointer;
    text-decoration: none;
}

.button.login span,
.button.register span {
    color: white;
    font-size: 24px;
    z-index: 10;
    position: relative;
}

.signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    border: 2px solid #a4a4a4;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    width: 430px;
    height: 300px;
    margin-top: 50px;
    margin-bottom: 70px;
    margin-left: 34%;
}

.signin-content {
    text-align: center;
    width: 100%;
}

.signin-title {
    color: #176b10;
    font-family: "Bruno Ace SC", sans-serif;
    font-size: 40px;
    margin-bottom: -15px;
}

.signin-subtitle {
    color: #000;
    font-family: "Italianno", cursive;
    font-size: 30px;
    margin-bottom: 20px;
}

/* Center the Google Sign-In Button */
.google-signin-button {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.signin-info {
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 5px;
}

.signin-support {
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 14px;
}

.support-link {
    color: #2622f0;
    text-decoration: none;
}



/* Container Styles */
.register-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    position: relative;
}

/* Form Styling */
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.input-field {
    width: 100%;
    height: 38px;
    background: #ffffff;
    border-radius: 50px;
    padding-left: 30px;
    text-align: left;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    border: none;
    outline: none;
}

.input-field:focus {
    border-color: #31c024;
}

/* Button Styling */
.submit-btn {
    width: 100%;
    height: 43px;
    background-color: #2fa725;
    border: 1px solid #31c024;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-out;
}

.submit-btn:disabled {
    opacity: 0.5;
}

.submit-btn:hover {
    background-color: #31c024;
    animation: dissolve 300ms ease-out;
}

@keyframes dissolve {
    from {
        opacity: 1;
    }
    to {
        opacity: 0.8;
    }
}

/* Responsive Styles */
@media (max-width: 768px) {
    .main-title {
        font-size: 24px;
    }

    .submit-btn {
        font-size: 18px;
    }

    .logo {
        width: 90px;
        height: 80px;
    }

    .logo-title {
        font-size: 25px;
    }

    .tagline {
        font-size: 7px;
    }
}
</style>
