import React, { useState } from 'react'
import Axios from 'axios'

import './App.scss';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [email, setEmail] = useState('');

  function updateFirstName(e) { 
    setFirstName(e.target.value.trim());
  }

  function updateLastName(e) { 
    setLastName(e.target.value.trim());
  }

  function updateCompanyName(e) { 
    setCompanyName(e.target.value.trim());
  }

  function updatePhoneNumber(e) { 
    setPhoneNumber(e.target.value.trim());
  }

  function updateEmail(e) { 
    setEmail(e.target.value.trim());
  }

  function finishNewContact() { 
    Axios.post('http://localhost:3001/contacts', { 
      firstName: firstName, 
      lastName: lastName, 
      companyName: companyName,   
      phoneNumber: phoneNumber, 
      email: email 
    }).then(() => { 
      console.log('Successful update');
    })
  }

  return (
    <div className="App">
      <div className='App__modal-background'>
        <div className='modal-background__add-contact-modal'>
          <div className='add-contact-modal__header-container'>
            <div className='header-container__title-container'>
              <span className='title-container__title-name'> New Contact </span>
            </div>
            <div className='header-container__content-separator'></div>
          </div>
          <div className='add-contact-modal__contents-container'>
            <div className='contents-container__input-fields-container'>
              <input onChange={ updateFirstName } placeholder='First name' type='text' className='input-fields-container__first-name-input' id='contact-input-field'></input>
              <div className='input-fields-container__input-separator'></div>
              <input onChange={ updateLastName } placeholder='Last name' type='text' className='input-fields-container__last-name-input' id='contact-input-field'></input>
              <div className='input-fields-container__input-separator'></div>
              <input onChange={ updateCompanyName } placeholder='Company name' type='text' className='input-fields-container__company-number-input' id='contact-input-field'></input>
            </div>
            <div className='contents-container__padding-area'></div>
            <div className='contents-container__input-fields-container'>
              <input onChange={ updatePhoneNumber } placeholder='Phone number' type='text' className='input-fields-container__phone-number-input' id='contact-input-field'></input>
            </div>
            <div className='contents-container__padding-area'></div>
            <div className='contents-container__input-fields-container'>
              <input onChange={ updateEmail } placeholder='Email' type='text' className='email-container__email-input' id='contact-input-field'></input>
            </div>
          </div>
          <div className='add-contact-modal__button-container'>
            <button className='button-container__cancel-button' id='modal-buttons'>Cancel</button>
            <button onClick={ finishNewContact } className='button-container__finish-button' id='modal-buttons'>Finish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
