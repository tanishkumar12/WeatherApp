import loader from '../assets/444345.png';
import './Loader.css';
const Loader = props => {
    return <div className='loader'>
        <img src={loader} className='loaderimage' />
        <p>Loading...</p>
    </div>
}

export default Loader;