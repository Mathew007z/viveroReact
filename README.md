# Proyecto  _ecommerce_  Vivero-React-JS .

## Introducción  a los objetivos del proyecto :
El proyecto se creo para una empresa llamada Green Place. La cual brinda sustentación a la Naturaleza.
Dicha empresa posee por dispersas localidades Viveros a lo largo del pais.
En el proyecto anteriormente nombrado, programé una App Web (e-commerce) , para esta Empresa, cumpliendo objetivos acordados por contrato. La misma plasma una web con información, precios, productos, formulario y una base de datos de todos los productos. A continuación  dejaré la documentación de la App web, para todo aquel que la necesite. 



# Documentación  

## Librerias en el proyecto : 
 
 * React-router-dom (Navegación de la web)
 * React-hot-toast (Alertas en interacciones)
 * React-Spinners (Logo para efecto loading)
 
 
 ## Almacenamiento : 
 _LocalStorage_
 
 
## Base de datos NoSQL

* Firebase (Implementación de FireStore para la base de datos, y Storage para las imagenes. ).


 ## Organización  de componentes / archivos :
 
 En el archivo **Index.js** implementamos Firebase por importación , llamando a un archivo config.js dentro de la carpeta firebase, que en dicho archivo posee la informacion de nuestro proyecto.
 
Luego en **App.js** implementamos por _import_ las librerias anteriormente mencionadas. A su vez, la estructura de la navegación proporcionada por **react-router-dom** , nos permite navegar a los siguientes componentes : 
 **Home** (pagina principal), **ItemListContainer** (Productos),
**Categorias** (que se encuentra dentro del componente **ItemListContainer**, que nos permite filtrar por rango de precio.), **ItemDetailContainer** (que nos permite ver el detalle del producto.),**Nosotros** (información de la empresa), **Cart** (carrito de compras) y **CheckOut** (formulario de compra.)



## Componentes Contenedores : 

- ItemListContainer
- ItemDetailContainer 


Los mismos traen la información de la base de datos, por medio de las reglas de sintaxis que posee Firebase siempre utilizando el Hook de React useEffect, para que se ejecute al momento que la App se monta. 

```
 useEffect(() => {
    
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'productos');
      if(categoriaId){
        const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
        getDocs(queryFilter)
          .then(res => setData(res.docs.map(prod => ({id:prod.id, ...prod.data()}))))
      }else{
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .finally(()=> setLoading(false))
      }
    
  }, [categoriaId]);

```

El codigo anteriormente de ejemplo, muestra como obtenemos los datos de la **Collection** "productos", que a su vez, hace un filtrado por _categoria_.


## Componentes Presentacionales : 

 - ItemDetail 
 - ItemList
 - Item
 
 
 
 En estos componentes nombrados anteriormente , realizamos código para representar nuestros productos visualmente en la web.
 
En **ItemList** realizamos el método de **JavaScript** (map) que nos permite iterar / recorrer, nuestros productos previamente guardados en un estado llamado **Cart** en el Contexto que sera explicado en breve.

En **Item** por medio de props , pasamos de **ItemList** hacia **Item**,
con el valor data con su respectiva key.

```
function ItemList({ data }) {
  return (
    <div className="card">
      {
      data.map((data) => (
        <Item data={data} key={data.id} />
      ))}
    </div>
  );
}
```

Luego con los datos obtenidos mostramos la informacion de cada producto en el componente **Item**, como asi también , un botón para _Ver Detalle_ del producto.


En **ItemDetail**  nos encargamos de obtener las props pasadas desde **ItemDetailContainer** hacia **ItemDetail**.
```
const ItemDetailContainer = () => {
  const [prod, setProd] = useState([]);
  // useParams return a string
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', id);
    getDoc(queryDoc)
    .then(res => setProd({id:res.id, ...res.data()}))
   
  }, [id]);

  return (
    <>
      <div className="div">
        <ItemDetail prod={prod} />
      </div>
    </>
  );
};
export default ItemDetailContainer;

```


Luego con esa informacion nuevamente, presentamos el producto con sus respectivos detalles al momento de presionar el boton _Ver Detalle_ antes mencionado.



#  Contexto

En esta App una de las cosas mas importantes es el Context, que nos permite pasar informacion valiosa / Funciones , hacia cualquier componente de nuestra App con tan solo importarlo.
En el archivo **App.js** podran encontrar el CartProvider, el cual encierra a todos los componentes que sean necesarios, para pasar dicha información.



### CartContext (consumidores) : 

**ItemDetail** : Utiliza el contexto para utilizar la funcion addProduct la cual agrega un producto al carrito.

**CheckOut** : Lo utiliza para obtener la informacion de los productos seleccionados por el usuario para posteriormente unificar los datos con los del formulario al momento de la compra.

**Cart** : Dicho componente utiliza el context para obtener las funciones de Eliminar producto, Vaciar carrito, Eliminar por unidad, y calcular el total de la compra.

**CartWidget** : Lo utiliza para obtener la funcion de calcular la cantidad de los items seleccionados, para proporcionar la visual del contador al lado del logo del carrito en la navbar.


El Context se encuentra en la carpeta **Context** dentro de src, encontraras el archivo CartContext. En el cual dentro, esta generado el contexto para el carrito específicamente. 
En el mismo se encuentran :

 - Funciones básicas  de un carrito de compras
 - Estado (useState) para guardar los productos en el carrito.
 
 
 
 ## CheckOut
 
 Llegando al final, luego de elegir un producto e ir al componente **Cart**,
 podran visualizar un Boton el cual dice **Terminar Compra**, al presionarlo, la App nos redirecciona a un Formulario de contacto **CheckOut**, en el cual nos pide ingreso de datos del usuario antes de efectuar la compra.
 
 Una vez ingresado los datos se envian hacia **FireStore** , creando una _Collection_ llamada **"compra"**, en la misma se podra visualizar los datos del usario ingresados al momento de la compra, sumado los productos que eligio con el precio total.
 
 ```
    const CheckOut = () => {
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



 ```


En el código podemos observar que creamos una variable llamada **compra**, para dentro, proporcionarle los datos del formulario, obtenidos por la funcion **changeHandler**, donde sacamos el valor del formulario y lo guardamos en el estado **form**. A continuación , dentro de la variable **compra** incluimos los items que eligio el usuario, haciendo un **map**, por cada uno de ellos. Y finalmente, proporcionamos la funcion **TotalPrice**, que nos brinda el total de los productos seleccionados.


Esta variable **compra**, la usaremos en la funcion **finishClick**, la cual es la encargada de enviar los datos hacia **Firestore** creando una _Collection_ llamada **compra**, Al enviar el formulario ejecutamos la funcion **ClearCart**, para resetear el carrito de compras.



**Es una App sencilla pero funcional, Agradecimiento al profesor [Felix Blanco](https://www.linkedin.com/in/felixblancos/)** por las clases fueron exelentes.  


Saludos!!!

Atte: [Matias Acuña](https://www.linkedin.com/in/matiasacua/). 










