import meta0 from'../meta0.png'
import meta1 from'../meta1.jpg'
import facebook1 from'../facebook1.png'
import instagram from'../instagram.png'
import youtube from'../youtube.png'
import whatsapp from'../whatsapp.png'
export default function Home(){
return(
    <footer id="footer" className="text-center" style={{backgroundColor:"#fff",color:"#000", marginTop:"30px", padding:'10px',justifyContent:'center',fontWeight:'bold',fontSize:'30px'}}>
       With the most popular retail trading platforms:
       <br />
       <br />
       <br />
       <img src={meta1} alt="meta"style={{width:'397',height:'148',margin:'auto 15px'}} />
       <img src={meta0} alt="meta"style={{width:'553',height:'143',margin:'auto 15px'}} />
       <br />
       <br />
       <h2 style={{color:'red'}}>Support:</h2>
      <p style={{color:'#FA9806'}}>Support@DNDTrading.com <br />
+212652982173</p> 
<br />
<br />
<p>2022 © Copyright - DNDTrading.com Made with ❤ for trading</p>


<a href="https://www.facebook.com" style={{margin:'auto 5px'}}><img src={facebook1} alt="HTML tutorial"></img></a>

<a href="https://www.instagram.com" style={{margin:'auto 5px'}}><img src={instagram} alt="HTML tutorial"></img></a>
<a href="https://www.youtube.com" style={{margin:'auto 5px'}}><img src={youtube} alt="HTML tutorial"></img></a>
<a href="https://www.whatsapp.com" style={{margin:'auto 5px'}}><img src={whatsapp} alt="HTML tutorial"></img></a>

    </footer>
)

}