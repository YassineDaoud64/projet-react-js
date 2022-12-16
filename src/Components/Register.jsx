function Sign(){
    return(
        <div className="container d-flex justify-content-center mt-5" >
            <div className="mt-4 w-25">
                <h1  style={{textAlign:"center",color:'#fbbb2a'}}>Sign up</h1>
                <div className="form w-75 " style={{textAlign:"center"}}>
                    <form className="">
                        <label>First Name:</label>
                        <input type="text" style={{textAlign:"center",width:"100%"}} placeholder="Enter your First Name" className="form-control .col-lg-*"/>
                        <label>Last Name:</label>
                        <input type="text" style={{textAlign:"center",width:"100%"}} placeholder="Enter your Last Name" className="form-control .col-lg-*"/>
                        <label>Phone number:</label>
                        <input type="text" style={{textAlign:"center",width:"100%"}} placeholder="Enter your Phone number " className="form-control .col-lg-*"/>
                        <label>Email:</label>
                        <input type="email" style={{textAlign:"center",width:"100%"}} placeholder="Enter your email" className="form-control .col-lg-*"/>
                        <label>Password:</label>
                        <input type="password" style={{textAlign:"center",width:"100%"}} placeholder="Enter your password" className="form-control .col-lg-*"/>
                        <label>Confirm Password:</label>
                        <input type="password" style={{textAlign:"center",width:'100%'}} placeholder="Enter confirm password" className="form-control "/>
                        <br />
                        
                        <div className="mt-2 text-center">
                            <button className="btn btn-danger" type="reset" style={{width:"48%", marginRight:"4%"}}>Cancel</button>
                            <button className="btn btn-success"style={{width:"48%"}}>SihgUp</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Sign