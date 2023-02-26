import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Header from './components/header/Header';
import TakeNote1 from './components/TakeNote1/TakeNote1';

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Header/> */}
      <TakeNote1/>
    </div>
  );
}

export default App;
