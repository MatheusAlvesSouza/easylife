import React from 'react';
import Stars from '~/components/Stars';
import { Wrapper } from './Card.style';
import { useHistory } from "react-router-dom";

export default function Card(props) {
    let history = useHistory();
    
    const handleClick = (e) => {
        e.preventDefault();
        history.push("/searchDetails/" + props.establishment._id);
    }

    return(
        <Wrapper onClick={handleClick}>
            <Stars stars={props.establishment.estrelas} isReadOnly={true} hasTypography={false}/>

            <div  style={{ gridRowStart: 1,  gridRowEnd: 5, }} >
                <img src={props.establishment.fotos[0].url} alt={props.establishment.fotos[0].descricao} style={
                    {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }
                    }
                />
            </div>
            <div 
                style={{ textAlign:"left", fontWeight:"bold"}}>
                    {props.establishment.nomeFantasia}
            </div>
            <div 
                style={{ textAlign:"left"}}>
                    {props.establishment.tipoEstabelecimento}
            </div>
            <div 
                style={{ textAlign:"left"}}>
                {
                `${props.establishment.endereco.logradouro}
                ${props.establishment.endereco.numero},
                ${props.establishment.endereco.bairro},
                ${props.establishment.endereco.cidade} - SP
                `
                }
            </div>
        </Wrapper>
    )
}