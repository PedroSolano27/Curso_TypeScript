// Componente de repositórios
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import type { Repository } from "../../types/repository";
import "./RepositoryModel.css";

type Params = {
  data: Repository;
};

function RepositoryModel({ data }: Params) {
  return (
    <section className="repository">

      <h3>Repositório: {data.name}</h3>
      <p>
        <BsCodeSlash/>
        <span>{data.language}</span>
      </p>

      <section className="stats">
        <section>
          <AiOutlineStar/>
          <span>{data.stargazers_count}</span>
        </section>

        <section>
          <AiOutlineFork/>
          <span>{data.forks_count}</span>
        </section>
      </section>

      <a href={data.html_url} target="blank">
        <RiGitRepositoryLine/>
        <span>Ver Código</span>
      </a>

    </section>
  );
}

export default RepositoryModel;