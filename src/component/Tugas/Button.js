import FormInput from './Form/FormInput';
import FormEdit from './Form/FormEdit'
import {React, useState} from 'react';

const Button = (props) => {
  const [show, setShow] = useState(false);
  let datatugas

  if(props.datatugas){
    datatugas = props.datatugas
  }

  return (
    <div className='d-flex justify-content-end'>
      <a className="btn btn-primary card-link me-2" onClick={() => setShow(true)}>{(props.datatugas) ? 'Edit' : 'Tambah'}</a>
      {
        (props.datatugas) ?
        <FormEdit show={show} onClose={() => setShow(false)} datatugas={datatugas} forceRefresh={props.forceRefresh}/>
        :
        <FormInput show={show} onClose={() => setShow(false)} forceRefresh={props.forceRefresh}/>
      }
    </div>
  )
}

export default Button;