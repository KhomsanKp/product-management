<template>
    <v-container fluid class="fill-height bg-grey-lighten-3">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12 rounded-lg pa-4">
                    <div class="text-center mb-4 mt-4">
                        <v-avatar color="primary" size="64" class="mb-2">
                            <v-icon size="40">mdi-lock</v-icon>
                        </v-avatar>
                        <h2 class="text-h5 font-weight-bold">Admin Login</h2>
                        <p class="text-caption text-grey">เข้าสู่ระบบจัดการสต็อก</p>
                    </div>

                    <v-card-text>
                        <v-form @submit.prevent="handleLogin">
                            <v-text-field v-model="username" label="Username" prepend-inner-icon="mdi-account"
                                variant="outlined" density="comfortable"></v-text-field>

                            <v-text-field v-model="password" label="Password" prepend-inner-icon="mdi-lock"
                                variant="outlined" type="password" density="comfortable"></v-text-field>

                            <v-btn type="submit" block color="primary" size="large" class="mt-4" :loading="loading">
                                เข้าสู่ระบบ
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>

                <div class="text-center mt-4 text-caption text-grey">
                    Demo Account: admin / 1234
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
definePageMeta({
    layout: 'blank' // บังคับใช้ Layout เปล่า (ไม่มีเมนู)
})

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const username = ref('')
const password = ref('')
const loading = ref(false)

function handleLogin() {
    loading.value = true

    // จำลองการ Login (หน่วงเวลา 1 วินาที)
    setTimeout(() => {
        if (username.value === 'admin' && password.value === '1234') {
            loading.value = false
            router.push('/') // ส่งไปหน้า Dashboard
        } else {
            loading.value = false
            alert('Username หรือ Password ไม่ถูกต้อง')
        }
    }, 1000)
}
</script>