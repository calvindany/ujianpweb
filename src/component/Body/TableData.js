import React from "react";;

const TableData = ({ mhs, setRefresh }) => {

    const updateData = () => {
        fetch("http://localhost:8000/mahasiswa/" + mhs.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mhs)
        })
            .then(() => {
                console.log('Todo Updated.')
                setRefresh(true)
            })
            .catch(err => {
                console.log(err);
            })
    }

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
            setRefresh(true)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const present = new Date();

    return (
        <tr>
            <td>{mhs.nama}</td>
            <td>{mhs.npm}</td>
            <td>{mhs.pertemuan}</td>
            <td>{mhs.keterangan}</td>
            <td>{
                present.getDay() + '/' + present.getMonth() + '/' + present.getFullYear() + " " + 
                present.getHours() + ":" + present.getMinutes()}</td>
            <td className="action">
                <span onClick={deleteData}>Hapus</span>
                <button>acs</button>
            </td>
        </tr>
    )
}

export default TableData;