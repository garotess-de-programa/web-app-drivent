import styled from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

function getIcons(capacity) {
  const icons = [];

  for (let i = 0; i < capacity; i++) {
    icons.push(<BsPerson size="30px" />);
  }

  return icons;
}

export default function RoomPage({ room }) {
  const icons = getIcons(room.capacity);

  return (
    <Container key={room.id}>
      <p>{room.id}</p>
      <div>
        {icons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 190px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #cecece;

  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ clicked }) => (clicked ? '#FFEED2' : '#FFF')};
  :hover {
    background-color: ${({ clicked }) => (clicked ? '#FFE7C0' : '#FFEED2')};
  }
`;
