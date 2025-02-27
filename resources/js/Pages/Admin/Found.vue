<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
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

const props = defineProps({
    founds: Array,
});


const handlePrint = (found) => {
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(`
        <html>
        <head>
            <title>Print found Item</title>
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
            <h2>found Item Details</h2>
            <div class="item-details">
                <img src="/foundImage/${found.image}" alt="found Item">
                <table class="details-table">
                    <tr>
                        <th>Item ID</th>
                        <td>${found.id}</td>
                    </tr>
                    <tr>
                        <th>Item Name</th>
                        <td>${found.name}</td>
                    </tr>
                    <tr>
                        <th>Reported Date</th>
                        <td>${found.datefound}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${found.status}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>${found.landMark}</td>
                    </tr>
                    <tr>
                        <th>found by</th>
                        <td>${found.user_name}</td>
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
    <Head title="Admin Found" />

    <AdminLayout>
        <!-- found Content -->
        <div class="Found-container">
            <h2>Found</h2>
            <div class="table-container">
                <table class="lost-table">
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Reported Date</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Found by</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="found in founds" :key="found.id">
                            <td>{{ found.id }}</td>
                            <td>{{ found.name }}</td>
                            <td>{{ found.dateFound }}</td>
                            <td>{{ found.status }}</td>
                            <td>{{ found.landMark }}</td>
                            <td>{{ found.user_name }}</td>
                            <td>
                                <img
                                    :src="'/foundImage/' + found.image"
                                    alt="Lost Item"
                                    class="lost-item-image"
                                />
                            </td>
                            <td>
    <button class="print-btn" @click="handlePrint(found)">Print</button>
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
