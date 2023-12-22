import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Roters } from './router/router';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation()
  
  useEffect(() => {
    if (i18n.language === 'enUS') {
      document.getElementById('body').style.direction ='ltr';
    } else {
      document.getElementById('body').style.direction ='rtl';

    }
  },[])
  return (
    <RouterProvider router={Roters}>

    </RouterProvider>
  );
}

export default App;
