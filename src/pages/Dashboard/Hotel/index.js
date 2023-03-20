import { useState } from 'react';
import * as S from '../../../components/Typography';
import * as St from '../../../components/Hotel/style';
import useHotel from '../../../hooks/api/useHotel';
import { UnavailablePage, HotelPage as Hotel, RoomPage } from '../../../components';
import styled from 'styled-components';
import useBooking from '../../../hooks/api/useBooking';
import useCreateBooking from '../../../hooks/api/useCreateBooking';
import useChangeBooking from '../../../hooks/api/useChangeBooking';

import { useRooms } from '../../../hooks/api/useRooms';
import { BookingPage } from '../../../components/Hotel/Booking';

export function Page(props) {
  return (
    <>
      <S.StyledTypography variant="h4">{props.title}</S.StyledTypography>
      {props.error ? (
        <UnavailablePage>
          <S.StyledTypography variant="h6">{props.children}</S.StyledTypography>
        </UnavailablePage>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}

export default function HotelPage() {
  const [rooms, setRooms] = useState([]);
  const [selected, setSelect] = useState(0);
  const [selectedRoom, setSelectRoom] = useState(0);
  const [reservedRoom, setReservedRoom] = useState(false);
  const { hotels, hotelsLoading, hotelsError } = useHotel();
  const { mutation } = useRooms(setSelect, setRooms);

  const { bookingUser, bookingUserAct } = useBooking();
  const { createBookingAct } = useCreateBooking();
  const { changeBookingAct } = useChangeBooking();

  if (hotelsLoading) {
    return (
      <Page error={true} title="Escolha de hotel e quarto">
        Carregando...
      </Page>
    );
  }
  if (hotelsError) {
    return (
      <Page error={true} title="Escolha de hotel e quarto">
        {hotelsError.message}
      </Page>
    );
  }

  if (bookingUser && reservedRoom) {
    return (
      <Page title="Escolha de hotel e quarto">
        <S.SubtitleTypography variant="h5">Você já escolheu seu quarto:</S.SubtitleTypography>
        <BookingPage bookings={bookingUser} setReservedRoom={setReservedRoom} />
      </Page>
    );
  }

  const reserveRoom = async () => {
    if (bookingUser) {
      await changeBookingAct({ bookingId: bookingUser.id, body: { roomId: selectedRoom } });
    } else {
      await createBookingAct({ roomId: selectedRoom });
    }
    await bookingUserAct();
    setReservedRoom(true);
  };

  return (
    <Page title="Escolha de hotel e quarto">
      <S.SubtitleTypography variant="h5">Primeiro, escolha seu hotel</S.SubtitleTypography>
      <Container show={true}>
        {hotels?.map((hotel, index) => (
          <Hotel key={index} hotel={hotel} selected={selected} handleRooms={mutation.mutate} />
        ))}
      </Container>
      <ContainerRooms show={selected !== 0}>
        <S.SubtitleTypography variant="h5">Ótima opção! Agora escolha seu quarto.</S.SubtitleTypography>
        <Container show={!!rooms}>
          {rooms?.map((room, index) => (
            <RoomPage key={index} room={room} setSelectRoom={setSelectRoom} selectedRoom={selectedRoom} />
          ))}
        </Container>
      </ContainerRooms>
      <St.Button onClick={reserveRoom} show={selectedRoom !== 0}>
        RESERVAR QUARTO
      </St.Button>
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
  margin-top: 36px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
`;
