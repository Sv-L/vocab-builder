import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<BeatLoader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Layout;
