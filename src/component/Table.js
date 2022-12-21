import React, { useState } from "react";
import TableItem from './TableItem';

const  AbsenList = () => {
    const [mhs, setMhs] = useState([]);

    fetch('http://localhost:8000/', {
        method : 'POST',
        headers : {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(mhs)
    })
}

export default function TableHeader(){
    return (
        <table className="d-flex justify-content-center">
            <tr>
                <th>Nama Mahasiswa</th>
                <th>NPM</th>
                <th>Jam Absen</th>
            </tr>
            <tr>
                <TableItem ></TableItem>
            </tr>
        </table>
    )
}