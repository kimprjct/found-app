<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ref, onMounted, onBeforeUnmount, watch, defineProps, computed } from "vue";
import InputError from "@/Components/InputError.vue";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    losts: Array,

});



const handlePrint = (lost) => {
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Lost Item</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                h2 {
                    text-align: center;
                }
                .item-details {
                    margin: 20px 0;
                }
                .item-details img {
                    max-width: 300px;
                    display: block;
                    margin: 20px auto;
                }
                .details-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                .details-table th, .details-table td {
                    border: 1px solid #ccc;
                    padding: 10px;
                    text-align: left;
                }
                .details-table th {
                    background-color: #f4f4f4;
                }
            </style>
        </head>
        <body>
            <h2>Lost Item Details</h2>
            <div class="item-details">
                <img src="/lostImage/${lost.image}" alt="Lost Item">
                <table class="details-table">
                    <tr>
                        <th>Item ID</th>
                        <td>${lost.id}</td>
                    </tr>
                    <tr>
                        <th>Item Name</th>
                        <td>${lost.name}</td>
                    </tr>
                    <tr>
                        <th>Reported Date</th>
                        <td>${lost.dateLost}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${lost.status}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>${lost.landMark}</td>
                    </tr>
                    <tr>
                        <th>Lost by</th>
                        <td>${lost.user_name}</td>
                    </tr>
                </table>
            </div>
            <button onclick="window.print()">Print</button>
        </body>
        </html>
    `);
    printWindow.document.close();
};
</script>

<template>
    <Head title="Admin Lost" />

    <AdminLayout>
        <!-- Lost Content -->
        <div class="Lost-content">
            <h2>Lost</h2>
            <div class="table-container">
                <table class="lost-table">
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Reported Date</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Lost by</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr       v-for="lost in losts"
                        :key="lost.id">
                            <td>{{ lost.id }}</td>
                            <td>{{ lost.name }}</td>
                            <td>{{ lost.dateLost }}</td>
                            <td>{{ lost.status }}</td>
                            <td>{{ lost.landMark }}</td>
                            <td>{{ lost.user_name }}</td>
                            <td>   <img
                    :src="'/lostImage/' + lost.image"
                    alt="Lost Item"
                    class="lost-item-image"
                /></td>
                <td>
    <button class="print-btn" @click="handlePrint(lost)">Print</button>
</td>

                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>
.print-btn {
    background-color: #ff9800;
    color: white;
}

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
    background-color: #2196f3;
    color: white;
}

button:hover {
    opacity: 0.9;
}
</style>