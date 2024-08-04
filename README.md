# Sstra Alert

**Sstra Alert** adalah sebuah library komponen dan hooks untuk alert yang reusable di React.

## Deskripsi

Komponen Alert dan hooks ini dirancang untuk digunakan kembali di berbagai proyek React. Dengan menggunakan `sstra-alert`, Anda dapat dengan mudah menampilkan alert dengan berbagai tipe dan gaya.

## Instalasi

Untuk menginstal library ini, jalankan perintah berikut:

```bash
npm install sstra-alert
```

Penggunaan:

Konfigurasi tailwind.config.js

```jsx
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/sstra-alert/**/*.{js,jsx,ts,tsx}", // Tambahkan ini
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Untuk menggunakan komponen Alert, import dan gunakan di dalam aplikasi Anda:

```jsx
import React from "react";
import { Alert } from "sstra-alert";

const App = () => (
  <Alert status={true} type="success" message="This is an alert!" />
);
```

Props:

- status (boolean) : Kondisi
- message (string): Pesan yang akan ditampilkan di alert.
- type (string): Tipe alert. Pilihan: success, info, error.

Hook useAlert

Untuk menggunakan hook useAlert, import dan gunakan di dalam aplikasi Anda:

```jsx
import React from "react";
import { Alert, useHandleAlert } from "sstra-alert";

const App = () => {
  const { status, data, handleAlert } = useHandleAlert();

  return (
    <div>
      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-gray-600"}
      />
      <button onClick={() => handleAlert("success", "success")}>click</button>
    </div>
  );
};
```

Hook Return Values:

    data (object): Objek yang berisi message dan type dari alert saat ini.
    handleAlert (function): Fungsi untuk menampilkan alert dengan pesan dan tipe yang ditentukan.
    status (function): alert tampil berdasarkan status jika true maka akan tampil dan sebaliknya.

Lisensi

Proyek ini dilisensikan di bawah MIT License.
Kontak

    Email: saatrapradana@gmail.com
    Nama: Sastra Pradana
