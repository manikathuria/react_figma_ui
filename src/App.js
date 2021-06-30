
import 'bootstrap/dist/css/bootstrap.min.css';
import "bulma/css/bulma.min.css";
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import Lists from './components/Lists'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div >
      <Router>
        <Header />
      </Router>

      <Main />
      <Lists />
      <Footer />
    </div>
  );
}

export default App;
