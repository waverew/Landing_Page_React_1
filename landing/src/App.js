import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className='logo'><h1>Let's vote!</h1></div>
      <div className='img-cont'>
        <img className='back-img' src='./img/Ellipse 1.png' alt=''></img>  
        <img className='back-img s' src='./img/Ellipse 4' alt=''></img>  
      </div>
      <img className='back-img c' src='./img/Chart.png' alt='c1'></img> 
      <img className='back-img c' src='./img/Ellipse 3-1.png' alt=''></img>    
      <img className='back-img bc' src="/img/Group.png" alt="group"></img>
      <div className="login">
        <div className='log-cont'>
      <Login>

      </Login>
      </div>
      </div>
    </div>
  );
}

export default App;
