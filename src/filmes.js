import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Filmes({filmes, setFilmeEscolhido, setIdFilme}){

    function escolhido(f, index){
        setFilmeEscolhido(f);
        setIdFilme("/filme/"+index);
    }

    return(
        <>
            <Topo>
                <p>CINEFLEX</p>
            </Topo>
            <Titulo>
                <p>Selecione o filme</p>
            </Titulo>
            <ContainerFilmes>
                {filmes.map((f,index) => 
                <Link to={"/filme/"+index}>
                    <li 
                    key={index}
                    onClick={() => escolhido(f,index)} >
                        <img src={f.posterURL} alt='Banner do filme'/>
                    </li>
                </Link>
                )}
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

const Titulo = styled.div`
    width: 100%;
    height: 110px;
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
    img{
        width: 150px;
        border: 10px solid #FFFFFF;
    }
    li{
        margin: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
`

