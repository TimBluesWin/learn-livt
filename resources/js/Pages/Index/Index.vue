<template>
  <!-- Hello Test {{ counter }} -->
  <div>Index</div>
  <Link href="/hello">Show page</Link>
  <div>
    The message is {{ message }}
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
// const counter = ref(0)
// //note: props are read only
// // use objects instead of strings for validation
defineProps({
  message: String,
})
// setInterval(() => {
//    counter.value++ 
// }, 1000);
</script>