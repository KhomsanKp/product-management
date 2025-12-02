<template>
  <NuxtLayout>
    <NuxtPage />

    <v-snackbar v-model="store.snackbar.show" :color="store.snackbar.color" location="top right" timeout="3000">
      {{ store.snackbar.text }}
      <template v-slot:actions>
        <v-btn variant="text" @click="store.snackbar.show = false">ปิด</v-btn>
      </template>
    </v-snackbar>
  </NuxtLayout>
</template>

<script setup>
import { useMainStore } from '~/stores/mainStore'
const store = useMainStore()
</script>