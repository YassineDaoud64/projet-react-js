import { Route,Routes } from "react-router-dom"
import Home from "./Home.jsx"
import ClientArea from "./ClientArea.jsx"
import Register from "./Register"
export default function Section(){
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clientArea" element={<ClientArea/>}/>
        <Route path="/Register" element={<Register/>}/>
    </Routes>
    )
}