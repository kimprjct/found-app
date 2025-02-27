<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import {
    ref,
    onMounted,
    onBeforeUnmount,
    watch,
    defineProps,
    computed,
} from "vue";
import InputError from "@/Components/InputError.vue";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/vue3";

// Define props passed from the controller
const props = defineProps({
    losts: Array,
});

const isAddLost = ref(false);
const dialogVisible = ref(false);
const editLost = ref(null);

const form = useForm({
    image: null,
    name: "",
    landMark: "",
    contact: "",
    dateLost: "",
    timeLost: "",
    description: "",

});

const openAddLost = () => {
    isAddLost.value = true;
    dialogVisible.value = true;
    form.reset();
};

// Open modal for editing
const openEditLost = (lost) => {
    isAddLost.value = false;
    dialogVisible.value = true;
    editLost.value = lost;

    // Pre-fill form
    form.image = null;
    form.name = lost.name;
    form.landMark = lost.landMark;
    form.contact = lost.contact;
    form.dateLost = lost.dateLost;
    form.timeLost = lost.timeLost;
    form.description = lost.description;
};

const submit = () => {
    if (isAddLost.value) {
        // Handle add user
        form.post(route("lost.store"), {
            onSuccess: () => {
                closeModal();
                Swal.fire({
                    title: "THANK YOU!",
                    text: "Form has been successfully submitted!",
                    icon: "success",
                });
            },
        });
    } 
};

const closeModal = () => {
    dialogVisible.value = false;
    form.reset();
    editLost.value = null;
};

</script>

<template>
  

    <el-dialog
        v-model="dialogVisible"
        :title="isAddLost ? '' : 'Edit Lost'"
        width="600"
        :before-close="handleClose"
    >
        <section class="report-section">
            <h2>Report Lost Item</h2>
            <form class="report-form" @submit.prevent="submit">
                <div class="form-group">
                    <label for="name">Item Name:</label>
                    <input type="text" id="name" v-model="form.name" />
                    <InputError class="mt-1" :message="form.errors.name" />
                </div>
                <div class="form-group">
                    <label for="landmark">Landmark:</label>
                    <input type="text" v-model="form.landMark" />
                    <InputError class="mt-1" :message="form.errors.landMark" />
                </div>
                <div class="form-group">
                    <label for="contact-details">Contact Details:</label>
                    <input type="text" v-model="form.contact" />
                    <InputError class="mt-1" :message="form.errors.contact" />
                </div>
                <div class="form-group">
                    <label for="date-lost">Date lost:</label>
                    <input type="date" v-model="form.dateLost" />
                    <InputError class="mt-1" :message="form.errors.dateLost" />
                </div>
                <div class="form-group">
                    <label for="time-lost">Time lost:</label>
                    <input type="time" v-model="form.timeLost" />
                    <InputError class="mt-1" :message="form.errors.timeLost" />
                </div>

                <div class="form-group">
                    <label for="item-description">Item Description:</label>
                    <textarea
                        v-model="form.description"
                        rows="4"
                        style="width: 400px; height: 100px"
                        placeholder="Write a detailed description of the item..."
                    ></textarea>
                    <InputError
                        class="mt-1"
                        :message="form.errors.description"
                    />
                </div>
                <div class="form-group">
                    <label for="upload-photo">Upload Photo:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        @input="form.image = $event.target.files[0]"
                    />
                    <InputError class="mt-1" :message="form.errors.image" />
                </div>
                <div class="form-actions">
                    <button type="submit" class="submit-btn">Submit</button>
                    <button type="reset" class="reset-btn" @click="closeModal">
                        Close
                    </button>
                </div>
            </form>
        </section>
    </el-dialog>
    <Head title="Student Lost" />
    <UserLayout>
        <div class="lost-items-title">Lost Items</div>
        <div class="top-section">
            <div class="left-placeholder"></div>
            <div class="search-container">
                <input
                    type="text"
                    class="search-input"
                    placeholder="Item Name"
                />
                <button class="search-btn">
                    <i class="mr-4 fas fa-search"></i>
                </button>
            </div>
            <button class="report-button" @click="openAddLost">
                <span>Report</span>
                <i class="ml-4 fas fa-flag"></i>
            </button>
        </div>
        <div class="lost-items-grid">
            <div class="lost-item-column" v-for="lost in losts" :key="lost.id">
                <div class="reporter-info">
                    <div class="profile-circle">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="reporter-name">{{ lost.user_name }}</div>
                </div>
                <img
                    :src="'/lostImage/' + lost.image"
                    alt="Lost Item"
                    class="lost-item-image"
                />
                <div class="item-details">
                    <div class="lost-item-name">{{ lost.name }}</div>
                    <div class="lost-item-location">
                        {{ lost.landMark }}
                    </div>
                    <div class="lost-item-date">
                        {{ lost.dateLost }} | {{ lost.timeLost }}
                    </div>
                </div>
                <p class="lost-item-description">{{ lost.description }}</p>

                <div class="found-it-container">
                    <Link :href="route('user.foundit',{ lost: lost.id})"
                   
                        class="found-it-button"
                    >
                        Found It
                    </Link>
                </div>
            </div>
        </div>
    </UserLayout>
</template>

<style scoped>
.check-icon {
    width: 24px; /* Adjust the size of the check icon */
    height: 24px;
    margin-right: 10px; /* Space between the icon and the message */
}

.main-container {
    padding: 20px;
}

.top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.left-placeholder {
    flex: 1;
}

.search-container {
    flex: 1;
    border-radius: 28px;
    border: 1px solid transparent;
    background: linear-gradient(#fffdff, #eaffcd) padding-box,
        linear-gradient(to right, #11d300, #b90909) border-box;
    display: flex;
    align-items: center;
    height: 45px;
    width: 200px;
}

.search-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 8px 16px;
    font-size: 16px;
    background: transparent;
}

.search-btn {
    border: none;
    background: transparent;
    cursor: pointer;
}

.search-btn img {
    width: 40px;
    height: 40px;
}

.report-button {
    border-radius: var(--Radius-200, 8px);
    background: linear-gradient(
        90deg,
        rgba(153, 19, 19, 0.72) 0%,
        rgba(255, 31, 31, 0.72) 74.5%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 12px 10px;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 140px;
    margin-right: 140px;
    height: 65px;
}

.report-button img {
    width: 50px; /* Reduces the icon size */
    height: 50px; /* Adjusts height to match width */
    margin-left: 8px; /* Optional, adds spacing between the text and icon */
}

.report-button span {
    margin-left: 15px;
    font-size: 24px;
}

.lost-items-title {
    font-size: 45px;
    font-weight: 700; /* Bold weight */
    font-style: normal;
    font-family: "Inter", sans-serif;
    text-align: center;
    margin-bottom: 20px;
    background: linear-gradient(90deg, #ae0000, #13f000);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.lost-items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
    grid-gap: 50px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; /* Center the grid */
    padding: 10px; /* Optional padding for spacing */
    justify-content: center; /* Center items in the grid */
}

.lost-item-column {
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.59);
    text-align: center;
    max-height: 350px;
    display: flex; /* Flexbox for vertical alignment */
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start; /* Align items to the start */
    justify-content: space-between; /* Ensure space between content and button */
    height: 100%; /* Make sure the column takes full height */
    position: relative; /* Ensure the column's positioning context */
}

.reporter-info {
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Vertically center align items */
    margin-bottom: 10px; /* Space between reporter info and next element */
}

.profile-circle {
    border-radius: 50%;
    background-color: #65558f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 35px; /* Fixed width for the circle */
    height: 35px; /* Fixed height for the circle */
    margin-right: 10px; /* Space between circle and name */
}

.reporter-name {
    font-size: 1em;
    color: #65558f;
    font-weight: bold;
}

.lost-item-image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
}

.lost-item-name {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: left;
}

.lost-item-location,
.lost-item-date {
    font-size: 12px;
    margin-bottom: 5px;
    text-align: left;
}

.lost-item-description {
    font-size: 11px;
    color: #49454f;
    margin-bottom: 10px;
    width: 100%; /* Ensure it stays within the parent width */
    max-height: 60px; /* Set a maximum height for the description */
    overflow-y: auto; /* Add vertical scrolling when content overflows */
    overflow-wrap: break-word; /* Prevent word breaks that may make the text look awkward */
    text-align: left;
    padding-right: 5px; /* Optional: Adds padding for scrollbar space */
}

.found-it-container {
    display: flex;
    justify-content: flex-end;
    width: 100%; /* Ensure the container takes full width */
    margin-top: auto; /* Push the button to the bottom */
}

.found-it-button {
    font-size: 12px;
    padding: 8px;
    background-color: #85066f; /* Initial green background color */
    color: white;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease, width 0.3s ease;
    white-space: nowrap; /* Prevent text wrapping */
    text-align: center;
    width: auto; /* Auto width to accommodate content */
}

.found-it-button:hover {
    background-color: #007b02; /* Darker hover color */
}
/* Optional: Style for "Found Item Under Review" */
.found-item-under-review {
    background-color: #65558f; /* Purple background */
}

.lost-item-column {
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start; /* Align items to the start */
}

.lost-item-description {
    font-size: 11px;
    color: #49454f;
    margin-bottom: 10px;
    width: 100%; /* Ensure it stays within the parent width */
    width: 220px;
    overflow-wrap: break-word;
    margin-bottom: 10px;
    text-align: left;
}

.item-details {
    margin-bottom: 10px; /* Spacing between details */
}

.report-section {
    padding: 20px;
}

.report-section h2 {
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
    background: linear-gradient(90deg, #13f000, #ae0000);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.report-form {
    width: 100%;
    max-width: 650px;
    height: 700px;
    margin: 0 auto;
    background: rgba(255, 254, 254, 0.4);
    padding: 20px;
    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid black;
}

.form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.form-group label {
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    width: 250px;
    margin-top: 25px;
}

.form-group input {
    width: 400px;
    height: 38px;
    padding: 8px;
    border-radius: 8px;
    background: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    border: none;
    margin-top: 25px;
}

.form-group textarea {
    width: 400px;
    padding: 8px;
    border-radius: 8px;
    background: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    border: none;
    margin-top: 25px;
    resize: vertical;
}

.form-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.submit-btn,
.reset-btn {
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}

.submit-btn {
    background-color: #2c2c2c;
    color: #fff;
    border: none;
    margin-left: 158px;
    margin-top: 25px;
}

.reset-btn {
    background-color: #d9d9d9d9;
    border: black;
    margin-left: 100px;
    margin-top: 25px;
    height: 45px;
}
</style>
