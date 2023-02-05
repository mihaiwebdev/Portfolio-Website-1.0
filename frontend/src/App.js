import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AbouScreen'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Contact from './Screens/Contact'
import Projects from './Screens/Projects';

function App() {
  return (
    <Router>
         <div className='home-container'>
            <div className="content-container">

              <Header />

              <Routes>
                <Route path='/' element={ <HomeScreen />} />
                <Route path='/about' element={ <AboutScreen /> } />
                <Route path='/contact' element={ <Contact /> }/>
                <Route path='/projects' element={ <Projects /> }/>
              </Routes>

            </div>
        </div>

        <Footer />
    </Router>
  );
}

export default App;
