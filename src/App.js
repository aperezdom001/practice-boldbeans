import styles from './App.module.css';
import {Route, Link} from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import CoffeeBeans from './Components/CoffeeBeans/CoffeeBeans';

function App() {
  return (
    <div className={styles.top}>

      <h1>Strong, Smart, and Bold Beans </h1>

      <nav className={styles.nav}> 
        <Link to='/'>Home</Link>
        <Link to='/coffeebeans'>Coffee Beans</Link>
        {/* <Link to='/merchandise'>Merchandise</Link>
        <Link to='/contactus'>Contact us</Link>
        <Link to='/instagram'>Instagram</Link>
        <Link to='/donate'>Donate</Link> */}
      </nav>

      <Route path='/' exact render={() => <Home />}/>
      <Route path='/coffeebeans'component={CoffeeBeans}/>

      <footer> @Bold Beans  2021 </footer>
  </div>
  );
}

export default App;
