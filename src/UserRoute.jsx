import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import AuthProvider from 'AuthProvider/AuthProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';
import PrivateRoute from 'PrivateRoute/PrivateRoute';
import PublicRoute from 'PublicRoute/PublicRoute';

const NavBarAuth = lazy(() => import('./components/navbar/NavbarAuth/NavBarAuth'));
const Conteiner = lazy(() => import('./components/Container/Conteiner'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/Contacts'));
const LoginPage = lazy(() => import('./pages/LoginPage/Login'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/Register'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))

const UserRoute = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter basename='/goit-react-hw-08-phonebook'>
            <Suspense fallback={<Loader />}>
              <Conteiner title="Phonebook">
                <NavBarAuth />
                <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                  </Route>
                  <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                  </Route>
                  <Route path="*" element={<HomePage/>} />
                </Routes>
              </Conteiner>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default UserRoute; 