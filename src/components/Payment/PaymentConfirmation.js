import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

export const PaymentConfirmationWrapper = styled.div`
  margin-top: 24px;
`;
export const ContainerPaymentConfirmation = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0px 0px 12px;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #898989;
  }
`;
export const FaCheckCircleStyled = styled(FaCheckCircle)`
  color: #36b853;
  transform: scale(3);
  margin-right: 24px;
`;
