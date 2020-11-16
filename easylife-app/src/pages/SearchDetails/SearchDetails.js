import React, { useState, useEffect } from 'react';
import Stars from '~/components/Stars';
import { Link } from 'react-router-dom';
import Favorite from '~/components/Favorite';
import { DefaultBackground, DefaultBox } from '~/css/styles';
import { PrimaryButton, SecundaryButton } from '~/css/buttons';

import { getDeepLink } from '~/services/uber';
import { Carousel } from 'react-responsive-carousel';

import { Paragraph, MapsContent, CarouselContent } from './SearchDetails.style';

import { FindEstablishmentById, AddFavorite, RemoveFavorite } from '~/services/management';


const SearchDetails = (props) => {
    const id = props.match.params.id;

    const [establishment, setEstablishment] = useState({});
    const [isFavorite, setIsFavorite] = useState(null);
    const [stars, setStars] = useState(null);
    const [carouselContent, setCarouselContent] = useState(<div></div>);
    
    useEffect(() => {
        async function fetchData() {
            const establishment = await FindEstablishmentById(id);
    
            setEstablishment(establishment);
            setIsFavorite(establishment.isFavorite ? 1 : 0);
            setStars(establishment.estrelas);
            setCarouselContent(renderFotos(establishment.fotos ?? []));
        }

        fetchData();
    },[]);

    function handleGoogleMaps() {
        window.open(
            `http://www.google.com/maps/place/${establishment.endereco.latitude},${establishment.endereco.longitude}`,
            '_blank'
        );
    }

    function handleUber() {
        const link = getDeepLink(establishment.nomeFantasia, establishment.latitude, establishment.longitude);
        window.open(link, '_blank');
    }

    async function handleFavorite(value) {
        if(value == 1)
            await AddFavorite(id);
        else
            await RemoveFavorite(id);
     }

    function renderFotos (fotos) {
        let contents = []

        for(let i=0; i< fotos.length; i++){
            let foto = fotos[i];
            contents.push(
                <CarouselContent key={i}>
                    <img src={foto.url} alt={foto.descricao} />
                    <p className="legend">{foto.descricao}</p>
                </CarouselContent>
            );
        }

        return contents;
    }
    
    return (
        <DefaultBackground>
            <DefaultBox>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 style={{ textAlign: 'left' }}>{establishment.nomeFantasia}</h1>
                    {
                        (isFavorite != null) 
                        ? <Favorite isFavorite={isFavorite} handle={handleFavorite} />
                        : <div></div>
                    }
                    
                </div>
                <h2 style={{ textAlign: 'left' }}>{establishment.tipoEstabelecimento}</h2>
                <Paragraph>{establishment.descricao}</Paragraph>
                <MapsContent />
                <h1 style={{ textAlign: 'left' }}>Facilidades</h1>
                <Paragraph>{establishment.facilidades}</Paragraph>
                {
                    (stars != null)
                    ? <Stars stars={stars} isReadOnly={true} hasTypography={false} />
                    : <div></div>
                }
  
                <Carousel showThumbs={false}>
                    { carouselContent }
                </Carousel>

                <h1>Horário de Funcionamento</h1>
                <p>{establishment.horario}</p>

                <PrimaryButton onClick={handleGoogleMaps}>Abrir no Google Maps</PrimaryButton>
                <PrimaryButton onClick={handleUber}>Abrir no Uber</PrimaryButton>
                <Link to={{
                    pathname: '/feedback/' + id
                }} style={{ textDecoration: 'none' }}>
                    <SecundaryButton>Avaliar o Estabelecimento</SecundaryButton>
                </Link>
            </DefaultBox>
        </DefaultBackground>
    )
}

export default SearchDetails;