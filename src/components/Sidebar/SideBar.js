import Image from 'next/image'
import { Options } from './Options'


const src = "https://www.chaabi.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchaabiLogo.ae532a35.png&w=256&q=75"

const SideBar = () => {

    return <div className="sidebar" >
        <div className='logo'>
            <img className='logo' src={src} ></img>
        </div>
        <hr></hr>
        <div>
            <Options></Options>
        </div>
    </div>


}



export default SideBar