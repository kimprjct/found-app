<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ref, onMounted, onBeforeUnmount, watch, defineProps, computed } from "vue";
import InputError from "@/Components/InputError.vue";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/vue3";


const props = defineProps({
    foundits: Array,
 
});

// Define a form instance to handle data submission
const form = useForm({});

// Approve Function
const handleApprove = (foundit) => {
    Swal.fire({
        title: "Approve Claim?",
        text: `Are you sure you want to approve the claim for "${foundit.name}"?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Approve",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#4caf50",
        cancelButtonColor: "#d33",
    }).then((result) => {
        if (result.isConfirmed) {
            form.put(route("foundit.approve", foundit.id), {
                onSuccess: () => {
                    Swal.fire("Approved!", "The claim has been approved.", "success");
                },
                onError: () => {
                    Swal.fire("Error!", "Failed to approve the claim.", "error");
                },
            });
        }
    });
};

// Reject Function
const handleReject = (foundit) => {
    Swal.fire({
        title: "Reject Claim?",
        text: `Are you sure you want to reject the claim for "${foundit.name}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Reject",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#f44336",
        cancelButtonColor: "#3085d6",
    }).then((result) => {
        if (result.isConfirmed) {
            form.put(route("foundit.reject", foundit.id), {
                onSuccess: () => {
                    Swal.fire("Rejected!", "The claim has been rejected.", "success");
                },
                onError: () => {
                    Swal.fire("Error!", "Failed to reject the claim.", "error");
                },
            });
        }
    });
};
</script>

<template>
    <Head title="Admin Found" />

    <AdminLayout>
        <!-- Found Content -->
        <div class="Found-content">
            <h2>Found Request</h2>
                    
            <div class="table-container">
                <table class="lost-table">
                    <thead>
                        <tr>
                    
                            <th>Item Name</th>
                            <th>Date Found</th>
                            <th>Found by</th>
                            <th>Location Found</th>
                            <th> Image</th>
                            <th> Verification status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
      
                      
                            <tr   v-for="foundit in foundits"
                        :key="foundit.id">
                         
                            <td>{{ foundit.name }}</td>
                            <td>{{ foundit.dateFound }}</td>
                            <td>{{ foundit.userName }}</td>
                            <td>{{ foundit.location }}</td>
                            <td>   <img
                    :src="'/founditImage/' + foundit.image"
                    alt="Lost Item"
                    class="lost-item-image"></td>
                            <td>{{ foundit.status }}</td>
                        
                            <td>
                                <button class="view-btn" @click="handleApprove(foundit)">
                                    Approve
                                </button>
                                <button class="edit-btn" @click="handleReject(foundit)">
                                    Reject
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
      
        </div>
    </AdminLayout>
</template>


<style scoped>
.Found-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1500px;
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
    background-color: #2196f3;
    color: white;
}

button:hover {
    opacity: 0.9;
}

</style>
