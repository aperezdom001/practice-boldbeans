import styles from './App.module.css';
import {Route, Link} from 'react-router-dom';
import Home from '../src/Components/Home/Home';

function App() {
  return (
    <div className={styles.top}>

      <h1>Strong, Smart, and Bold Beans </h1>

      <nav className={styles.nav}> 
        <Link to='/'>Home</Link>
        {/* <Link to='/coffeebeans'>Coffee Beans</Link>
        <Link to='/merchandise'>Merchandise</Link>
        <Link to='/contactus'>Contact us</Link>
        <Link to='/instagram'>Instagram</Link>
        <Link to='/donate'>Donate</Link> */}
      </nav>

      <Route path='/' exact render={() => <Home />}/>
      {/* <Route path='/' exact render={() => < />}/>
      <Route path='/' exact render={() => <Home />}/>
      <Route path='/' exact render={() => <Home />}/>
      <Route path='/' exact render={() => <Home />}/>
      <Route path='/' exact render={() => <Home />}/> */}
  </div>
  );
}

export default App;
