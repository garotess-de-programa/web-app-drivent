import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { toast } from 'react-toastify';
import usePayment from '../../hooks/api/usePayment';
import GetCardIssuer from './GetCardIssuer';

export function CreditCard({ setPayed, ticketId }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focused, setFocused] = useState('');
  const { createPayment } = usePayment();

  function changeFocus(e) {
    setFocused(e.target.name);
  }

  async function handleForm() {
    if (number.length !== 16) {
      toast('O número do cartão de crédito não parece correto');
      return;
    } else if (name.length < 3) {
      toast('O nome do cartão de crédito não parece correto');
      return;
    } else if (expiry.length < 4 || expiry.length > 6) {
      toast('A data de expiração do cartão não parece correta');
      return;
    } else if (cvc.length !== 3) {
      toast('O CVC do cartão não parece correto');
      return;
    }

    const issuer = GetCardIssuer(number);

    if (!issuer) {
      issuer = 'VISA';
    }

    const body = {
      ticketId: ticketId,
      cardData: {
        issuer: issuer,
        number: number,
        name: name,
        expirationDate: expiry,
        cvv: cvc,
      },
    };

    try {
      await createPayment(body);
      setPayed(true);
    } catch (error) {
      toast('Erro!');
    }
  }

  return (
    <CardSession>
      <CardForm>
        <CreditCardContainer>
          <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focused} />
        </CreditCardContainer>
        <Form>
          <NumberInput
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            onFocus={changeFocus}
          />
          <h1>E.g.: 49...,51...,36...,37...</h1>
          <NameInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            onFocus={changeFocus}
          />
          <Divisor>
            <ValidateInput
              type="number"
              name="expiry"
              placeholder="Valid Thru"
              onChange={(e) => {
                setExpiry(e.target.value);
              }}
              onFocus={changeFocus}
            />
            <CodeInput
              type="number"
              name="cvc"
              placeholder="CVC"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              onFocus={changeFocus}
            />
          </Divisor>
          <br />
        </Form>
      </CardForm>
      <FormButton>
        <Button
          onClick={() => {
            handleForm();
          }}
        >
          FINALIZAR PAGAMENTO
        </Button>
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
  }
`;

const NumberInput = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 5px;
`;

const NameInput = styled.input`
  height: 45px;
  width: 100%;

  margin: 15px 0;
  border-radius: 5px;
`;

const Divisor = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
`;

const ValidateInput = styled.input`
  height: 45px;
  width: 65%;
  border-radius: 5px;
`;

const CodeInput = styled.input`
  height: 45px;
  width: 30%;
  border-radius: 5px;
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
