import Introdaction from './Introdaction.jsx'
import Roules from './Roules.jsx'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'
export default function Home(){
    return(
    <section className='container'>
        <Introdaction/>
        <Roules/>
        <Cards/>
        <Footer/>
    </section>
    )
}