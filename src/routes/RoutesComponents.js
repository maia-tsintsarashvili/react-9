import React from 'react';
import { useRoutes } from 'react-router-dom';
import {  LoginPage,SignupPage } from '../pages';
import {HomePage} from '../pages/HomePage';



export const RoutesComponents = () => {
  return (
    <div>
      {useRoutes([
        {
          path: "/login",
          element: <LoginPage/>,
        },

        {
          path: "/signupPage",
          element: <SignupPage/>,
        },

        {
          path: "/",
          element: <HomePage/>,
        }
      
      ])}
    </div>
  );
};


