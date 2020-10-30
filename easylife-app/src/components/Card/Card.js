import React from 'react';
import Stars from '~/components/Stars';
import { Wrapper } from './Card.style';
import { useHistory } from "react-router-dom";

export default function Card(props) {
    let history = useHistory();
    
    const handleClick = (e) => {
        e.preventDefault();
        history.push("/searchDetails/" + props.id);
    }

    return(
        <Wrapper onClick={handleClick}>
            <Stars stars={props.stars} isReadOnly={true} hasTypography={false}/>

            <div  style={{ gridRowStart: 1,  gridRowEnd: 5, }} >
                <img src={"/estabelecimento.jpg"} alt="alt para colocar" style={
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
                    Hamburgueria Freddy's !!!
            </div>
            <div 
                style={{ textAlign:"left"}}>
                    Junk Food - Fast Food
            </div>
            <div 
                style={{ textAlign:"left"}}>
                R. Fradique Coutinho, 1136 - Vila Madalena, São Paulo
            </div>
        </Wrapper>
    )
}