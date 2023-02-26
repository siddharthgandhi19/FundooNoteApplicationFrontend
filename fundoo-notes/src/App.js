import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Header from './components/header/Header';
import TakeNote1 from './components/TakeNote1/TakeNote1';
import TakeNote2 from './components/TakeNote2/TakeNote2';
import TakeNote3 from './components/TakeNote3/TakeNote3';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Header/> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3 /> */}
      <Dashboard/>
    </div>
  );
}

export default App;
