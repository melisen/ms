import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomContext from './Context/CustomContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const themeMS = createTheme({
  palette:{
    mode: 'light',
    primary:{
      main: '#3D5A80',
      dark:'#263850'
    },
    secondary:{
      main: '#98C1D9'
    },
    info:{
    main:'#EE6C4D'
    },
    action:{
      hover:'#213146',
      hoverOpacity:0.05
    }
  },
  typography:{
    fontFamily: 'Roboto',
    h1:{
      fontWeight: '900',
      fontSize:"2.2rem",
      lineHeight:1.8
    },
    h2:{
      fontWeight: '900',
      fontSize:"2rem",
    },
    h3:{
      fontSize:"2rem",
      fontWeight: '700',
    },
    h5:{
      fontSize:"1.2rem",
      lineHeight:1.8,
      marginTop:8,
      marginBottom:8
    },
    button:{
      fontWeight: '700'
    },
    body1:{
      fontWeight: '500'
    },
    body2:{
      fontWeight: '300'
    }
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={themeMS}>
    <CustomContext>
      <App />
    </CustomContext>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
