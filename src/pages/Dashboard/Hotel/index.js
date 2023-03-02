import * as S from '../../../components/Typography';
import useHotel from '../../../hooks/api/useHotel';
import ContentUnavailable from '../../../components/Page/Unavailable';

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
      <div>
        {hotels?.map((hotel) => (
          <div key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <div>{hotel.name}</div>
          </div>
        ))}
      </div>
    </Page>
  );
}
