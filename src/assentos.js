import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Assentos({filmeEscolhido, sessao, hora, idFilme, assentosEscolhidos, setAssentosEscolhidos, idSessao, sessaoEscolhida, nome, cpf, setNome, setCpf}){
    const [assentos, setAssentos] = useState([]);
    const [cor,setCor] = useState();

    function mostrarAssentos (resposta){
        console.log("Sessao", resposta.data.seats);
        setAssentos(resposta.data.seats);
    }

    let num = sessaoEscolhida;
    let link = "https:mock-api.driven.com.br/api/v5/cineflex/showtimes/"+num+"/seats";
    let green = '#0E7D71';
    let gray = '#C3CFD9';
    let yellow = '#F7C52B';

	useEffect(() => {
		const requisicao = axios.get(link);

		requisicao.then(mostrarAssentos);

		requisicao.catch(erro => {
            console.log(idSessao);
			console.log(erro.response.data);
		});
	}, []);

    function reservarAssento(){
        console.log("Reservei");
    }

    return(
        <>
            <Topo>
                <p>CINEFLEX</p>
            </Topo>
            <Titulo>
                <p>Selecione o(s) assento(s)</p>
            </Titulo>
            <Cadeiras>
                {assentos.map((a,index) => 
                <li>
                    <Botao 
                    cor={!a.isAvailable ? yellow
                         : 
                         assentosEscolhidos.includes(a) ? green
                          : 
                          gray}
                    onClick={(a) => assentosEscolhidos.includes(a) ? cor={gray}
                     : 
                     setAssentosEscolhidos([...assentosEscolhidos, a])}
                    >
                        {a.name}
                    </Botao>
                </li>
                )}
            </Cadeiras>
            <Exemplos>
                <li>
                    <Botao cor={green}></Botao>
                    <p>Selecionado</p>
                </li>
                <li>
                    <Botao cor={gray}></Botao>
                    <p>Disponível</p>
                </li>
                <li>
                    <Botao cor={yellow}></Botao>
                    <p>Indisponível</p>
                </li>
                
            </Exemplos>
            <Form onSubmit={reservarAssento}>
                <p>Nome do comprador:</p>
                <input 
                type="text" 
                placeholder="Digite seu nome..." 
                value={nome} 
                onChange={e => setNome(e.target.value)}
                />
                <p>CPF do comprador:</p>
                <input 
                type="number" 
                placeholder="Digite seu CPF..." 
                value={cpf} 
                onChange={e => setCpf(e.target.value)}
                />
                <Reservar type="submit">Reservar assento(s)</Reservar>
            </Form>
            <Filme>
                <img src={filmeEscolhido.posterURL} alt='Banner do filme'/>
                <p>{filmeEscolhido.title}<br/>{sessao.weekday} - {hora}</p>
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

const Cadeiras = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button{
        width: 30px;
        height: 30px;
        margin: 5px;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 15px;
    }
`

const Exemplos = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 13px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`

const Botao = styled.button`
    width: 30px;
    height: 30px;
    margin: 5px;
    background: ${props => props.cor};
    border: 1px solid #808F9D;
    border-radius: 15px;
`

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #293845;
    }
    input{
        width: 327px;
        height: 51px;
        margin-bottom: 15px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        color: #AFAFAF;
    }
`

const Reservar = styled.button`
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