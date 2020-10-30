import React, { createRef } from 'react';
import Card from '~/components/Card';
import Stars from '~/components/Stars';
import { InputField } from '~/css/inputs';
import ComboDisabilities from '~/components/ComboBox';
import { DefaultBackground, DefaultBox } from '~/css/styles';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.match.params.address,
            inputSearch: createRef()
        } 
    }

    handleStars = (event) => {
        
    }

    handleKeyPressSearch = (event) => {
        if(event.key === 'Enter') {
            this.props.history.push("/search/" + this.inputSearch.value);
            window.location.reload();
        }
    }

    render() {
        let cards = []
        
        for(let i=0; i<5; i++){
            cards.push(
                <div key={i}>
                    <Card id={i} stars={i}/><br/>
                </div>
            );
        }

        return (
            <DefaultBackground>
                <DefaultBox>
                    <h1>Encontre aqui os melhores lugares !</h1>
                    <InputField label="Endereço" 
                        required
                        placeholder="Digite aqui um endereço..." 
                        margin="normal" type="text" 
                        defaultValue={this.state.address} 
                        inputRef={(input) => this.inputSearch = input}
                        onKeyPress={(e) => this.handleKeyPressSearch(e)}
                        />
                    <div>
                        <ComboDisabilities/>
                        <Stars handle={this.handleStars}/>
                    </div>
                    <hr/>
                    <br/>
                    { cards }
                </DefaultBox>
            </DefaultBackground>
        )
    }
}
