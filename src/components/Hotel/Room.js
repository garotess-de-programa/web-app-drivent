import styled, { css } from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

export function RoomPage({ room, setSelectRoom, selectedRoom }) {
  let peopleInRoom = room.Booking.length;
  const clickedRoom = room.id === selectedRoom;
  const icons = [];
  let selectOneRoom = false;

  for (let i = 0; i < room.capacity; i++) {
    if (peopleInRoom) {
      icons.push({
        icon: <BsFillPersonFill size="30px" />,
        available: false,
      });
      peopleInRoom--;
      continue;
    }
    if (clickedRoom && !selectOneRoom) {
      selectOneRoom = true;
      icons.push({
        icon: <BsFillPersonFill color="#FF4791" size="30px" />,
        available: true,
      });
    } else {
      icons.push({
        icon: <BsPerson color="black" size="30px" />,
        available: true,
      });
    }
  }

  icons.reverse();

  const availableRoom = !!icons.filter((i) => i.available).length;

  const toggleSelected = () => {
    setSelectRoom(() => {
      if (clickedRoom) {
        return null;
      } else {
        return room.id;
      }
    });
  };

  return (
    <Container clicked={clickedRoom} key={room.id} available={availableRoom} onClick={toggleSelected}>
      <p>{room.id}</p>
      <div>
        {icons.map((icon, index) => (
          <span key={index}>{icon.icon}</span>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 190px;
  height: 45px;
  border-radius: 10px;

  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.available
      ? css`
          background-color: ${({ clicked }) => (clicked ? '#FFEED2' : '#FFF')};
          background-color: 
          :hover {
            background-color: ${({ clicked }) => (clicked ? '#FFE7C0' : '#FFEED2')};
          }
          border: 1px solid #cecece;
          cursor: pointer;
        `
      : css`
          opacity: 70%;
          background-color: #e7e7e7;
          border: 1px solid #cecece;
          pointer-events: none;
        `}
`;
