import useState from "react";

const Absensi = () => {
    // const [mhs, setMhs] = useState([]);
    // memanggil API untuk mengambil data todos
    fetch("http://localhost:8000/absensi")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            // ketika Rest API sukses, simpan data dari response ke dalam state lokal
            setMhs(data);
        })
        .catch((err) => {
            if (err.name === "AbortError") {
                console.log("fetch aborted.");
            }
        });

    return (
        <div>
        </div>
    );
}

// export default Absensi;