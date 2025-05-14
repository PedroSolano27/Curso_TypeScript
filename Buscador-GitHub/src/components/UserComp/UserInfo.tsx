// Informações do Usuário
import { MdLocationPin } from "react-icons/md";
import type { User } from "../../types/user";
import "./UserInfo.css";
import { Link } from "react-router-dom";

type Props = {
  user: User,
}

function UserInfo({ user }: Props) {
  return (
    <section id="user-info">
      <img src={`${user.avatar_url}`} alt={user.login} />
      <h2>{user.login}</h2>
      {user.location &&
        <p id="location">
          <MdLocationPin/>
          <span>{user.location}</span>
        </p>
      }

      <section id="stats">
        <section>
          <p>Seguidores:</p>
          <p className="number">{user.followers}</p>
        </section>
        <section>
        <p>Seguindo:</p>
        <p className="number">{user.following}</p>
        </section>
      </section>

      <Link to={`/repos/${user.login}`}>Ver Repositórios</Link>
    </section>
  );
}

export default UserInfo;