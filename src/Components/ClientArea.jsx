import "./css/clientarea.css";
export default function ClientArea() {
  return (
    <div className=" d-flex align-items-center justify-content-center w-100 ja">
      <div className=" w-40 ">
        <h2 className="mb-4" style={{color:"#fbbb2a"}}>Login</h2>
        <form>
          <div className="form-group mb-2">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              placeholder="Please enter your email"
              className="ema w-120"
              required
            ></input>
            <br />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              placeholder="Please enter your password"
              className="pass w-120"
              required
            ></input>
          </div>
          <div className="form-group mb-2">
            <input type="checkbox"></input>
            <label htmlFor="check">Remember me</label>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Login IN
          </button>
        </form>
      </div>
    </div>
  );
}
