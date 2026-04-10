import React from 'react'
import Styles from "../css/ContactPage.module.css";
import { useState } from 'react';


function ContactPage() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const subitForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  } 

  return (
    <div className={Styles.contactPage}>
      <form className={Styles.form} onSubmit={subitForm}> 
        <input 
          className={Styles.namebox}
          placeholder="Name" 
          value={formInput.name} 
          onChange={(e) => setFormInput({...formInput, name: e.target.value})}
          required/>
        <input 
          className={Styles.email}
          placeholder="Email"
          value={formInput.email} 
          onChange={(e) => setFormInput({...formInput, email: e.target.value})}
          required/>
        <textarea 
          className={Styles.text}
          placeholder="Message"
          value={formInput.message} 
          onChange={(e) => setFormInput({...formInput, message: e.target.value})}
          required/>
        <button className={Styles.submit}>Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;