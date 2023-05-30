import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin';
import Home from './pages/home';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/signin" Component={Signin} />
            <Route path="/home" Component={Home} />
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;

