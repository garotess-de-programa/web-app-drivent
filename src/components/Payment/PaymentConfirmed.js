import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { FaCheckCircle } from 'react-icons/fa';

export default function PaymentConfirmed() {
  return (
    <>
      <Container>
        < FaCheckCircle/>
        <div>
          <h1>Pagamento confirmado!</h1>
          <h2>Prossiga para escolha de hospedagem e atividades</h2>
        </div>
      </Container>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Container = styled.div`
display: flex;
flex-direction: row;

div{
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h2{
  font-weight: 400px !important;
}

& > *:first-child {
    font-size: 44px;
    color: #36B853;
  }

`;

const TicketResume = styled.div`
  background-color: rgba(255, 238, 210, 1);
  width: 290px;
  height: 108px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    color: rgba(69, 69, 69, 1);
    font-size: 16px;
    font-weight: 400px;
    margin: 4px;

    :last-child {
      color: rgba(137, 137, 137, 1);
      font-size: 14px;
    }
  }
`;
