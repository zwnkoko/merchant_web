import logo from '../logo.svg';
import bird_img from './login_bird.jpg';
import './App.css';

function App() {
  return (
    <div className='container'>
        <div className='grid-container'>
          <div className='item2'>
            <img className="img" src={bird_img} alt="place-holder" />
          </div>
          <div className='item1'>
            <p>Sign In to CryptoPay Web</p>
            <br />
            <form action="#">
              <label htmlFor="username">username:</label>
              <input className="item1-textbox" type="text" id="username" name="username" />
              <br /> <br /> 
              <label htmlFor="password">password:</label>
              <input className="item1-textbox" type="password" id="password" name="password"/>
              <br /> <br />
              <input className='item1-submit' type="submit" value="Sign In"/>
            </form>
          </div>

        </div>
    </div>
  );
}

export default App;
