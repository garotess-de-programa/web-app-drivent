import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import styled from 'styled-components';
import { ButtonsWraper } from './ButtonsWraper';
import Typebutton, { ButtonStyledTypography } from './TypeButton';

export default function TicketTypeSelection() {
  const [presential, setPresential] = useState(false);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledTypography variant="h6" color="textSecondary">
        Primeiro, escolha sua modalidade de ingresso
      </StyledTypography>
      <ButtonsWraper>
        <Typebutton />
      </ButtonsWraper>
      {presential ? (
        <>
          <StyledTypography variant="h6" color="textSecondary">
            Ótimo! Agora escolha sua modalidade de hospedagem
          </StyledTypography>
          <Row>
            <TicketCard>
              <h3>Sem Hotel</h3>
              <ButtonStyledTypography variant="h5">
                <h5>+ R$ 0</h5>
              </ButtonStyledTypography>
            </TicketCard>
            <TicketCard>
              <h3>Com Hotel</h3>
              <ButtonStyledTypography variant="h5">
                <h5>+ R$ 350</h5>
              </ButtonStyledTypography>
            </TicketCard>
          </Row>
        </>
      ) : (
        ''
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 30px;
`;
const TicketCard = styled.button`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
  background-color: #ffffff;

  margin-right: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #ded9d9;
  }
`;
