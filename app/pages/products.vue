<template>
    <v-container class="pa-6">
        <v-row class="mb-4" align="center">
            <v-col>
                <h1 class="text-h4 font-weight-bold">จัดการสินค้า</h1>
            </v-col>
            <v-col text-align="right" cols="auto">
                <v-btn color="primary" prepend-icon="mdi-plus" @click="openDialog()">เพิ่มสินค้า</v-btn>
            </v-col>
        </v-row>

        <v-card>
            <v-data-table :headers="headers" :items="store.products" :search="search">
                <template v-slot:item.price="{ item }">
                    ฿{{ item.price.toLocaleString() }}
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn icon size="small" variant="text" color="blue"
                        @click="editItem(item)"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn icon size="small" variant="text" color="red"
                        @click="deleteItem(item)"><v-icon>mdi-delete</v-icon></v-btn>
                </template>
            </v-data-table>
        </v-card>

        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>{{ formTitle }}</v-card-title>
                <v-card-text>
                    <v-text-field v-model="editedItem.name" label="ชื่อสินค้า"></v-text-field>
                    <v-text-field v-model="editedItem.category" label="หมวดหมู่"></v-text-field>
                    <v-text-field v-model="editedItem.price" label="ราคา" type="number"></v-text-field>
                    <v-select v-model="editedItem.status" :items="['Available', 'Out of Stock']"
                        label="สถานะ"></v-select>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" variant="text" @click="close">ยกเลิก</v-btn>
                    <v-btn color="blue" variant="flat" @click="save">บันทึก</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '~/stores/mainStore'

const store = useMainStore()
const search = ref('')
const dialog = ref(false)
const headers = [
    { title: 'ชื่อสินค้า', key: 'name' },
    { title: 'หมวดหมู่', key: 'category' },
    { title: 'ราคา', key: 'price' },
    { title: 'สถานะ', key: 'status' },
    { title: 'จัดการ', key: 'actions', sortable: false },
]

const editedItem = ref({})
const isEditMode = ref(false)

function openDialog() {
    isEditMode.value = false
    editedItem.value = { name: '', category: '', price: 0, status: 'Available' }
    dialog.value = true
}

function editItem(item) {
    isEditMode.value = true
    editedItem.value = { ...item }
    dialog.value = true
}

function deleteItem(item) {
    if (confirm('ลบนะ?')) store.deleteProduct(item.id)
}

function save() {
    // แปลงราคาเป็น number ก่อนส่ง
    editedItem.value.price = Number(editedItem.value.price)

    if (isEditMode.value) {
        store.updateProduct(editedItem.value)
    } else {
        store.addProduct(editedItem.value)
    }
    store.showNotification('บันทึกข้อมูลเรียบร้อยแล้ว!', 'success') // <--- เพิ่มบรรทัดนี้
    close()
}

function close() {
    dialog.value = false
}

const formTitle = computed(() => isEditMode.value ? 'แก้ไขสินค้า' : 'เพิ่มสินค้าใหม่')
</script>