import React from 'react';
import Stars from '~/components/Stars';
import { Establishment } from '~/mocky';
import { TextArea } from './Feedback.style';
import { PrimaryButton } from '~/css/buttons';
import { getAccountInfo } from '~/services/auth';
import { DefaultBackground, DefaultBox } from '~/css/styles';

export default class SearchDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            text: "",
            stars: 3
        };
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    handleFeedback = () => {
        const user = getAccountInfo();

        const feedback = {
            text: this.state.text,
            stars: this.state.stars,
            idEstabelecimento: this.state.id,
            idUsuario: user.id
        };

        this.props.history.goBack();
    }

    handleStars = (value) => {
        this.setState({stars: value});
    }

    render() {
        return (
            <DefaultBackground>
                <DefaultBox>
                    <h1 style={{textAlign: 'center'}}>{Establishment.nomeFantasia}</h1>
                    <Stars handle={this.handleStars}/>
                    <TextArea
                        placeholder="Digite aqui oque achou desse estabelecimento !" 
                        onChange={this.handleChange} />
                    <PrimaryButton onClick={this.handleFeedback}>Avaliar</PrimaryButton>
                </DefaultBox>
            </DefaultBackground>
        )
    }
}