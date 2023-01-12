import Background from './background/Background';
import Main from './components/Main'
import logo from './assets/logo.png'
import './background/background.css'
import './components/css/responsive.css'

function App() {
  return (
    <div className="App">
      <div className='image'><img src={logo} alt="Logo"></img></div>
      <Main />
      <div className='terms'>
        <a href="#">Terms of use</a>
        <p> | </p>
        <a href="#">Privacy policy</a>
      </div>
      <Background />
    </div>
  );
}

export default App;
