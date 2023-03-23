import React from "react";

const Hello = (props) => {
    return ( <p>Hai, saya {props.nama}!
    <br></br>
    Saat ini, saya sedang berkuliah di {props.kampus}.
    <br></br>
    Saya sedang menekuni ilmu dunia komputer dengan memilih jurusan {props.jurusan},
    <br></br>
    dan saya memiliki NIM {props.nim}.
    <br></br>
    Salam kenal!
    </p>
    );
}

export default Hello;