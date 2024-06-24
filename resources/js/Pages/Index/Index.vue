<template>
    <!-- Hello Test {{ counter }} -->
    <div>Index</div>
    <Link href="/hello">Show page</Link>
</template>

<script setup>
    import {ref} from  'vue'
    import { Link } from '@inertiajs/vue3';
    const counter = ref(0)
    setInterval(() => {
       counter.value++ 
    }, 1000);
</script>