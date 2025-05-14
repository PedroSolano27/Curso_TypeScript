// Página de repositórios
import type { Repository } from "../../types/repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Repos.css";
import Loader from "../../components/LoaderComp/Loader";
import RepositoryModel from "../../components/RepositoryComp/RepositoryModel";

function Repos() {
    const { username } = useParams();
    const [loading, setLoading] = useState <boolean> (false);
    const [reps, setReps] = useState <Repository[]|[]|null> (null);
    const navigate = useNavigate();

    useEffect(()=>{                                         // Carrega os repositórios só uma vez
        async function getReps() {
            setLoading(true);

            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await res.json();

            setLoading(false);
            setReps(data);
        }
        getReps();
    },[username]);

    return (
        <>
            <button id="back-btn" 
                onClick={()=>navigate(-1)}
            >Voltar</button>

            <section id="reps-page">
                <h2>Repositórios de {username}</h2>

                <section id="reps-container">
                    {loading && <Loader/> }
                    {reps && reps.length === 0 && <h3>Esse usuário não tem Repositórios</h3>}
                    {reps && reps.length > 0 && reps.map((rep: Repository)=>(
                        <RepositoryModel key={rep.name} data={rep}/>
                    ))}
                </section>

            </section>
        </>
    );
}

export default Repos;