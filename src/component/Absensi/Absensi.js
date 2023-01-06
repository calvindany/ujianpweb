import { useState, useEffect, useReducer } from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import Button from "./Button";
import Title from "./Title"


const Absensi = () => {
    const [mhs, setMhs] = useState([]);
    const [update, forceUpdate] = useReducer(x => x + 1, 0);

    // // memanggil API untuk mengambil data todos
    useEffect(() => {
        fetch("http://localhost:8000/absensi")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const sortedData = [...data].sort((a, b) =>
                    a.pertemuan < b.pertemuan ? -1 : 1
                );

                return setMhs(sortedData);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted.");
                }
            });
    }, [update]);

    if (mhs.length === 0) return <p>Fetching data...</p>

    return (
        <div className="custom-padding">
            <Title />
            <Button forceRefresh={() => { forceUpdate() }}/>
            <div className="center">
                <table className=" table table-striped">
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

export default Absensi;