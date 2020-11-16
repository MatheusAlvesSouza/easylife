import React, { useEffect, useState } from 'react';
import Card from '~/components/Card';
import Stars from '~/components/Stars';
import { InputField } from '~/css/inputs';
import ComboDisabilities from '~/components/ComboBox';
import { DefaultBackground, DefaultBox } from '~/css/styles';

import { getAccountInfo } from '~/services/auth';
import { FindEstablishmentsByWord } from '~/services/management';

const Search = (props) => {
    const address = props.match.params.address;
    const accountInfo = getAccountInfo();

    const [stars, setStars] = useState(3);
    const [cards, setCards] = useState(<div></div>);
    const [inputSearch, setInputSearch] = useState(address);
    const [establishments, setEstablishments] = useState([]);
    const [desabilities, setDesabilities] = useState(accountInfo.cliente.deficiencias);
    
    useEffect(() => {
        async function fetchData() {
            const establishments = await FindEstablishmentsByWord(address);

            setEstablishments(establishments);
            setCards(renderCards(runFilter(establishments, stars, desabilities) ?? []));
        }

        fetchData();
    }, []);

    function renderCards(establishments) {
        let cards = []

        for(let i =0 ; i < establishments.length; i++){
            cards.push(
                <div key={i}>
                    <Card establishment={establishments[i]}/><br/>
                </div>
            );
        }

        return cards;
    }

    const handleStars = (event) => {
        setStars(event);
        setCards(renderCards(runFilter(establishments, event, desabilities) ?? []));
    }

    const runFilter = (establishments, stars, desabilities) => {
        return establishments.filter(establishment => {
            return establishment.estrelas >= (stars - 0.4) &&
                establishment.deficiencias.every((deficiencia) => desabilities.includes(deficiencia));
        });
    }
    const handleCombobox = (event) => {
        const desabilitiesHandle = [];

        if (event.checkedFisica)
            desabilitiesHandle.push(1)
        if (event.checkedAuditiva)
            desabilitiesHandle.push(2)
        if (event.checkedVisual)
            desabilitiesHandle.push(3)

        setDesabilities(desabilitiesHandle);
        setCards(renderCards(runFilter(establishments, stars, desabilitiesHandle) ?? []));
    }

    const handleKeyPressSearch = (event) => {
        if(event.key === 'Enter') {
            props.history.push("/search/" + inputSearch.value);
            window.location.reload();
        }
    }

    return (
        <DefaultBackground>
                <DefaultBox>
                    <h1>Encontre aqui os melhores lugares !</h1>
                    <InputField label="Endereço" 
                        required
                        placeholder="Digite aqui um endereço..." 
                        margin="normal" type="text" 
                        defaultValue={address} 
                        inputRef={(input) => setInputSearch(input)}
                        onKeyPress={(e) => handleKeyPressSearch(e)}
                        />
                    <div>
                        <ComboDisabilities handle={handleCombobox}/>
                        <Stars handle={handleStars}/>
                    </div>
                    <hr/>
                    <br/>
                    { cards }
                </DefaultBox>
            </DefaultBackground>
    )
}

export default Search;