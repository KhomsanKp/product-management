<template>
    <v-container class="pa-6">
        <h1 class="text-h4 font-weight-bold mb-6">Dashboard ภาพรวม</h1>

        <v-row>
            <v-col cols="12" md="4">
                <v-card elevation="2" class="rounded-lg pa-4">
                    <div class="d-flex align-center">
                        <v-avatar color="blue-lighten-4" size="50" class="mr-4">
                            <v-icon color="blue" size="30">mdi-package-variant</v-icon>
                        </v-avatar>
                        <div>
                            <div class="text-subtitle-1 text-grey">สินค้าทั้งหมด</div>
                            <div class="text-h4 font-weight-bold">{{ store.totalProducts }} ชิ้น</div>
                        </div>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card elevation="2" class="rounded-lg pa-4">
                    <div class="d-flex align-center">
                        <v-avatar color="green-lighten-4" size="50" class="mr-4">
                            <v-icon color="green" size="30">mdi-cash-multiple</v-icon>
                        </v-avatar>
                        <div>
                            <div class="text-subtitle-1 text-grey">มูลค่าสต็อก</div>
                            <div class="text-h4 font-weight-bold">฿{{ store.stockValue.toLocaleString() }}</div>
                        </div>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card elevation="2" class="rounded-lg pa-4">
                    <div class="d-flex align-center">
                        <v-avatar color="red-lighten-4" size="50" class="mr-4">
                            <v-icon color="red" size="30">mdi-alert-circle</v-icon>
                        </v-avatar>
                        <div>
                            <div class="text-subtitle-1 text-grey">สินค้าหมด</div>
                            <div class="text-h4 font-weight-bold">{{ store.outOfStockCount }} รายการ</div>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mt-4">
            <v-col cols="12" md="8">
                <v-card title="ยอดขายรายเดือน" class="pa-4" elevation="2">
                    <client-only>
                        <apexchart type="bar" height="300" :options="chartOptions" :series="series"></apexchart>
                    </client-only>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const store = useMainStore()

const chartOptions = {
    chart: { id: 'vue-chart-example' },
    xaxis: {
        categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.']
    },
    colors: ['#1976D2'] // สี Primary ของ Vuetify
}

const series = [{
    name: 'ยอดขาย (บาท)',
    data: [30000, 40000, 35000, 50000, 49000, 60000, 70000, 91000]
}]
</script>