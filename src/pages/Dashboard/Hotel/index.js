import * as S from '../../../components/Typography';
import useHotel from '../../../hooks/api/useHotel';
import ContentUnavailable from '../../../components/Page/Unavailable';
import styled from 'styled-components';
import Hotel from '../../../components/Hotel';

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
  
  if (hotelsLoading) {
    return <Page error>Carregando</Page>;
  }
  if (hotelsError) {
    return <Page error>{hotelsError.message}</Page>;
  }

  return (
    <Page>
      <S.SubtitleTypography variant="h5">Primeiro, escolha seu hotel</S.SubtitleTypography>
      <ContainerHotels>
        {hotels?.map((hotel) => <Hotel hotel={hotel}/>)}
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
