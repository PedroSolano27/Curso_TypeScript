// Componente de erro
import "./Error.css";

type Props = {
    code: number,
    message: string,
}

function Error({ code, message }:Props) {
  return (
    <section id="error-page">
        <h2>Ocorreu um erro!</h2>
        <h2>Erro: {code}</h2>
        <h3>{message}</h3>
    </section>
  );
}

export default Error;