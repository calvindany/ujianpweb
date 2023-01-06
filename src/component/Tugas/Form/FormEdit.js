import { React, useState } from "react";

const FormInput = props => {
    const [judul, setJudul] = useState(props.datatugas.judul);
    const [keterangan, setKeterangan] = useState(props.datatugas.keterangan);
    let jenis = props.datatugas.jenis
 
    if (!props.show) {
        return null
    }

    const editTugas = () => {
        const getRadio = {
            individu: document.getElementById('individu').checked,
            kelompok: document.getElementById('kelompok').checked,
        }
        
        console.log("updatedTugas")
        if (getRadio.kelompok) {
            jenis = "Kelompok"
        } else {
            jenis = "Individu"
        }
        
        const updatedTugas = {
            judul: judul,
            keterangan: keterangan,
            jenis : jenis
        };

        fetch('http://localhost:8000/tugas/' + props.datatugas.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTugas)

        }).then(() => {

            //Close Window edit setelah Submit
            props.onClose();

            //Refresh table setelah submit
            props.forceRefresh();

            return console.log('Update Tugas Berhasil')
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
                        <label for="npm" className="form-label">Keterangan</label>
                        <div className="form-check">
                            {
                                (jenis === 'Individu') ?
                                    <input className="form-check-input" checked type="radio" name="flexRadioDefault" id="individu" />
                                    :
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="individu" />

                            }
                            <label className="form-check-label" for="flexRadioDefault1">
                                Individu
                            </label>
                        </div>
                        <div className="form-check">
                            {
                                (jenis === 'Kelompok') ?
                                    <input className="form-check-input" checked type="radio" name="flexRadioDefault" id="kelompok" />
                                    :
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="kelompok" />

                            }
                            <label className="form-check-label" for="flexRadioDefault1">
                                Kelompok
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="keterangan" className="form-label">Keterangan</label>
                        <textarea type="text" className="form-control" onChange={(e) => setKeterangan(e.target.value)}>{keterangan}</textarea>
                    </div>

                    <button className="btn btn-primary" onClick={editTugas}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default FormInput;