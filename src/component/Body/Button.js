import Modal from '../Modal/Modal';
import {React, useState} from 'react';

const Button = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='d-flex justify-content-end'>
      <button onClick={() => setShow(true)}>Tambah</button>
      <Modal show={show} onClose={() => setShow(false)}/>
    </div>
  )
}

export default Button;