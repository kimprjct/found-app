<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from "vue";
import InputError from "@/Components/InputError.vue";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/vue3";

const isAddUser = ref(false);
const dialogVisible = ref(false);
const editUser = ref(null); // track current doc


// add edit form
const form = useForm({
 
  userId: "",
  name: "",
  department: "",
  email: "",
  contactNumber: "",
  password: "",

});

const openAddUser = () => {
    isAddUser.value = true;
    dialogVisible.value = true;
    form.reset();
};



// Open modal for editing
const openEditUser = (user) => {
    isAddUser.value = false;
    dialogVisible.value = true;
    editUser.value = user;

    // Pre-fill form
    form.userId = user.userId;
    form.name = user.name;
    form.department = user.department;
    form.email = user.email;
    form.contactNumber = user.contactNumber;
    form.password = user.password;
 
};

const submit = () => {
    if (isAddUser.value) {
        // Handle add user
        form.post(route("user.store"), {
            onSuccess: () => {
                closeModal();
                Swal.fire({
                    title: "Success!",
                    text: "User created.",
                    icon: "success",
                    toast: true,
                    position: "bottom-center",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: "#d6f0ff", // Light blue background
                    color: "#000", // Text color
                });
            },
        });
    } else {
        // Handle edit user
        form.patch(route("user.update", editUser.value.id), {
            onSuccess: () => {
                closeModal();
                Swal.fire({
                    title: "Success!",
                    text: "User updated.",
                    icon: "success",
                    toast: true,
                    position: "bottom-center",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: "#d6f0ff", // Light blue background
                    color: "#000", // Text color
                });
            },
        });
    }
};

const closeModal = () => {
    dialogVisible.value = false;
    form.reset();
    editUser.value = null;
};


const deleteUser = (user) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
 
            form.delete(route("user.destroy", user.id), {
                onSuccess: () => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "User  has been deleted.",
                        icon: "success",
                        toast: true,
                        position: "bottom-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                },
            });
        }
    });
};



</script>

<template>
    <Head title="Admin User" />

    <AdminLayout>
        <!-- User Content -->
        <div class="User-content">
            <h2>User</h2>
            <div class="table-container">
                <!-- Controls Section: Add User Button and Search Bar -->
                <div class="controls-container">
                    <div class="search-bar">
                        <input
                            type="text"
                            placeholder="Search users..."
                            class="search-input"
                        />
                        <button class="search-btn">Search</button>
                    </div>
                    <button class="add-user-btn"        @click="openAddUser">Add User</button>
                </div>
                <table class="lost-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                    
                            <th>Actions</th>
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
                                <button class="view-btn">View</button>
                                <button class="edit-btn">Edit</button>
                                <button class="delete-btn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>

    <el-dialog
        v-model="dialogVisible"
        :title="isAddUser ? 'Add User' : 'Edit User'"
        width="600"
        :before-close="handleClose"
    >

        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="userId">User ID</label>
            <input type="text" id="userId" v-model="form.userId"  />
            <InputError class="mt-1" :message="form.errors.userId" />
          </div>

          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name"  />
            <InputError class="mt-1" :message="form.errors.name" />
          </div>

          <div class="form-group">
            <label for="department">Department</label>
            <input type="text" id="department" v-model="form.department"  />
            <InputError class="mt-1" :message="form.errors.department" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email"  />
            <InputError class="mt-1" :message="form.errors.email" />
          </div>
          <div class="form-group">
            <label for="contactNumber">Phone Number:</label>
            <input type="text" id="contactNumber" v-model="form.contactNumber"  />
            <InputError class="mt-1" :message="form.errors.contactNumber" />
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="form.password"  />
            <InputError class="mt-1" :message="form.errors.password" />
          </div>
      
   
          <div class="form-actions">
            <button type="submit" class="submit-btn"   :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing">Submit</button>
            <button type="reset" class="reset-btn" @click="closeModal">close</button>
          </div>
        </form>


    </el-dialog>
</template>

<style scoped>
.controls-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}


.search-bar {
    display: flex;
    align-items: center;
}

.search-input {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    outline: none;
    width: 200px;
}

.search-btn {
    padding: 8px 12px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-btn:hover {
    background-color: #0056b3;
}

.add-user-btn {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-user-btn:hover {
    background-color: #45a049;
}

.User-container {
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
    background-color: #05a1ac;
    color: white;
    margin-right: 5px;
}


.edit-btn {
    background-color: #4d05ac;
    color: white;
    margin-right: 5px;
}

.delete-btn {
    background-color: #bd0d1c;
    color: white;
}

button:hover {
    opacity: 0.9;
}


@import url("https://fonts.googleapis.com/css2?family=Abel&family=Bruno+Ace+SC&family=Inter:wght@400;500;600&display=swap");
  
  .report-section {
    padding: 20px;
  }
  
  .report-section h2 {
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
    background: linear-gradient(90deg, #AE0000, #13F000);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .report-form {
    width: 100%;
    max-width: 700px;
    height: 750px;
    margin: 0 auto;
    background: rgba(255, 254, 254, 0.40);
    padding: 20px;
    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid black;
  }
  
  .form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    gap: 10px;
  }
  
  .form-group label {
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
    width: 200px;
    margin-top: 25px;
  }
  
  .form-group input,
  .form-group textarea {
    font-size: 14px;
    width: 400px;
    padding: 8px;
    border-radius: 8px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    border: none;
    margin-top: 25px;
  }
  
  .form-group textarea {
    resize: vertical;
  }
  
  .form-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .checkbox-group {
    margin-left: 40px;
    display: flex;
    align-items: center;
    margin-top: 45px;
    font-size: 12px;
  }
  
  .checkbox-group input[type="checkbox"] {
    width: 15px;
    height: 15px;
    margin-right: 15px;
  }
  
  .submit-btn, .reset-btn {
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .submit-btn {
    background-color: #2C2C2C;
    color: #fff;
    border: none;
    margin-left: 158px;
    margin-top: 25px;
    height: 40px;
  }
  
  .reset-btn {
    background-color: #D9D9D9;
    border: 1px solid black;
    margin-left: 100px;
    margin-top: 25px;
    height: 40px;
  }
</style>
