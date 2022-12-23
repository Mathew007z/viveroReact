import './contactform.css'
import {useState} from 'react'
import {getFirestore, addDoc, collection} from 'firebase/firestore'






    const ContactForm = () => {
        const [id , setId] = useState()
        const [form, setForm] = useState({

        name: '',
        email: '',
        message: '',
        });




        const submitHandler = (ev) => {
            ev.preventDefault();

            const db = getFirestore();
            const formsCollection = collection(db, 'forms');
            addDoc(formsCollection, form).then((res => {
              setForm({
                name: '',
                email: '',
                message: '',
              })
              setId(res.id)
            }))
        }
        

        // Hago copia del form
        const changeHandler = (ev) => {
            const {value, name} = ev.target;
            setForm({...form, [name]:value})
        }






        return (
            <div>
            {typeof id !== 'undefined' ? (
              <div>
                <p>Su mensaje se ha enviado correctamente</p>
                <p>{id}</p>
              </div>
            ) : (
                // Envio los datos del formulario que ya estan en el estado.
              <form onSubmit={submitHandler}>
                <div>
                  <label htmlFor="name">Nombre</label>
                  <input
                    name="name"
                    id="name"
                    value={form.name}
                    // Con el change me llevo el valor del input a un estado.
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={changeHandler}
                  ></textarea>
                </div>
                <button>Enviar</button>
              </form>
            )}
          </div>
        )
}


export default ContactForm;
