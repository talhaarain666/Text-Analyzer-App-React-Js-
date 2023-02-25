import logo from './logo.svg';
import './App.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ButtonAppBar from './components/navbar';
import TextAnalyzerApp from './components/textbox';
import AlertComponent from './components/alert';
import AboutPage from './pages/about';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";






function App() {

  const [alert, setAlert] = useState(null);

  let showAlert = (message) => {
    setAlert({
      msg: message,

    })
    setTimeout(() => {

      setAlert(null)
    }, 3000);

  }


  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",

  })


  let changeTheme = (clr) => {

    switch (clr) {
      case "green":
        document.body.style.backgroundColor = "#90EE90"
        setTheme({
          backgroundColor: "#006400",
          color: "white",
        })

        break;
      case "yellow":
        document.body.style.backgroundColor = "#FFFACD"
        setTheme({
          backgroundColor: "#F0E68C",
          color: "black",
        })
        break;
      case "red":
        document.body.style.backgroundColor = "#F08080"
        setTheme({
          backgroundColor: "#8B0000",
          color: "white",
        })
        break;
      case "blue":
        document.body.style.backgroundColor = "#1E90FF"
        setTheme({
          backgroundColor: "#191970",
          color: "white",
        })
        break;
      case "black":
        document.body.style.backgroundColor = "#696969"
        setTheme({
          backgroundColor: "black",
          color: "white",
        })
        break;
      default:
        document.body.style.backgroundColor = "white"
    }

    console.log(clr)

  }




  return (<>
    <Router>
      <ButtonAppBar mode={theme} toggle={changeTheme} />

      <AlertComponent alert={alert} />
      <Routes>
        <Route path="/about" element={<AboutPage />}>
        </Route>
        <Route path="/" element={<TextAnalyzerApp showAlert={showAlert} mode={theme} />}>

        </Route>
      </Routes>

    </Router>




  </>);



}

export default App;
