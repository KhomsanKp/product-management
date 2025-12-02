// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    // เพิ่มส่วนตั้งค่า Theme ตรงนี้
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            // กำหนดสีหลักที่นี่ (เปลี่ยนแค่ตรงนี้ เปลี่ยนทั้งเว็บ)
            primary: "#EE4D2D", // สีหลัก (เช่น สีปุ่ม, สีหัวเว็บ)
            secondary: "#424242", // สีรอง
            accent: "#82B1FF", // สีตกแต่ง

            // สีแจ้งเตือนต่างๆ (มาตรฐาน)
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",

            // สีพื้นหลัง (เผื่ออยากคุมโทน)
            background: "#F5F5F5",
            surface: "#FFFFFF",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
