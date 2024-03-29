// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import { loader } from "./components/Barang/BarangContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Root from "./pages/Root";
import UserHome from "./pages/Backend/UserHome";
import PenggunaRoot from "./pages/Backend/PenggunaRoot";
import Profile from "./pages/Backend/Profile";
import History from "./pages/Backend/History";
import Cart from "./pages/Backend/Cart";
import Notification from "./pages/Backend/Notification";
import Anime from "./pages/Backend/Admin/Anime";
import { AnimeLoader } from "./components/Anime/AnimeData";
import { AnimeFormAction } from "./components/Anime/AnimeForm";
import Dashboard from "./pages/Dashboard";
import BackendRoot from "./pages/Backend/Admin/BackendRoot";
import ReportViewer from "./pages/ReportViewer";
import { login, register } from "./actions/auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Root />}>
        <Route index element={<Home />} loader={loader} />
        <Route path="login" element={<Login />} action={login} />
        <Route path="register" element={<Register />} action={register} />
        <Route path="report" element={<ReportViewer />} />
      </Route>
      <Route element={<PenggunaRoot />}>
        <Route path="home" element={<UserHome />} loader={loader} />
        <Route path="profile" element={<Profile />} />
        <Route path="history" element={<History />} />
        <Route path="cart" element={<Cart />} />
        <Route path="notification" element={<Notification />} />
      </Route>
      <Route element={<BackendRoot />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin">
          <Route
            path="anime"
            element={<Anime />}
            loader={AnimeLoader}
            action={AnimeFormAction}
          />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
