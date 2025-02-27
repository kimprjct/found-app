<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
    <Head title="Admin History" />

    <AdminLayout>
        <!-- History Content -->
        <div class="History-content">
            <h2>History</h2>
                            
            <div class="table-container">
                <table class="lost-table">
                    <thead>
                        <tr>
                            <th>Claim ID</th>
                            <th>Item Name</th>
                            <th>Claimant</th>
                            <th>Claim Date</th>
                            <th>Claim Status</th>
                       
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                          
                            <td>
                                <button class="view-btn" @click="handleView(1)">view</button>
                                <button class="delete-btn" @click="handleEdit(1)">delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </AdminLayout>
</template>


<style scoped>
.History-container {
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

.delete-btn {
    background-color: #f0203c;
    color: white;
}

button:hover {
    opacity: 0.9;
}
</style>
