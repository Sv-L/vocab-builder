import AuthForm from "../../components/Auth"
import LogoImg from '../../assets/masc-group.svg'
import {LodinPagesStyles, LogoStyles} from "./LoginPageStyles"
import Container from '../../components/Container'

const LoginPage = () => {
    return (
      <Container> <LodinPagesStyles>
        <LogoStyles>
        <a href="/" target="_blank">
          <img src={LogoImg} alt="medy logo" />
        </a>
            <p>E-Pharmacy</p>
            </LogoStyles>
            <h1>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us</h1>
      <AuthForm/>
        </LodinPagesStyles>
        
        </Container>
        
    )
}

export default LoginPage 