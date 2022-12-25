import { React, useState } from "react";

const FormInput = props => {
    const [judul, setJudul] = useState("");
    const [keterangan, setKeterangan] = useState("");
    let jenis

    if (!props.show) {
        return null
    }

    // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
    const addTugas = () => {

        const getRadio = {
            individu : document.getElementById('individu').checked,
            kelompok : document.getElementById('kelompok').checked,
        }

        if(getRadio.kelompok){
            jenis = "Kelompok"
        } else {
            jenis = "Individu"
        }

        const newTugas = {
            judul: judul,
            jenis: jenis,
            keterangan: keterangan
        };

        console.log(newTugas)

        fetch('http://localhost:8000/tugas', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTugas)
        }).then(() => {
            // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
            setJudul('')
            setKeterangan('')
            props.forceRefresh();
            props.onClose();
            console.log('Input Tugas Berhasil')
        });
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="close-button">
                    <button className="btn btn-danger" onClick={props.onClose}>X</button>
                </div>
                <div>
                    <div className="mb-3">
                        <label for="judul" className="form-label">Judul</label>
                        <input type="text" value={judul} className="form-control" name="judul" onChange={(e) => setJudul(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="jenis" className="form-label">Jenis</label>
                        <div className="form-check">
                            <input className="form-check-input"  type="radio" name="flexRadioDefault" id="individu" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Individu
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="kelompok" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Kelompok
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="jenis" className="form-label">Keterangan</label>
                        <input type="text" value={keterangan} className="form-control" onChange={(e) => setKeterangan(e.target.value)} />
                    </div>
                    

                    <button className="btn btn-primary" onClick={addTugas}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default FormInput;