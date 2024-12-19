import Container from "../../components/Conteiner";
import AuthForm from "../../components/Auth";
import illustration from "../../images/illustration_1x_mob.jpg";

const LoginPage = () => {
  return (
    <Container>
      <img src={illustration} alt="illustration" />
      <ul>
        <li>
          <p>Word</p>
        </li>
        <li>
          <p>Translation</p>
        </li>
        <li>
          <p>Grammar</p>
        </li>
        <li>
          <p>Progress</p>
        </li>
      </ul>
      <h1>Login</h1>
      <p>Please enter your login details to continue using our service:</p>
      <AuthForm />
    </Container>
  );
};

export default LoginPage;
