import { Route, Routes } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import ECommerce from '../pages/Dashboard/ECommerce';
import Settings from '../pages/Settings';
import Orders from '../pages/Management/OrdersPage';
import Product from '../pages/Management/ProductPage';
import Customers from '../pages/Management/CustomersPage';
import { Services } from '../pages/Services';

export const RouterConfigs = () => {
 return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Admin | dashboard" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/management/orders"
          element={
            <>
              <PageTitle title="Orders " />
              <Orders />
            </>
          }
        />
        <Route
          path="/management/products"
          element={
            <>
              <PageTitle title="Products" />
              <Product />
            </>
          }
        />
        <Route
          path="/management/customers"
          element={
            <>
              <PageTitle title="Customers" />
              <Customers />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <PageTitle title="Services" />
              <Services />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
      </>
 )
}