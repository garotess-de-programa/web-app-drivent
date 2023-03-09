import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { toast } from 'react-toastify';
import usePayment from '../../hooks/api/usePayment';
import creditCardType from 'credit-card-type';

export function CreditCard({ setPayed, ticketId }) {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const [error, setError] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });
  const { createPayment } = usePayment();

  async function handleForm() {
    const [card] = creditCardType(state.number);
    const issuer = card?.type;
    if (!issuer) return toast('Bandeira do cartão inválida');

    const body = {
      ticketId: ticketId,
      cardData: {
        issuer: issuer,
        number: state.number,
        name: state.name,
        expirationDate: state.expiry,
        cvv: state.cvc,
      },
    };

    try {
      await createPayment(body);
      setPayed(true);
    } catch (error) {
      toast('Erro!');
    }
  }

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (/^[0-9]+$/.test(value) || name === 'name') {
      setError({});
    } else {
      setError((prev) => ({ ...prev, [name]: value }));
    }

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <CardSession>
      <CardForm>
        <CreditCardContainer>
          <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
        </CreditCardContainer>
        <Form>
          <NumberInput
            error={error?.number}
            type="text"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            minLength={16}
            maxLength={16}
            pattern="^[0-9]+$"
            required
          />
          {error?.number && <ErrorSpan>Por favor, insira apenas números.</ErrorSpan>}
          <h1>E.g.: 49...,51...,36...,37...</h1>
          <NameInput
            error={error.name}
            minLength={3}
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <Divisor>
            <div>
              <ValidateInput
                error={error?.expiry}
                maxLength={6}
                minLength={4}
                pattern="^[0-9]+$"
                type="text"
                name="expiry"
                placeholder="Valid Thru"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
              {error?.expiry && <ErrorSpan>Por favor, insira apenas números.</ErrorSpan>}
            </div>

            <CodeDiv>
              <CodeInput
                error={error?.cvc}
                maxLength={3}
                minLength={3}
                pattern="^[0-9]+$"
                type="text"
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
              {error?.cvc && <ErrorSpan>Por favor, insira apenas números.</ErrorSpan>}
            </CodeDiv>
          </Divisor>
          <br />
        </Form>
      </CardForm>
      <FormButton>
        <Button onClick={handleForm}>FINALIZAR PAGAMENTO</Button>
      </FormButton>
    </CardSession>
  );
}

const CardSession = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardForm = styled.div`
  display: flex;
`;

const CreditCardContainer = styled.div``;

const FormButton = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-left: 24px;

  input {
    padding-left: 15px;
    outline: none;
    border-color: #cccccc;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    color: #898989;
    margin-top: 4px;
  }
`;

const NumberInput = styled.input`
  height: 44px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : 'default')} !important;
`;

const NameInput = styled.input`
  height: 44px;
  width: 100%;

  margin: 15px 0;
  border-radius: 5px;
`;

const Divisor = styled.div`
  width: 100%;
  height: auto;
  min-height: 45px;

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const CodeDiv = styled.div`
  align-items: flex-end;
`;

const ValidateInput = styled.input`
  height: 44px;
  width: 90%;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : 'default')} !important;
`;

const CodeInput = styled.input`
  height: 44px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : 'default')} !important;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

export const CreditCardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 24px 0px 0px 0px;
`;

export const ErrorSpan = styled.span`
  margin-top: 4px;
  color: red;
`;
