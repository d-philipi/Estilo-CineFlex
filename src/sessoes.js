import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Sessao ({setSessao, filmeEscolhido, setHora}){
    const [sessoes, setSessoes] = useState([])

    function mostrarSessoes (resposta){
        console.log("Sessao", resposta.data.days);
        setSessoes(resposta.data.days);
    }

    let num = filmeEscolhido.id;
    let link = "https://mock-api.driven.com.br/api/v5/cineflex/movies/"+num+"/showtimes"

	useEffect(() => {
		const requisicao = axios.get(link);

		requisicao.then(mostrarSessoes);

		requisicao.catch(erro => {
			console.log(erro.response.data);
		});
	}, []);

    function Horarios({horarios, botao, s}){
        return(
            horarios.map((h,index) =>
            <Link to> 
            <button onClick={() => botao(h,s)} key={index}>
                {h.name}
            </button>
            </Link>
            )
        )
    }

    function botao({h, s}){
        console.log("Escolhi esse horário!", h.name);
        setHora(h.name);
        setSessao(s);
    }

    return(
        <>
            <Topo>
                <p>CINEFLEX</p>
            </Topo>
            <Titulo>
                <p>Selecione o horário</p>
            </Titulo>
            <Sessoes>
                {sessoes.map((s,index) => <li key={index}><p>{s.weekday}  {s.date}</p> <br/> {<Horarios horarios={s.showtimes} botao={botao} sessao={s}/>}</li>)}
            </Sessoes>
            <Filme>
                <img src={filmeEscolhido.posterURL} alt='Banner do filme'/>
                <p>{filmeEscolhido.title}</p>
            </Filme>
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

const Sessoes = styled.ul`

`

const Filme = styled.div`
    width: 100%;
    height: 120px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img{
        width: 60px;
        border: 5px solid #FFFFFF;
        margin: 0 10px;
    }
    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    }
`