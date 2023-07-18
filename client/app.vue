<script setup lang="ts">
import {ref} from 'vue';
const runFunc = () => {
  return '하이';
};

const test = ref(runFunc());
</script>
<template>
  <nuxt-layout>
    <div v-text="test">
    </div>
  </nuxt-layout>
</template>