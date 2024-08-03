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

    import React from 'react';
    import { Alert } from 'sstra-alert';

    const App = () => (
        <Alert message="This is an alert!" type="success" />
    );

Props:

- message (string): Pesan yang akan ditampilkan di alert.
- type (string): Tipe alert. Pilihan: success, error, warning, info.

Hook useAlert

Untuk menggunakan hook useAlert, import dan gunakan di dalam aplikasi Anda:

    import React from 'react';
    import useHandleAlert from 'sstra-alert/hooks/useAlert';
    import { Alert } from 'sstra-alert';

    const App = () => {
        const { status, data, handleAlert } = useHandleAlert();

        return (
            <div>
                <button onClick={() => showAlert('This is an alert!', 'success')}>Show Alert</button>
                <button onClick={hideAlert}>Hide Alert</button>
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

Hook Return Values:

    data (object): Objek yang berisi message dan type dari alert saat ini.
    handleAlert (function): Fungsi untuk menampilkan alert dengan pesan dan tipe yang ditentukan.
    status (function): alert tampil berdasarkan status jika true maka akan tampil dan sebaliknya.

Lisensi

Proyek ini dilisensikan di bawah MIT License.
Kontak

    Email: saatrapradana@gmail.com
    Nama: Sastra Pradana
