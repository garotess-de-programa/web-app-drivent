import styled from 'styled-components';

export const TicketTypeWrapper = styled.div`
  display: flex;
  margin-top: 24px;

  .container {
    width: 145px;
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #cecece;
    border-radius: 20px;
    margin-right: 24px;
    cursor: pointer;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
export const ContainerTicket = styled.div`
  width: 145px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 20px;
  margin-right: 24px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#ffeed2' : '#ffffff')};
`;
export const HostWrapper = styled.div`
  margin-top: 24px;
`;
export const ConfirmationWrapper = styled.div`
  margin-top: 24px;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;
export const BookButton = styled.button`
  width: 162px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  margin-top: 24px;
`;
