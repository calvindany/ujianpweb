import {React, useState} from "react";

const Modal = props => {
    const [nama, setMhs] = useState("");
    const [npm, setNpm] = useState("");
    const [pertemuan, setPertemuan] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [jam, setJam] = useState("");

    if (!props.show) {
        return null
    }

    // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
    const addAbsen = () => {

        const newAbsen = {nama : nama, npm : npm, pertemuan : pertemuan, keterangan : keterangan};
        console.log('sssss')
        console.log(newAbsen)

        // fetch('http://localhost:8000/absensi', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newAbsen)
        // }).then(() => {

        //     // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
        //     setMhs({})
        //     console.log('new todo added.')
        // });
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="close-button">
                    <button className="btn btn-danger" onClick={props.onClose}>X</button>
                </div>
                <div>
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama</label>
                        <input type="text" class="form-control" name="nama" value={nama} onChange={(e) => setMhs('Calvin')}/>
                    </div>
                    <div class="mb-3">
                        <label for="npm" class="form-label">NPM</label>
                        <input type="text" class="form-control" value={npm} onChange={(e) => setNpm('111')} />
                    </div>
                    <div class="mb-3">
                        <label for="npm" class="form-label">Pertemuan</label>
                        <input type="text" class="form-control" value={pertemuan} onChange={(e) => setPertemuan(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="npm" class="form-label">Keterangan</label>
                        <input type="text" class="form-control" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} />
                    </div>
                    {/* <div class="mb-3">
                        <label for="npm" class="form-label">Jam</label>
                        <input type="text" class="form-control" value={mhs.npm} onChange={(e) => setMhs(e.target.value)} />
                    </div> */}
                    
                    <button class="btn btn-primary" onClick={addAbsen}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;