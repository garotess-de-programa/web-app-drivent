import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { toast } from 'react-toastify';
import usePayment from '../../hooks/api/usePayment';
import { CardIssuer } from './CardIssuer';

export default function Card({ ticketId, setPymentConfirmed }) {
  const [focused, setFocused] = useState('');
  const [number, SetNumber] = useState('');
  const [name, SetName] = useState('');
  const [expiry, SetExpiry] = useState('');
  const [cvc, SetCvc] = useState('');
  const { createPayment } = usePayment();

  function handleFocus(e) {
    setFocused(e.target.name);
  }

  async function sendPay() {
    if (number.length !== 16) {
      toast('Erro no número do cartão de crédito');
      return;
    } else if (name.length < 3) {
      toast('Erro no nome do cartão de crédito');
      return;
    } else if (expiry.length < 4 || expiry.length > 6) {
      toast('Erro na data de expiração');
      return;
    } else if (cvc.length !== 3) {
      toast('erro no CVC');
      return;
    }

    const issuer = CardIssuer(number);

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
      setPymentConfirmed(true);
    } catch (error) {
      toast('Não foi possível realizar o pagamento!');
    }
  }

  return (
    <>
      <Container>
        <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focused} />

        <Form>
          <div className="row">
            <div className="col-sm-11">
              <input
                type="number"
                name="number"
                placeholder="Card Number"
                onChange={(e) => {
                  SetNumber(e.target.value);
                }}
                onFocus={handleFocus}
              />
              <br />
              <h1>E.g.: 49...,51...,36...,37...</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-11">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                onFocus={handleFocus}
              />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5">
              <input
                type="number"
                name="expiry"
                placeholder="Valid Thru"
                onChange={(e) => {
                  SetExpiry(e.target.value);
                }}
                onFocus={handleFocus}
              />
            </div>

            <div className="col-sm-6">
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                onChange={(e) => {
                  SetCvc(e.target.value);
                }}
                onFocus={handleFocus}
              />
              <br />
            </div>
          </div>
        </Form>
      </Container>
      <Button onClick={sendPay}>FINALIZAR PAGAMENTO</Button>
    </>
  );
}

const Form = styled.form`
  margin: 12px 0px 0px 24px;
  input {
    margin: 8px 8px 0px 0px;
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

const Container = styled.div`
  display: flex;
  padding-bottom: 30px;
  form {
    padding-left: 80px;
    textarea:focus,
    input:focus {
      box-shadow: 10 0 0 0;
      outline: 0;
    }
  }
  .row {
    display: flex;
    width: 350px;

    .col-sm-11 {
      width: 100%;

      input {
        width: 100%;
        height: 6vh;
        border: solid 1px gray;
        border-radius: 5px;
        padding-left: 10px;
      }
    }
    .col-sm-5 {
      width: 35%;
      //padding-left: 10px;

      input {
        width: 100%;
        height: 6vh;
        border: solid 1px gray;
        border-radius: 5px;
        padding-left: 10px;
      }
    }
    .col-sm-6 {
      width: 65%;

      input {
        width: 98%;
        height: 6vh;
        border: solid 1px gray;
        border-radius: 5px;
        padding-left: 10px;
        margin-left: 5px;
      }
    }
  }
`;
