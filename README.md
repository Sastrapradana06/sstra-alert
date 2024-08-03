# Sstra Alert

**Sstra Alert** adalah sebuah library komponen dan hooks untuk alert yang reusable di React.

## Deskripsi

Komponen Alert dan hooks ini dirancang untuk digunakan kembali di berbagai proyek React. Dengan menggunakan `sstra-alert`, Anda dapat dengan mudah menampilkan alert dengan berbagai tipe dan gaya.

## Instalasi

Untuk menginstal library ini, jalankan perintah berikut:

```bash
npm install sstra-alert
```

Penggunaan
Komponen Alert

Untuk menggunakan komponen Alert, import dan gunakan di dalam aplikasi Anda:

jsx

import React from 'react';
import { Alert } from 'sstra-alert';

const App = () => (
<Alert message="This is an alert!" type="success" />
);

Props:

    message (string): Pesan yang akan ditampilkan di alert.
    type (string): Tipe alert. Pilihan: success, error, warning, info.

Hook useAlert

Untuk menggunakan hook useAlert, import dan gunakan di dalam aplikasi Anda:

jsx

import React from 'react';
import useAlert from 'sstra-alert/hooks/useAlert';
import { Alert } from 'sstra-alert';

const App = () => {
const { alert, showAlert, hideAlert } = useAlert();

return (
<div>
<button onClick={() => showAlert('This is an alert!', 'success')}>Show Alert</button>
<button onClick={hideAlert}>Hide Alert</button>
{alert.message && <Alert message={alert.message} type={alert.type} />}
</div>
);
};

Hook Return Values:

    alert (object): Objek yang berisi message dan type dari alert saat ini.
    showAlert (function): Fungsi untuk menampilkan alert dengan pesan dan tipe yang ditentukan.
    hideAlert (function): Fungsi untuk menyembunyikan alert.

Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

    Fork repositori ini.
    Buat cabang (branch) baru.
    Buat perubahan yang diinginkan.
    Kirim pull request.

Lisensi

Proyek ini dilisensikan di bawah MIT License.
Kontak

Untuk pertanyaan atau masalah, silakan hubungi:

    Nama: Sastra Pradana
    Email: saatrapradana@gmail.com
