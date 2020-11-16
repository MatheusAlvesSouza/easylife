import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Stars from '~/components/Stars';
import { TextArea } from './Feedback.style';
import { PrimaryButton } from '~/css/buttons';
import { SendFeedBack, FindFeedBacksByEstablishment } from '~/services/management';
import { DefaultBackground, DefaultBox } from '~/css/styles';

const Feedback = (props) => {
    const id = props.match.params.id;
    const history = useHistory();
    const [text, setText] = useState("");
    const [stars, setStars] = useState(3);
    const [feedbacks, setFeedbacks] = useState([]);
    const [cards, setCards] = useState(<div></div>);

    useEffect(() => {
        async function fetchData() {
            const feedbacks = await FindFeedBacksByEstablishment(id);

            setFeedbacks(feedbacks);
            setCards(renderCards(feedbacks ?? []));
        }

        fetchData();
    }, []);

    function renderCards(feedbacks) {
        let cards = []

        for(let i =0 ; i < feedbacks.length; i++){
            cards.push(
                <div key={i} style={{border: "solid 1px #bbb", borderRadius: "10px", margin: "10px"}}>
                    <h3>Pessoa Anônima</h3>
                    <Stars stars={feedbacks[i].estrelas} isReadOnly={true} hasTypography={false}/>
                    <span>{feedbacks[i].comentario}</span>
                </div>
            );
        }

        return cards;
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleStars = (value) => {
        setStars(value);
    }

    const sendFeedback = async () => {
        const feedback = {
            comentario: text,
            estrelas: stars,
            proprietarioId: id,
        };

        await SendFeedBack(feedback);

        history.go(0);
    }

    return (
        <DefaultBackground>
            <DefaultBox>
                <Stars handle={handleStars} />
                <TextArea
                    placeholder="Digite aqui oque achou desse estabelecimento !"
                    onChange={handleChange} />
                <PrimaryButton onClick={sendFeedback}>Avaliar</PrimaryButton>
                <hr></hr>
                <h1>Avaliações Recentes</h1>
                {cards}
            </DefaultBox>
        </DefaultBackground>
    )
}

export default Feedback;