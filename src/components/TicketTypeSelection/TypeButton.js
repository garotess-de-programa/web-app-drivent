import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Typebutton() {
  return (
    <>
      <TypeButton>
        <ButtonStyledTypography variant="h3">
          <h3>Online</h3>
        </ButtonStyledTypography>
        <ButtonStyledTypography variant="h5">
          <h5>R$ 100</h5>
        </ButtonStyledTypography>
      </TypeButton>
    </>
  );
}

export const TypeButton = styled.button`
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

const ButtonStyledTypography = styled(Typography)`
  h3 {
    font-size: 16px !important;
    font-weight: 400 !important;
    color: #454545 !important;
  }
  h5 {
    font-size: 14px !important;
    font-weight: 400 !important;
    color: #898989 !important;
  }
`;
