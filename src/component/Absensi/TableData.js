import React from "react";import Button from "./Button";
;

const TableData = ({ mhs, forceRefresh }) => {

    const deleteData = () => {
        fetch("http://localhost:8000/absensi/" + mhs.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mhs)
        })
        .then(() => {
            console.log('Table Updated.')
            forceRefresh();
        })
        .catch(err => {
            console.log(err);
        })
    }


    return (
        <tr >
            <td className="text-center">{mhs.nama}</td>
            <td className="text-center">{mhs.npm}</td>
            <td className="text-center">{mhs.pertemuan}</td>
            <td className="text-center">{mhs.keterangan}</td>
            <td className="text-center">{mhs.jam}</td>
            <td className="action">
                <Button mhs={mhs} forceRefresh={forceRefresh} mode='Edit'></Button>
                <button className="btn btn-danger" onClick={deleteData}>Hapus</button>
            </td>
        </tr>
    )
}

export default TableData;