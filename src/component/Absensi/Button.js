import FormInput from './Form/FormAdd';
import FormEdit from './Form/FormEdit';
import {React, useState} from 'react';

const Button = (props) => {
  const [show, setShow] = useState(false);
  
  let datamhs

  if(props.mhs){
    datamhs = props.mhs
  }

  return (
    <div className='d-flex justify-content-end'>
      <button className="btn btn-primary" onClick={() => setShow(true)}>{(props.mhs) ? 'Edit' : 'Tambah'}</button>
      {
        (props.mhs) ?
        <FormEdit show={show} onClose={() => setShow(false)} datamhs={datamhs} forceRefresh={props.forceRefresh}/>
          :
        <FormInput show={show} onClose={() => setShow(false)} forceRefresh={props.forceRefresh}/>
      }
    </div>
  )
}

export default Button;