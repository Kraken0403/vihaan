import 'bootstrap/dist/css/bootstrap.min.css';
// import { response } from 'express';
import './App.scss';
import AnimatedRoutes from './Components/AnimatedRoutes';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  
  return (
    <div className="App">
        <ScrollToTop/>
        <AnimatedRoutes/>
    </div>
  );
}

export default App;
