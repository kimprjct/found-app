<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ref, onMounted, onBeforeUnmount, watch, defineProps, computed } from "vue";
import InputError from "@/Components/InputError.vue";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/vue3";


const props = defineProps({
    foundits: Array,
    claimits: Array,
});


// Define InertiaJS form
const form = useForm({});

// Function to open delete confirmation modal
const confirmDelete = (foundit) => {
    Swal.fire({
        title: "Delete Confirmation",
        text: `Are you sure you want to delete the item "${foundit.name}"? This action cannot be undone.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete",
        cancelButtonText: "No, Cancel",
    }).then((result) => {
        if (result.isConfirmed) {
            deleteFoundit(foundit);
        }
    });
};

// Function to handle the delete request
const deleteFoundit = (foundit) => {
    form.delete(route("foundit.destroy", foundit.id), {
        preserveScroll: true,
        onStart: () => {
            Swal.fire({
                title: "Deleting...",
                text: `Please wait while the item "${foundit.name}" is being deleted.`,
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(),
            });
        },
        onSuccess: () => {
            Swal.fire({
                title: "Deleted!",
                text: `The item "${foundit.name}" has been successfully deleted.`,
                icon: "success",
            });
        },
        onError: () => {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while deleting. Please try again.",
                icon: "error",
            });
        },
    });
};










// Function to open delete confirmation modal
const claimDelete = (claimit) => {
    Swal.fire({
        title: "Delete Confirmation",
        text: `Are you sure you want to delete the item "${claimit.name}"? This action cannot be undone.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete",
        cancelButtonText: "No, Cancel",
    }).then((result) => {
        if (result.isConfirmed) {
            deleteClaimit(claimit);
        }
    });
};

// Function to handle the delete request
const deleteClaimit = (claimit) => {
    form.delete(route("claimit.destroy", claimit.id), {
        preserveScroll: true,
        onStart: () => {
            Swal.fire({
                title: "Deleting...",
                text: `Please wait while the item "${claimit.name}" is being deleted.`,
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading(),
            });
        },
        onSuccess: () => {
            Swal.fire({
                title: "Deleted!",
                text: `The item "${claimit.name}" has been successfully deleted.`,
                icon: "success",
            });
        },
        onError: () => {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while deleting. Please try again.",
                icon: "error",
            });
        },
    });
};
</script>

<template>
    <Head title="Student Notify" />

    <UserLayout>
        <div class="Found-container">
            <h2>You Found It!</h2>
            <div class="table-container">
                <table class="lost-table">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>userName</th>
                            <th>image</th>
                            <th>name</th>
                            <th>landMark</th>
        
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr    v-for="foundit in foundits"
                        :key="foundit.id">
                            <td>{{ foundit.userId }}</td>
                            <td>{{ foundit.userName }}</td>
                            <td>   <img
                    :src="'/founditImage/' + foundit.image"
                    alt="Lost Item"
                    class="lost-item-image"
                /></td>
                            <td>{{ foundit.name }}</td>
                            <td>{{ foundit.status }}</td>
                       
                     
                            <td>
                         
                                <button class="edit-btn" @click="confirmDelete(foundit)">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>




        <div class="Found-container">
            <h2>You Lost It!</h2>
            <div class="table-container">
                <table class="lost-table">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>userName</th>
                            <th>image</th>
                            <th>name</th>
                            <th>landMark</th>
        
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr    v-for="claimit in claimits"
                        :key="claimit.id">
                            <td>{{ claimit.userId }}</td>
                            <td>{{ claimit.userName }}</td>
                            <td>   <img
                    :src="'/claimitImage/' + claimit.image"
                    alt="Lost Item"
                    class="lost-item-image"
                /></td>
                            <td>{{ claimit.name }}</td>
                            <td>{{ claimit.status }}</td>
                       
                     
                            <td>
                         
                                <button class="edit-btn" @click="claimDelete(claimit)">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
 
    </UserLayout>
</template>
<style scoped>
.Lost-content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.table-container {
    overflow-x: auto;
    margin-top: 20px;
}

.lost-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.lost-table th,
.lost-table td {
    border: 1px solid #ccc;
    padding: 10px;
}

.lost-table th {
    background-color: #f4f4f4;
    font-weight: bold;
}

.lost-table tbody tr:hover {
    background-color: #f9f9f9;
}

button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.view-btn {
    background-color: #4caf50;
    color: white;
    margin-right: 5px;
}

.edit-btn {
    background-color: #f32172;
    color: white;
}

button:hover {
    opacity: 0.9;
}
</style>