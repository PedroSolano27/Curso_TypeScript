// Componente de barra de busca
import type { KeyboardEvent } from "react"
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

type Props = {
    search: (username: string) => Promise<void>,
}

function Search({ search }:Props) {
    const [name, setName] = useState <string> ("");

    function enterSearch(e: KeyboardEvent) {        // Pressionar ENTER dispara a função search()
        if(e.key === "Enter"){ search(name) }
        return;
    }

    return (
        <section id="search">
            <h2>Busque por um usuário:</h2>
            <p>Pesquise um usuário para ver os repositórios</p>
            <section  id="actions">
                <input type="text" id="name" placeholder="Digite um nome de Usuário"
                    onChange={(e)=>setName(e.target.value)}
                    onKeyDown={(e)=>enterSearch(e)}
                />
                <button onClick={()=>search(name)}><BsSearch/></button>
            </section>
        </section>
    );
}

export default Search;