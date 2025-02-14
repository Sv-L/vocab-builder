import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "../Routes/PublicRoute";
import PrivateRoute from "../Routes/PrivateRoute";
import Layout from "./Layout";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { geIsLoggedIn } from "../redux/auth/authSelectors";

const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const DictionyPage = lazy(() => import("../pages/DictionaryPage"));
const RecommendPage = lazy(() => import("../pages/RecommendPage"));
const TrainingPage = lazy(() => import("../pages/TrainingPage"));

const App = () => {

  const isLoggedIn = useSelector(geIsLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route
          index
          element={isLoggedIn ? <Navigate to="/dictionary" /> : <Navigate to="/registration" />}
        />
        <Route
          path="/registration"
          element={
            <PublicRoute redirectTo="/dictionary" restricted>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/dictionary" restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dictionary"
          element={
            <PrivateRoute redirectTo="/login">
              <DictionyPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/recommend"
          element={
            <PrivateRoute redirectTo="/login">
              <RecommendPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/training"
          element={
            <PrivateRoute redirectTo="/login">
              <TrainingPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
export default App;
