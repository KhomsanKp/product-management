import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    drawer: true, // ควบคุมการเปิด/ปิดเมนู Sidebar
    products: [
      {
        id: 1,
        name: "Wireless Mouse",
        category: "Accessories",
        price: 590,
        status: "Available",
      },
      {
        id: 2,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 2500,
        status: "Available",
      },
      {
        id: 3,
        name: 'Gaming Monitor 24"',
        category: "Electronics",
        price: 4500,
        status: "Out of Stock",
      },
      {
        id: 4,
        name: "USB-C Hub",
        category: "Accessories",
        price: 890,
        status: "Available",
      },
    ],
    snackbar: {
      show: false,
      text: "",
      color: "success",
    },
  }),
  getters: {
    // คำนวณจำนวนสินค้าทั้งหมด
    totalProducts: (state) => state.products.length,
    // คำนวณมูลค่าสต็อกรวม
    stockValue: (state) =>
      state.products.reduce((sum, item) => sum + item.price, 0),
    // นับสินค้าที่ของหมด
    outOfStockCount: (state) =>
      state.products.filter((i) => i.status === "Out of Stock").length,
  },
  actions: {
    addProduct(item?: any) {
      this.products.push({ ...item, id: Date.now() });
    },
    updateProduct(item?: any) {
      const index = this.products.findIndex((p) => p.id === item.id);
      if (index !== -1) this.products[index] = item;
    },
    deleteProduct(id: number) {
      this.products = this.products.filter((p) => p.id !== id);
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    showNotification(text: string, color = "success") {
      this.snackbar = { show: true, text, color };
    },
  },

  persist: true,
});
