import img1 from '..//img1.jpg'
import { Link } from "react-router-dom"

import './css/introduction.css'
export default function Introdaction(){
    return(
        <div >
            <img src={img1} alt="img" className='img'/>
        <h1 className='h1'>FOREX TRADERS WANTED</h1>

        <p className='pa'>Trade our company's capital.
Receive up to 90% of profits, we cover the losses.
        </p>
        
        <button className='btn1' ><strong><Link to='clientarea'style={{color:'black',textDecoration:'none',display:'inline-block'}}>DND Trading Challenge</Link></strong></button>
        <button className='btn2'><strong><Link to='Register'style={{color:'black',textDecoration:'none',display:'inline-block'}}>Demo Account</Link></strong></button>
        </div>
    )
}
