import React, { useState, useEffect } from 'react';
import Stars from '~/components/Stars';
import { Establishment, Favorites } from '~/mocky';
import { Link } from 'react-router-dom';
import Favorite from '~/components/Favorite';
import { DefaultBackground, DefaultBox } from '~/css/styles';
import { PrimaryButton, SecundaryButton } from '~/css/buttons';

import { getDeepLink } from '~/services/uber';
import { Carousel } from 'react-responsive-carousel';

import { Paragraph, MapsContent, CarouselContent } from './SearchDetails.style';


const SearchDetails = (props) => {

    const id = props.match.params.id;

    const [establishment, setEstablishment] = useState({});
    const [isFavorite, setIsFavorite] = useState(null);
    
    useEffect(() => {
        const favorite = Favorites.estabelecimentos.find(x => x.id == id);

        setEstablishment(Establishment);
        setIsFavorite((favorite == null) ? false : true);
    }, [id]);

    function handleGoogleMaps() {
        window.open(
            `http://www.google.com/maps/place/${Establishment.latitude},${Establishment.longitude}`,
            '_blank'
        );
    }

    function handleUber() {
        const link = getDeepLink(Establishment.nomeFantasia, Establishment.latitude, Establishment.longitude);
        window.open(link, '_blank');
    }

    function handleFavorite() { }

    return (
        <DefaultBackground>
            <DefaultBox>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 style={{ textAlign: 'left' }}>{establishment.nomeFantasia}</h1>
                    
                    {
                        (isFavorite != null) 
                        ? <Favorite isFavorite={isFavorite} handle={handleFavorite} />
                        : null
                    }
                    
                </div>
                <h2 style={{ textAlign: 'left' }}>{establishment.tipoEstabelecimento}</h2>
                <Paragraph>{establishment.descricao}</Paragraph>
                <MapsContent />
                <h1 style={{ textAlign: 'left' }}>Facilidades</h1>
                <Paragraph>{establishment.facilidades}</Paragraph>
                <Stars stars={establishment.estrelas} isReadOnly={true} hasTypography={false} />

                <Carousel>
                    <CarouselContent>
                        <img src="/bullger.jpg" alt='Hamburguer' />
                        <p className="legend">Hamburguer</p>
                    </CarouselContent>
                    <CarouselContent>
                        <img src="/estabelecimento.jpg" alt='Estabelecimento' />
                        <p className="legend">Estabelecimento</p>
                    </CarouselContent>
                    <CarouselContent>
                        <img src="/estabelecimento2.jpg" alt='Estabelecimento' />
                        <p className="legend">Estabelecimento</p>
                    </CarouselContent>
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