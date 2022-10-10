import React from 'react';
import styled from 'styled-components';

export default function Filmes({itens}){
    return(
        <>
            <Topo>
                <p>CINEFLEX</p>
            </Topo>
            <Sessao>
                <p>Selecione o filme</p>
            </Sessao>
            <ContainerFilmes>
                {itens.map((f,index) => <li key={index} ><img src={f.posterURL} alt='Banner do filme'/></li>)}
            </ContainerFilmes>
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

const Sessao = styled.div`
    width: 100%;
    height: 110px;
    background-color: #E5E5E5;
    padding: 43px 0;
    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

const ContainerFilmes = styled.ul`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #E5E5E5;
    img{
        width: 130px;
        margin: 10px;
    }
`

