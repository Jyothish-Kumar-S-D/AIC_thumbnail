import './App.css';
import image from '../src/dispimg.png';
import cross from '../src/cross_design.png';
import Vector from '../src/Vector.png';
import Google from '../src/google.jpg'
function enterdetails(){
  return(
    <div>
      <h1 className="main_heading">
        Login to your Account        
      </h1>
      <p className="sub_heading">See what is going on with your business</p>
      <button className="G_login">
        <img src={Google} className="google"></img>
        <span id="txt">Continue with Google</span>
      </button>
      <p className="small_divider">--------or Sign in with Email---------</p>
      <div className="email_entry">
        <p className="email_title">Email</p>      
        <input type="email" placeholder="mail@abc.com" class="txtbox">
        </input>
      </div>
      <div className="Password_entry">
        <p className="Password_title">Password</p>    
        <input type="password"placeholder="******************" class="txtbox">
        </input>
        <table>
        <tr>
          <td>
            <input className="remember" type="checkbox"></input>Remenber Me
          </td>
          <td>
            <a href="" className="forgot">Forgot Password?</a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button className="login_button">Login</button>
          </td>
        </tr>
      </table>
      </div>
      
      

    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div id="display_area">
        <div id="displayImage">
          <img src={image} className="dispimg"></img>
        </div>
        <div id="forms">
          <img src={cross}></img>
          {enterdetails()}
          <p className="Not_registered">Not Registered Yet? <a className="create_account" href="">Create an account</a></p>
          <div className="overlayimg">
          <img className="image" src={Vector}></img>
          </div>



        </div>

        
        
      </div>
      
    </div>
  );
}

export default App;
