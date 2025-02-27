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

const props = defineProps({
    lost: Object,
});


const form = useForm({
    image: null,
    dateFound: "",
    location: "",
    itemDescription: "",
    certify: false, // Checkbox default

});


const submit = (lost) => {

        form.post(route("foundit.store", lost.id), {
            onSuccess: () => {
                Swal.fire({
                    title: "THANK YOU!",
                    text: "Form has been successfully submitted!",
                    icon: "success",
                });
            },
        });
    
};

</script>

<template>
    <Head title="Student Found It" />

    <UserLayout>

        <section class="report-section">
            <h2>Found Item Verification Form   </h2>
            <form class="report-form"  @submit.prevent="submit(props.lost)">
             
                <div class="form-group">
                    <label for="date-found">Date Found:</label>
                    <input
                        type="date"
                        id="date-found"
                        v-model="form.dateFound"
                        
                    />

                    <InputError
                        class="mt-1"
                        :message="form.errors.dateFound"
                    />
                </div>
                <div class="form-group">
                    <label for="location">Location or Landmark:</label>
                    <input
                        type="text"
                        id="location"
                        v-model="form.location"
                        
                    />
                </div>
                <div class="form-group">
                    <label for="item-description"
                        >Description of the Found Item:</label
                    >
                    <textarea
                        id="item-description"
                        v-model="form.itemDescription"
                        rows="4"
                        
                        placeholder="Write a detailed description of the item..."
                    ></textarea>

                    <InputError
                        class="mt-1"
                        :message="form.errors.itemDescription"
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

                    <InputError
                        class="mt-1"
                        :message="form.errors.image"
                    />
                </div>
                <div class="checkbox-group">
                    <input
                        type="checkbox"
                        id="certify"
                        v-model="form.certify"
                    />
                    <label for="certify"
                        >I certify that I found this item and the information
                        provided is accurate and truthful.</label
                    >
                </div>
                <div class="form-actions">
                    <button type="submit" class="submit-btn">Submit</button>
                    <button type="reset" @click="resetForm" class="reset-btn">
                        Reset
                    </button>
                </div>
            </form>
        </section>
    </UserLayout>
</template>

<style scoped>
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
    background: linear-gradient(90deg, #ae0000, #13f000);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.report-form {
    width: 100%;
    max-width: 700px;
    height: 750px;
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
    background: #d9d9d9;
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

.submit-btn,
.reset-btn {
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}

.submit-btn {
    background-color: #2c2c2c;
    color: #fff;
    border: none;
    margin-left: 158px;
    margin-top: 25px;
    height: 40px;
}

.reset-btn {
    background-color: #d9d9d9;
    border: 1px solid black;
    margin-left: 100px;
    margin-top: 25px;
    height: 40px;
}
</style>
