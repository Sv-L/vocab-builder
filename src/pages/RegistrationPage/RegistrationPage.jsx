import AuthForm from "../../components/Auth/AuthForm";
import Container from "../../components/Conteiner";
import illustration from "../../images/illustration_1x_mob.jpg";

const RegistrationPage = () => {
  return (
    <Container>
      <img src={illustration} alt="illustration" />
      <h1>Register</h1>
      <p>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
      <AuthForm />
    </Container>
  );
};

export default RegistrationPage;
