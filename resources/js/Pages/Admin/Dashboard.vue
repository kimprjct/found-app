<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head } from "@inertiajs/vue3";


defineProps({

lostCounts: {
    type: Number,
    required: true
},

foundCounts: {
    type: Number,
    required: true
},

pendingCounts: {
    type: Number,
    required: true
},

approvedCounts: {
    type: Number,
    required: true
},

rejectedCounts: {
    type: Number,
    required: true
},

});

</script>

<template>
    <Head title="Admin Dashboard" />

    <AdminLayout>
        <!-- Dashboard Content -->
        <div class="dashboard-content">
            <h2>DASHBOARD</h2>

            <!-- Stats Section -->
            <div class="stats">
                <div class="stat-box red">
                    <router-link to="/manage-found">
                        <h3>Total Number of Found Items</h3>
                        <p>{{ foundCounts }}</p>
                    </router-link>
                </div>
                <div class="stat-box yellow">
                    <router-link to="/home">
                        <h3>Pending Verifications</h3>
                        <p>{{ pendingCounts }}</p>
                    </router-link>
                </div>
                <div class="stat-box purple">
                    <router-link to="/manage-lost">
                        <h3>Total Number of Lost Items</h3>
                        <p>{{ lostCounts }}</p>
                    </router-link>
                </div>
            </div>

            <!-- Stats Row Section -->
            <div class="stats-row">
                <div class="stat-box green">
                    <router-link to="/claim-history">
                        <h3>Items Claimed</h3>
                        <p>0</p>
                    </router-link>
                </div>
                <div class="stat-box blue">
                    <router-link to="/claim-request">
                        <h3>Unclaimed Items</h3>
                        <p>0</p>
                    </router-link>
                </div>
            </div>

            <!-- Recent Activities Section -->
            <div class="recent-activities">
                <h2>Recent Activities</h2>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Activity Description</th>
                            <th>Date/Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i class="fas fa-bell"></i>
                                <!-- Example FontAwesome icon -->
                            </td>
                            <td>Item returned to owner</td>
                            <td>2024-12-01 10:45 AM</td>
                            <td>
                                <router-link class="view-btn">View</router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i class="fas fa-clipboard-check"></i>
                            </td>
                            <td>Verification completed</td>
                            <td>2024-12-02 2:30 PM</td>
                            <td>
                                <router-link class="view-btn">View</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Notifications Popup -->
            <div
                class="notifications-popup"
                :class="{ active: notificationsActive }"
            >
                <div class="notifications-header">
                    <h3>Notifications</h3>
                </div>
                <ul class="notification-list">
                    <li
                        v-for="(notification, index) in notifications"
                        :key="index"
                    >
                        <span>{{ index + 1 }}.</span>
                        {{ notification.message }}<br />
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
        </div>
    </AdminLayout>
</template>


<style scoped>
.dashboard-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1500px;
}

.content-wrapper {
    display: flex;
    width: 100%;
}

.main-content {
    flex: 1;
    padding: 20px;
    background-color: #d9d9d9;
}

.dashboard-content {
    padding: 20px;
    background-color: #d9d9d9;
}

.stats,
.stats-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
}

.stat-box {
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.stat-box:hover {
    transform: scale(1.05);
}

.red {
    background-color: #e50909;
}
.yellow {
    background-color: #f1c40f;
}
.purple {
    background-color: #8e44ad;
}
.green {
    background-color: #4caf50;
}
.blue {
    background-color: #2196f3;
}

/* Recent Activities Styling */
.recent-activities {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.recent-activities h2 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #333;
    text-align: center;
}

/* Styled Table */
.styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
    font-size: 16px;
    text-align: left;
}

.styled-table thead tr {
    background-color: #3498db;
    color: #fff;
    text-align: center;
    font-weight: bold;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
    border: 1px solid #ddd;
}

.styled-table tbody tr {
    transition: all 0.3s ease-in-out;
}

.styled-table tbody tr:hover {
    background-color: #f1f1f1;
}

/* Center table content */
.styled-table td {
    text-align: center;
    vertical-align: middle;
}

/* Style for View Button */
.view-btn {
    color: #fff;
    background-color: #3498db;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out;
}

.view-btn:hover {
    background-color: #217ab7;
}

/* Icon Styling */
.styled-table td i {
    font-size: 20px;
    color: #3498db;
}


.notification-btn {
    position: relative;
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.bell-icon {
    font-size: 30px;
}

.notification-count {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 3px 8px;
    font-size: 12px;
}

.notifications-popup {
    position: absolute;
    right: 20px;
    top: 70px;
    width: 300px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 1000;
}

.notifications-popup.active {
    display: block;
}

.notifications-header {
    padding: 10px;
    background-color: #3498db;
    color: white;
}

.notification-list {
    list-style: none;
    padding: 0;
}

.notification-list li {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.review-btn {
    color: #3498db;
    text-decoration: none;
}

.view-all {
    display: block;
    padding: 10px;
    text-align: center;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

/* Style for View button */
.view-btn {
    color: rgb(15, 15, 15);
    background-color: #3498db;
    padding: 8px 12px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.view-btn:hover {
    background-color: #2c80b4; /* Darker shade for hover effect */
}
</style>
