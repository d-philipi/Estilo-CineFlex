import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Filmes from './filmes';


export default function App() {
    const [itens, setItens] = useState([])

    function mostrarFilmes (resposta){
        console.log(resposta.data);
        setItens(resposta.data);
        console.log(itens[0].posterURL);
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
				<Route path="/" element={<Filmes itens={itens}/>} />
			</Routes>
		</BrowserRouter>
	);
}

