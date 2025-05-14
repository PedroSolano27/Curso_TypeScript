// Passos do formulário
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./Steps.css";

type Props = {
  currentStep: number;
};

function Steps({ currentStep }: Props) {
  return (
    <section className="steps" >

      <section className={`step ${currentStep >= 0 ? "active" : ""}`} >
        <AiOutlineUser/>
        <p>Identificação</p>
      </section>

      <section className={`step ${currentStep >= 1 ? "active" : ""}`} >
        <AiOutlineStar/>
        <p>Avaliação</p>
      </section>

      <section className={`step ${currentStep === 2 ? "active" : ""}`} >
        <FiSend/>
        <p>Envio</p>
      </section>

    </section>
  );
}

export default Steps;