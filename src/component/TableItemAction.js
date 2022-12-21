const TableAction = () => {
    fetch('../../data/db.json')
        .then(response => response.json())
        .then(json => {
            console.log(json.databarang.namabarang);
        })
}

export default TableAction;