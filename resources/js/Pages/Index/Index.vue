<template>
    <!-- Hello Test {{ counter }} -->
    <MainLayout>
        <div>Index</div>
        <Link href="/hello">Show page</Link>
        <div>
            The message is {{ message }}
        </div>
    </MainLayout>
</template>

<script setup>
    import {ref} from  'vue'
    import { Link } from '@inertiajs/vue3';
    import MainLayout  from '../../Layouts/MainLayout.vue'
    // const counter = ref(0)
    // //note: props are read only
    // // use objects instead of strings for validation
    defineProps({
        message: String
    })
    // setInterval(() => {
    //    counter.value++ 
    // }, 1000);
</script>