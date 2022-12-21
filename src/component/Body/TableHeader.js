import React from "react";

export default function TableHeader(){
    return (
        <tr>
            <th className="long-data">Nama Mahasiswa</th>
            <th className="medium-data">NPM</th>
            <th className="short-data">Pertemuan ke-</th>
            <th className="medium-data">Keterangan</th>
            <th className="medium-data">Jam Absen</th>
            <th className="medium-data">Action</th>
        </tr>
    )
}