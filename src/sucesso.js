import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Sucesso () {
    return(
        <>
            <Topo>
                <p>CINEFLEX</p>
            </Topo>
            <Titulo>
                <p>Pedido feito com sucesso!</p>
            </Titulo>
            <Resumo>
                <p>Filme e sessão</p>
                <li>Nome do filme</li>
                <li>data e hora</li>
                <p>Ingressos</p>
                <li>Assento(s)</li>
                <p>Comprador</p>
                <li>Nome:</li>
                <li>CPF:</li>
            </Resumo>
            <Link>
                <Botao>Voltar pra Home</Botao>
            </Link>
        </>
    )
}

const Topo = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    padding: 16px 0;
    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        text-align: center;
        color: #E8833A;
    }
`

const Titulo = styled.div`
    width: 100%;
    height: 110px;
    padding: 43px 0;
    p{
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #247A6B;
    }
`

const Resumo = styled.ul`

`

const Botao = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    border: 1px solid #E8833A;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`