import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Filmes from './filmes';
import Sessao from './sessoes';
import Assentos from './assentos';

export default function App() {
    const [filmes, setFilmes] = useState([]);
    const [filmeEscolhido, setFilmeEscolhido] = useState();
    const [idFilme, setIdFilme] = useState("");
    const [sessao,setSessao] = useState([]);
    const [idSessao, setIdSessao] = useState();
    const [sessaoEscolhida, setSessaoEscolhida] = useState();
    const [hora, setHora] = useState();
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([]);

    function mostrarFilmes (resposta){
        console.log(resposta.data);
        setFilmes(resposta.data);
    }

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(mostrarFilmes);

		requisicao.catch(erro => {
			console.log(erro.response.data);
		});
	}, []);

	return (
        <BrowserRouter>
			<Routes>
                <Route 
                path="/" 
                element={<Filmes 
                filmes={filmes} 
                setFilmeEscolhido={setFilmeEscolhido} 
                setIdFilme={setIdFilme}/>}/>
				<Route 
                path={idFilme} 
                element={<Sessao 
                setSessao={setSessao} 
                filmeEscolhido={filmeEscolhido} 
                setHora={setHora} 
                setIdSessao={setIdSessao} 
                setSessaoEscolhida={setSessaoEscolhida}/>} />
                <Route 
                path="/sessao/2" 
                element={<Assentos 
                filmeEscolhido={filmeEscolhido} 
                sessao={sessao} 
                hora={hora} 
                idFilme={idFilme} 
                setAssentosEscolhidos={setAssentosEscolhidos} 
                idSessao={idSessao} 
                sessaoEscolhida={sessaoEscolhida}/>}/>
			</Routes>
		</BrowserRouter>
	);
}