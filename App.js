import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './CreateAccount.js';
import { auth, persistPost } from "./firebaseConfig";
import LoginPage from './LoginPage.js';
import MainPage from './MainPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import NavBar from './NavBar';
import SideDrawer from './SideDrawer';
import { Navigate } from 'react-router-dom';
import React from 'react';
import MakePost from './MakePost'
import CreateResponse from './CreateResponse'
import "./App.css"


const theme = createTheme({
  palette: {
    primary: {
      main: "#4EDEE5"
    },
    secondary: {
      main: "#005DAA"
    }
  }
});

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [isLogin, setLogin] = useState(user == null)


  const drawerWidth = 300

  return (
    <div>
      <ThemeProvider theme={theme}>
        {user == null ? null :
          <React.Fragment >
            <NavBar />
            <SideDrawer />
          </React.Fragment>
        }
        <BrowserRouter >
          <Routes>
            <Route exact path="/main" element={user == null ? <Navigate to="/login" /> : <MainPage user={user} />} />
            <Route exact path='/login' element={user == null ? <LoginPage /> : <Navigate to="/main" />} />
            <Route exact path="/newUser" element={user==null ? <CreateAccount />: <Navigate to="/main" />} />
            <Route exact path="/post" element={<MakePost user={user} />} />
            <Route path="/createResponse/:id" element={<CreateResponse />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
