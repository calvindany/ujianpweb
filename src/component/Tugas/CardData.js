import React from "react";
import Button from "./Button";

const CardData = ({ tugas, forceRefresh}) => {

    const deleteData = () => {
        fetch("http://localhost:8000/tugas/" + tugas.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tugas)
        })
            .then(() => {
                console.log('Data dihapus')
                // forceRefresh();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const title = tugas.judul;
    const subtitle = tugas.jenis;
    const keterangan = tugas.keterangan;

    return (
        <div className="card m-4" style={{ width: "19rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{keterangan}</p>
                <div className="d-flex">
                    <Button datatugas={tugas} forceRefresh={forceRefresh}></Button>
                    <a onClick={deleteData} className="btn btn-danger card-link">Delete</a>
                </div>
            </div>
        </div>
    )   
}

export default CardData;