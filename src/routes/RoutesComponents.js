import React from 'react';
import { useRoutes } from 'react-router-dom';
import {  LoginPage,ProductFormPage,SignupPage } from '../pages';
import {HomePage} from '../pages/HomePage';
import { Layout } from '../components/Layout';
import { ProtectedRoute } from './ProtectedRoute';
import { useUser } from '../hooks';
import { isUserAdmin } from '../helpers';



export const RoutesComponents = () => {
 const {userData} = useUser();
 const isAdmin = isUserAdmin(userData);

  return (
    <div>
      {useRoutes([
        {
          path: "/login",
          element: <LoginPage />,
        },

        {
          path: "/signup",
          element: <SignupPage />,
        },

        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
              path: "/products/add",
              element: (
                <ProtectedRoute hasAccess={true}>
                  <ProductFormPage />
                </ProtectedRoute>
              ),
            },
          ],
        },
      ])}
    </div>
  );
};


