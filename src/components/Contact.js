import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'

const Contact = ({open, openModal}) => {
    const [mail, setMail] = useState({
        email: "",
        name: "",
        company: "",
        siret: "",
        phone: "",
        address: "",
        date: "",
        projet: ""
      });

      function error_input(input) {
        input.style.border ='#FF7600 0.5px solid'
        setTimeout(() => {
            input.style.border ='white 0.5px solid'
        }, 1000);
      }

      const handleSubmit = async e => {
        e.preventDefault();
        console.log(mail)
        if (mail.name.length == 0) {
            error_input(document.getElementById('input-name'))
        } 
        if (document.getElementById('input-email').value === "") {
            error_input(document.getElementById('input-email'))
        } 
        if (document.getElementById('input-phone').value === "") {
            error_input(document.getElementById('input-phone'))
        }
        if (document.getElementById('input-date').value === "") {
            error_input(document.getElementById('input-date'))
        }
        if (document.getElementById('input-projet').value === "") {
            error_input(document.getElementById('input-projet'))
        }  
        // try {

        // } catch (err) {   

        // }
        emailjs.send('3439D9FF76F21C0DFE1D4535', 'template_okstuxs', mail, 'user_DlYdoyEkxwf84MFRThvCk')
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            })
        console.log(e)
      };
    const handleChange = e => {
        setMail({...mail, [e.target.name]: e.target.value });
      }

      useEffect(() => {
        if (open == false) {
            document.getElementById('popup').style.display = 'none'
            document.getElementsByTagName('body')[0].style.overflow ='auto'
          } else if (open == true) {
            document.getElementsByTagName('body')[0].style.overflow ='hidden'
            document.getElementById('popup').style.display = 'block'
          }
      }, [open])


      function closeModal() {
          openModal(false)
      }


    return (
        <div className='popup-wrapper' id ='popup'>
            <form className='popup-container' onChange={handleChange} onSubmit={handleSubmit} data-netlify='true'>
                <h2>Demander un devis</h2>  
                <div id='close-form' onClick={openModal}>&#10006;</div>
                    <div className='form-section'>
                        <h3 className='orange'>Informations</h3>
                        <input type='text' id='input-name' name='name' placeholder='Nom prénom *'/>
                        <input type='text' id='input-company' name='company' placeholder="Nom de l'entreprise"/>
                        <input type='text' id='input-siret' name='siret' placeholder="Siret *"/>
                        <textarea id='input-address' placeholder="Adresse *" name='address'/>
                        <input type='text' id='input-phone' placeholder="Téléphone *"  name='phone'/>
                        <input type='text' id='input-email' placeholder="Adresse email *"  name='email'/>
                    </div>
                    <div className='form-section'>
                        <h3 className='orange'>Description du projet</h3>
                        <input type='text' id='input-date' placeholder="Date butoir du projet *"  name='date'/>
                        <textarea id='input-projet' placeholder="Décrivez votre projet *" className='project-textarea'  name='projet'/>
                        <div className='form-btn-container'>
                            <button className='btn' type='submit'>
                                Demandez votre devis
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default Contact
