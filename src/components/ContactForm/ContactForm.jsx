import { toast } from "react-hot-toast";
import './contactform.css'
import {useState} from 'react'
import {getFirestore, addDoc, collection} from 'firebase/firestore';
import { useCartContext } from "../../Context/CartContext";

    const ContactForm = () => {
        const [id , setId] = useState()
        const [form, setForm] = useState({

        name: '',
        email: '',
        message: '',
        });
        const { cart,totalPrice,clearCart } = useCartContext();

        const compra = {
          form,
          items:cart.map(prod => ({id : prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.cantidad})),
          total: totalPrice(),
      }

      console.log(Object.values(form))

      const finishClick = (e) => {
        e.preventDefault()
          if(form.name === '' && form.email === '') {
              toast.error("Todos los campos son requeridos")
            }else{
              const db = getFirestore();
              const userCollection = collection(db, 'compra')
                addDoc(userCollection, compra)
                .then(( res ) => {
                  toast.success(`Su Compra ${res.id} se realizó Correctamente`, {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                  setId(res.id)
                clearCart();
                 })   
              
            }
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
              <form onSubmit={finishClick}>
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