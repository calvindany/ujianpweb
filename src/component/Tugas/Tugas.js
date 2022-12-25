import { useState, useEffect, useReducer } from "react";
import Button from "./Button";
import CardData from "./CardData";
import Title from "./Title";

const Tugas = () => {
    const [tugas, setTugas] = useState([]);
    const [update, forceUpdate] = useReducer(x => x + 1, 0);

    // // memanggil API untuk mengambil data todos
    useEffect(() => {
        fetch("http://localhost:8000/tugas")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                // ketika Rest API sukses, simpan data dari response ke dalam state lokal
                setTugas(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted.");
                }
            });
    }, [update]);

    if (tugas.length === 0) return <p>Fetching data...</p>

    return ( 
        <div className="custom-padding row">
            <Title />
            <Button forceRefresh={ () => forceUpdate() }></Button>
            {tugas.map( (datatugas) => {
                return <CardData tugas={datatugas} forceRefresh={ () => forceUpdate() }/>
            })}
        </div>
    );
};

export default Tugas;