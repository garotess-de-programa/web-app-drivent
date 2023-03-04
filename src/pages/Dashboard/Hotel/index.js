import { useState } from 'react';
import * as S from '../../../components/Typography';
import useHotel from '../../../hooks/api/useHotel';
import ContentUnavailable from '../../../components/Page/Unavailable';
import styled from 'styled-components';
import Hotel from '../../../components/Hotel';

import { useRooms } from '../../../hooks/api/useRooms';

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
  const [rooms, setRooms] = useState([]);
  const [selected, setSelect] = useState(0);

  const { hotels, hotelsLoading, hotelsError } = useHotel();
  const { mutation } = useRooms(setSelect, setRooms);

  if (hotelsLoading) {
    return <Page error={true}>Carregando</Page>;
  }
  if (hotelsError) {
    return <Page error={true}>{hotelsError.message}</Page>;
  }

  return (
    <Page>
      <S.SubtitleTypography variant="h5">Primeiro, escolha seu hotel</S.SubtitleTypography>
      <Container show={true}>
        {hotels?.map((hotel) => (
          <Hotel hotel={hotel} selected={selected} handleRooms={mutation.mutate} />
        ))}
      </Container>
      <ContainerRooms show={selected !== 0}>
        <S.StyledTypography variant="h4">Ótima opção! Agora escolha seu quarto.</S.StyledTypography>
        <Container show={!!rooms}>
          {rooms?.map((room) => (
            <div>{room?.name}</div>
          ))}
        </Container>
      </ContainerRooms>
    </Page>
  );
}

const Container = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  gap: 16px;

  @media (max-width: 810px) {
    display: ${({ show }) => (show ? 'grid' : 'none')};
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
  }
  @media (max-width: 610px) {
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerRooms = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;
