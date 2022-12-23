import { React, useState } from "react";

const FormInput = props => {
    const [nama, setMhs] = useState(props.datamhs.nama);
    const [npm, setNpm] = useState(props.datamhs.npm);
    const [pertemuan, setPertemuan] = useState(props.datamhs.pertemuan);
    let keterangan = props.datamhs.keterangan;

    if (!props.show) {
        return null
    }

    // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
    const editAbsen = () => {

        const getRadio = {
            hadir: document.getElementById('hadir').checked,
            absen: document.getElementById('absen').checked,
            izin: document.getElementById('izin').checked
        }

        if (getRadio.hadir) {
            keterangan = "Hadir"
            getRadio.hadir = false;
        } else if (getRadio.absen) {
            keterangan = 'Absen'
            getRadio.absen = false;
        } else if (getRadio.izin) {
            keterangan = 'Izin'
            getRadio.izin = false;
        } else {
            keterangan = "Alpha"
        }

        const newAbsen = {
            nama: nama,
            npm: npm,
            pertemuan: pertemuan,
            keterangan: keterangan,
            jam : props.datamhs.jam
        };

        console.log(newAbsen)

        fetch('http://localhost:8000/absensi/' + props.datamhs.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAbsen)
        }).then(() => {

            // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
            
            //Close Window edit setelah Submit
            props.onClose();

            //Refresh table setelah submit
            props.forceRefresh();
            return console.log('Absen Berhasil')
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
                        <label for="nama" className="form-label">Nama</label>
                        <input type="text" value={nama} className="form-control" name="nama" onChange={(e) => setMhs(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="npm" className="form-label">NPM</label>
                        <input type="text" value={npm} className="form-control" onChange={(e) => setNpm(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="npm" className="form-label">Pertemuan</label>
                        <input type="text" value={pertemuan} className="form-control" onChange={(e) => setPertemuan(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="npm" className="form-label">Keterangan</label>
                        <div className="form-check">
                            {
                                (keterangan === 'Hadir') ?
                                    <input className="form-check-input" checked type="radio" name="flexRadioDefault" id="hadir" />
                                    :
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="hadir" />

                            }
                            <label className="form-check-label" for="flexRadioDefault1">
                                Hadir
                            </label>
                        </div>
                        <div className="form-check">
                            {
                                (keterangan === 'Absen') ?
                                    <input className="form-check-input" checked type="radio" name="flexRadioDefault" id="absen" />
                                    :
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="absen" />

                            }
                            <label className="form-check-label" for="flexRadioDefault1">
                                Absen
                            </label>
                        </div>
                        <div className="form-check">
                            {
                                (keterangan === 'Izin') ?
                                    <input className="form-check-input" checked type="radio" name="flexRadioDefault" id="izin" />
                                    :
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="izin" />

                            }
                            <label className="form-check-label" for="flexRadioDefault1">
                                Izin
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-primary" onClick={editAbsen}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default FormInput;