import styled from 'styled-components';

export const Paragraph = styled.p`
    text-align: justify;
`;

export const MapsContent = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    content: url('/maps.jpg');
`;

export const CarouselContent = styled.div`
    width: 100%;
    height: 250px;

    @media screen and (min-width: 720px)
    {
        height: 350%;
    }
`;
