import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import BookTicketButton from './BookTicketButton';
import { ButtonsWraper } from './ButtonsWraper';
import Typebutton from './TypeButton';

export default function TicketTypeSelection() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledTypography variant="h6" color="textSecondary">
        Primeiro, escolha sua modalidade de ingresso
      </StyledTypography>
      <ButtonsWraper>
        <Typebutton />
      </ButtonsWraper>
      <BookTicketButton />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
