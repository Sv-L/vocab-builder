import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getError } from "../../redux/auth/authSelectors";
import { validationSchema } from "./validationSchema";
import { signUpAPI, signInAPI } from "../../API/authAPI";

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const location = useLocation();
  const isRegistrationPage = location.pathname === "/registration";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema(isRegistrationPage)),
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const api = isRegistrationPage ? signUpAPI : signInAPI;
    dispatch(api({ data }));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isRegistrationPage && (
          <input id="name" placeholder="Name" {...register("name")}></input>
        )}
        {errors.name && <p>{errors.name.message}</p>}
        <input id="email" placeholder="Email" {...register("email")}></input>
        {errors.email && <p>{errors.email.message}</p>}
        <div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            {...register("password")}
          ></input>
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">
          {isRegistrationPage ? "Register" : "Login"}
        </button>
      </form>
      {error && <p>{error}</p>}
      <Link to={isRegistrationPage ? "/login" : "/registration"}>
        {isRegistrationPage ? "Login" : "Register"}
      </Link>
    </>
  );
};

export default AuthForm;
