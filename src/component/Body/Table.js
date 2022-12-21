import { useState, useEffect } from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";

const Table = () => {
    const [mhs, setMhs] = useState([]);
    // // memanggil API untuk mengambil data todos
    useEffect(() => {
        fetch("http://localhost:8000/absensi")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                // ketika Rest API sukses, simpan data dari response ke dalam state lokal
                return setMhs(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted.");
                }
            });
    }, []);

    if(mhs.length == 0) return <p>Fetching data...</p>

    console.log(mhs)
    return (
        <div className="center">
            <table className="custom-padding">
                <thead>
                    <TableHeader></TableHeader>
                </thead>

                <tbody>
                    {
                        mhs.map((mhsdata) => {
                            return <TableData mhs={mhsdata} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;