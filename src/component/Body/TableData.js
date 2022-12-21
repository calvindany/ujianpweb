import React from "react";

const TableItem = ({mhs, setRefresh}) => {

    const updateItem = () => {
        fetch("http://localhost:8000/mahasiswa/" + mhs.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mhs)
        })
        .then( () => {
            console.log('Todo Updated.')
            setRefresh(true)
        })
        .catch (err => {
            console.log(err);
        })
    }

    const deleteItem = () => {
        fetch("http://localhost:8000/mahasiswa/" + mhs.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mhs)
        })
        .then( () => {
            console.log('Todo Updated.')
            setRefresh(true)
        })
        .catch (err => {
            console.log(err);
        })
    }

    return (
        <tr>
            <td>{mhs}</td>
        </tr>
    )
}