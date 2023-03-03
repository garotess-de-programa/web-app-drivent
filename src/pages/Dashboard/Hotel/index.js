import * as S from '../../../components/Typography';
import useHotel from '../../../hooks/api/useHotel';
import ContentUnavailable from '../../../components/Page/Unavailable';
import Hotel from '../../../components/Hotel';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { useState } from 'react';

function Page(props) {
  return (
    <>
      <S.StyledTypography variant="h4">Escolha de hotel e quarto</S.StyledTypography>
      {props.error ? (
        <ContentUnavailable>
          <S.StyledTypography variant="h6" {...props} />
        </ContentUnavailable>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}

export default function HotelPage() {
  const { hotels, hotelsLoading, hotelsError } = useHotel();
  const [selected, setSelect] = useState(0);
  if (hotelsLoading) {
    return <Page error>Carregando</Page>;
  }
  if (hotelsError) {
    return <Page error>{hotelsError.message}</Page>;
  }

  const handleSelected = (id) => {
    selected === id ? setSelect(0) : setSelect(id);
  };

  return (
    <Page>
      <S.SubtitleTypography variant="h5">Primeiro, escolha seu hotel</S.SubtitleTypography>
      <ContainerHotels>
        {hotels?.map((hotel) => (
          <Hotel key={hotel.id} clicked={selected === hotel.id} onClick={() => handleSelected(hotel.id)}>
            <img src={hotel.image} alt={hotel.name} />
            <HotelName>{hotel.name}</HotelName>
            <Subtitle>Tipos de acomodação:</Subtitle>
            <Detail>Single e Double</Detail>
            <Subtitle>Vagas disDetailoníveis:</Subtitle>
            <Detail>103</Detail>
          </Hotel>
        ))}
      </ContainerHotels>
    </Page>
  );
}

const ContainerHotels = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 810px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns:
      repeat(auto-fit, minmax(196px, 1fr));
  }
  @media (max-width: 610px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;

const HotelName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  width: 168px;
  font-weight: bold;
`;

const Detail = styled(Subtitle)`
  margin-top: 4px;
  font-weight: normal;
`;
