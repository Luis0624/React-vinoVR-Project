import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/Navbar';
// import NavBar2 from './components/Navbar2';
import Header from './components/Header';
import  Mood from './components/Mood';
// import About from './components/About';
import Featured from './components/Featured';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Routes from './routes/Routes';
import { AuthProvider } from './utils/AuthContext';
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);

  return (
   <AuthProvider value={{ auth, setAuth }}>           
    <Router>
      <div>
        <NavBar />
            { !auth
              ? <>
                <Route exact path="/" component={Header} />
                <Route exact path="/Signin" component={SignIn} />
                <Route exact path="/signup" component={Signup} /> 
                <Route exact path="/mood" component={Mood} />
                <Route exact path="/featured" component={Featured} />
                <Route exact path="/favorites" component={Favorites} />
              </>
              : <>
                {/* <Route exact path="/mood" component={Mood} />
                <Route exact path="/featured" component={Featured} />
                <Route exact path="/favorites" component={Favorites} /> */}
              </>
            }
         <Footer />
      </div>
    </Router>
   </AuthProvider>

  );
}
   
 
export default App;
