import { useState, useEffect, useReducer } from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import Button from "./Button";


const Table = () => {
    const [mhs, setMhs] = useState([]);
    const [update, forceUpdate] = useReducer(x => x + 1, 0);

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
    }, [update]);

    if (mhs.length === 0) return <p>Fetching data...</p>

    console.log(mhs)
    return (
        <div>
            <Button forceRefresh={() => { forceUpdate() }}/>
            <div className="center">
                <table className="custom-padding table table-striped">
                    <thead>
                        <TableHeader></TableHeader>
                    </thead>

                    <tbody>
                        {
                            mhs.map((mhsdata) => {
                                return <TableData mhs={mhsdata} key={mhsdata.id} forceRefresh={() => { forceUpdate() }} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;