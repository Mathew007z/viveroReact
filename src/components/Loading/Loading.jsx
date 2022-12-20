import { ClockLoader } from 'react-spinners';
import './loading.css'





const Loading = () => {
 


  return (
    <div className='loader'>
    <ClockLoader color="pink" size={90} />
    <p className='cargando'>Cargando...</p>
    </div>
  );
};


export default Loading;





