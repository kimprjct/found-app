<script setup>
import { Head, Link } from '@inertiajs/vue3';
import HeroSection from '@/Components/HeroSection.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
  
});


</script>

<template>
    <Head title="Welcome" />

    <HeroSection />
    <div >
   
        <div
           
        >
            <div >
                <header
                 
                >
                   
                    <nav v-if="canLogin" >
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('student.dashboard')"
                          
                        >
                            Dashboard
                        </Link>

                        <template v-else>
                            <Link
                                :href="route('login')"
                              
                            >
                                Log in
                            </Link>

                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                            
                            >
                                Register
                            </Link>
                        </template>
                    </nav>
                </header>

                <main >
               
                </main>

                <footer
                    
                >
                   
                </footer>
            </div>
        </div>
    </div>
</template>
