import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from './App';
import Login from './Login';
import Register from './Register';
import {useState, useEffect, createContext} from 'react';
import {RouterProvider} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { logare } from './diverse';
import Redirect from './components/Redirect';
import Welcome from './Welcome';
import Share from './Share';


let AccountContext = createContext();

const Rutare = () => {
  // console.log('Executare')
  const auth = getAuth();

  

  useEffect (() => {
    logare((dateAccount) => {
      // console.log('rutare')
      setAccount(dateAccount)})
    
  }, [])
  

    const [account, setAccount] = useState({});
    const router = createBrowserRouter([

      {
        path: "/",
        element: <Redirect />,
      },

        {
          path: "/c",
          element: <App />,
          children: [
            {
              path: "/c/:idConvURL",
              element: <App />,
              
            },
          ],
        },
        
      
        {
          path: "/register",
          element: <Register />
        },
      
        {
          path: "/login",
          element: <Login />
        },

        {
          path: "/welcome",
          element: <Welcome />
        },
        {
          path: "/share",
          element: <Share />
        }

    ]);
      
  return (
    <div>
        <AccountContext.Provider value = {{account, setAccount}}>
            <RouterProvider router={router} />
        </AccountContext.Provider>
    </div>
  )
}
export {Rutare, AccountContext}
