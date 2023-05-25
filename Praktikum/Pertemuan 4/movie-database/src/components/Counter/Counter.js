import { useState, useEffect } from "react";

const Counter = () => {
    // membuat variable state
    // mengembalikan 2 data
    // nilai saat ini = 0
    // fungsi untuk mengubah state
    let [hasil, setHasil] = useState(0);
    let [nama, setNama] = useState("Ayyash");


    const tambah = () => {
        // jalankan fungsi setHasil untuk mengubah state
        setHasil(hasil+1);
    }

    const addNama = () => {
        setNama("Ayyash Muhammad")
    }

    useEffect(function () {
        console.log("Dijalankan ketika component di mount dan update.")

        document.title = `Hasil ${hasil}`
    },
    [hasil]
    );

    return (
        <div>
            <p>Hasil: {hasil}</p>
            <button onClick={tambah}>Add</button>
            <p>Nama: {nama}</p>
            <button onClick={addNama}>ubahNama</button>
        </div>
    )
}

export default Counter;