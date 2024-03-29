import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider} from '@mui/material';
import theme from './Theme';
import { HashRouter } from 'react-router-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';





ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    {/* used hash router */}
    <HashRouter>
    <App />
    </HashRouter>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
