// Página de Home
import { useState } from "react";
import type { User } from "../../types/user";
import "./Home.css";
import Search from "../../components/SearchComp/Search";
import UserInfo from "../../components/UserComp/UserInfo";
import Error from "../../components/ErrorComp/Error";
import Loader from "../../components/LoaderComp/Loader";

function Home() {
    const [user, setUser] = useState <User|null> (null);
    const [error, setError] = useState <number|null> (null);
    const [loading, setLoading] = useState <boolean> (false);

    function handleError(error: Response) {                     // Lida com o erro
        const status = error.status;
        setError(status);         
    }

    async function loadUser(userName:string) {                  // Carrega as informações do usuário
        if(!userName){ return; }
        setError(null);
        
        setLoading(true);
        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if(res.status !== 200) {handleError(res); setLoading(false); return;}          

        const {avatar_url, login, location, followers, following} = data;
        const userData: User = { avatar_url, login, location, followers, following };

        setLoading(false);
        setUser(userData);
    }

    return (
        <section id="home">
            <Search search={loadUser}/>
            {loading && <Loader/> }
            {user && <UserInfo user={user}/> }
            {error === 404 && <Error code={error} message={"Usuário não encontrado"} /> }
        </section>
    );
}

export default Home;