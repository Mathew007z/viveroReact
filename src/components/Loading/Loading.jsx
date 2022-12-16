import {toast} from 'react-hot-toast'
import './loading.css'
import {useState} from 'react'




const Loading = () => {
  const [settings, saveSettings] = useState('')


  const load =  () => {
    toast.loading ('Cargando...')
      
    
  }


  


  return (



    <div className="back-loading">
        {() => load()}
    
    </div>
  );
};



export default Loading;
