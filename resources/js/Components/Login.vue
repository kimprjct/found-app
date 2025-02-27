<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import "@fortawesome/fontawesome-free/css/all.css";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Log in" />

    <form @submit.prevent="submit" class="form">
        <div>
            <input
                placeholder="Email Address"
                id="email"
                type="email"
                class="input-field"
                v-model="form.email"
                
                autofocus
                autocomplete="username"
            />
            <InputError class="error-message" :message="form.errors.email" />
        </div>

        <div>
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

   

        <div >
            <Link v-if="canResetPassword" :href="route('password.request')">
                Forgot your password?
            </Link>

            <button
                class="submit-btn"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                Log in
            </button>
        </div>
    </form>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Bruno+Ace+SC&family=Italianno&display=swap");

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

.background {
    background-image: url("/assets/snsuphoto.png");
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Logo Styles */
.logo-container {
    position: absolute;
    top: 1px;
    left: 20px;
    display: flex;
    align-items: center;
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

/* Main Title Styles */
.main-title {
    color: #fff;
    font-size: 38px;
    font-weight: 800;
    margin-top: 205px;
    margin-bottom: -40px;
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
