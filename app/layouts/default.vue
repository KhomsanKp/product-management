<template>
    <v-app>
        <v-navigation-drawer v-model="store.drawer" app color="grey-darken-4" theme="dark">
            <div class="d-flex align-center pa-4">
                <v-avatar color="primary" size="40">A</v-avatar>
                <div class="ml-3">
                    <div class="font-weight-bold">Admin System</div>
                    <div class="text-caption">Freelance Dev</div>
                </div>
            </div>

            <v-divider></v-divider>

            <v-list nav>
                <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
                <v-list-item to="/products" prepend-icon="mdi-box" title="จัดการสินค้า" value="products"></v-list-item>
                <v-list-item prepend-icon="mdi-account-group" title="ลูกค้า (Demo)" value="customers"></v-list-item>
                <v-list-item prepend-icon="mdi-cog" title="ตั้งค่า" value="settings"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar elevation="1">
            <v-app-bar-nav-icon @click="store.toggleDrawer()"></v-app-bar-nav-icon>
            <v-app-bar-title>My Stock System</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>

            <v-btn icon @click="toggleTheme">
                <v-icon>{{ theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main class="bg-grey-lighten-4">
            <v-container fluid class="pa-6">
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
const store = useMainStore()

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>