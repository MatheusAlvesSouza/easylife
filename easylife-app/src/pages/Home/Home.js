import React from 'react';
import { Link } from 'react-router-dom';
import InputWithIcon from '~/components/InputIcon';
import { getAccountInfo, logout } from '~/services/auth';
import { PrimaryButton, SecundaryButton } from '~/css/buttons';
import { LogoApp, DefaultBackground, DefaultBox } from '~/css/styles';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            username: getAccountInfo().nome.split(' ')[0]
        };
    }

    handleLogout = async (e) => {
        e.preventDefault();
        logout();
        this.props.history.push("/");
    }
    
    handleSearchInput = (value) => {
        this.setState({searchInput: value})
    }

    render() {
        return (
            <DefaultBackground>
                <DefaultBox>
                    <h1>Bem vindo, {this.state.username}!</h1>
                    <LogoApp/>

                    <InputWithIcon label="Pesquise um lugar ou um endereço !" 
                        handle={this.handleSearchInput} defaultValue={this.state.searchInput}/>
                    
                    <Link to={{
                        pathname: '/search/' + this.state.searchInput
                        }} style={{ textDecoration: 'none' }}>
                        <PrimaryButton>Buscar</PrimaryButton>
                    </Link>

                    <PrimaryButton>Favoritos</PrimaryButton>
                    <PrimaryButton>Meus Dados</PrimaryButton>
                    <SecundaryButton onClick={this.handleLogout}>Sair</SecundaryButton>
                </DefaultBox>
            </DefaultBackground>
        )
    }
}