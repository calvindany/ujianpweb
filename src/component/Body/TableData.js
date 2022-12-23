import React from "react";import Button from "./Button";
;

const TableData = ({ mhs, forceRefresh, setRefresh }) => {

    const deleteData = () => {
        fetch("http://localhost:8000/absensi/" + mhs.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mhs)
        })
        .then(() => {
            console.log('Todo Updated.')
            forceRefresh();
        })
        .catch(err => {
            console.log(err);
        })
    }


    return (
        <tr className="text-center">
            <td>{mhs.nama}</td>
            <td>{mhs.npm}</td>
            <td >{mhs.pertemuan}</td>
            <td>{mhs.keterangan}</td>
            <td>{mhs.jam}</td>
            <td className="action">
                <Button mhs={mhs} forceRefresh={forceRefresh} mode='Edit'></Button>
                <button className="btn btn-danger" onClick={deleteData} >Hapus</button>
            </td>
        </tr>
    )
}

export default TableData;