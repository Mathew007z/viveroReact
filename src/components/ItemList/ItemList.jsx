 import "./itemlist.css"
 import Item from '../Item/Item'


 function ItemList ({ data }) { 
   <div>
   {data.map(data => <Item data={data} key={data.id} />)}
 </div>
 }

 export default ItemList;


 