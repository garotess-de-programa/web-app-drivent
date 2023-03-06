import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Card() {
  return (
    <>
      <TicketResume>
      </TicketResume>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Container = styled.div``;

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
