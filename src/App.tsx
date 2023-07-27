import './App.css'
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom'

import Chartsmaps from './pages/chartsmaps' 
import  Contactpage  from './pages/contact'

function App() {


    return (
        <div className='grid grid-cols-7 h-screen '>
            <Router>
            <div className="fixed w-screen lg:w-auto col-span-7 top-0 left-0 lg:static lg:col-span-1 bg-blue-300 lg:h-screen text-center">
                <div className="nav-body lg:flex lg:items-center lg:h-screen">
                    <nav className="p-4 lg:pt-0">
                    <ul className="flex  lg:block justify-center">
                        <li className="lg:mb-2 mx-1">
                        <Link
                            to="/"
                            className="block py-2 px-4 text-white bg-red-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out rounded-md"
                        >
                            Contacts
                        </Link>
                        </li>
                        <li className="lg:mb-2 mx-1">
                        <Link
                            to="/charts"
                            className="block py-2 px-4 text-white bg-red-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out rounded-md"
                        >
                            Charts &amp; Maps
                        </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>

                <div className='content col-span-7 lg:col-span-6 bg-slate-100 h-screen'>
                    <Routes>
                        <Route path='/' element={<Contactpage/>}/>
                        <Route path='charts' element={<Chartsmaps/>}/>
                    </Routes>
                </div>
            </Router>
      </div>
    );
  }
  
  export default App;