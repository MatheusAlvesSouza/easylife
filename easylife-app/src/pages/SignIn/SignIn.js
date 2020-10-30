import React from 'react';
import { login } from '~/services/auth';
import { Link } from 'react-router-dom';
import { InputField } from '~/css/inputs';
import { SignInUser } from '~/services/management';
import { PrimaryButton, SecundaryButton } from '~/css/buttons';
import { LogoApp, DefaultBox, DefaultBackground,Progress } from '~/css/styles';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: React.createRef(),
            password: React.createRef(),
            hiddenLogin: false,
            error: null
        }
    }

    componentDidMount(){
        this.email.focus();
    }
    
    handleKeyPress = (key, event) => {
        if(event.key === 'Enter')
            key.focus(); 
    }

    handleSignIn = async (e) => {
        e.preventDefault();
        
        this.setState({ hiddenLogin: true});

        const result = await SignInUser(this.email.value, this.password.value);

        if(result.token) {
            login(result.token, result.accountInfo);
            this.props.history.push("/home");
        }
        else {
            this.setState ({error: result.error});
        }
        
        this.setState({ hiddenLogin: false});
    }

    render() {
        return (
            <DefaultBackground>
                <DefaultBox>
                    <form onSubmit={this.handleSignIn}>
                    <LogoApp></LogoApp>
                    
                    <InputField label="Email" required
                        placeholder="Digite aqui o seu email..." variant="outlined"
                        margin="normal" type="email" inputRef={input => this.email = input}
                        onKeyPress={(event) => this.handleKeyPress(this.password, event)} />
                    <InputField label="Senha" required
                        placeholder="Digite aqui a sua senha..."
                        variant="outlined" type="password" 
                        inputRef={input => this.password = input}/>

                    {this.state.error && 
                        <p style={{color:"red"}}>
                            {this.state.error}
                        </p>
                    }

                    {
                        this.state.hiddenLogin 
                        ? <Progress/>
                        : <PrimaryButton>Entrar</PrimaryButton>
                    } 

                    <Link to="signUp" style={{ textDecoration: 'none' }}>
                        <SecundaryButton>Cadastrar</SecundaryButton>
                    </Link>
                    </form>
                </DefaultBox>
            </DefaultBackground>
        )
    }
}