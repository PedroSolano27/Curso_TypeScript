// Formulário de usuário
import { BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./FinalForm.css";
import type { ReactElement } from "react";

type Props = {
  data: {
    name: string;
    email: string;
    review: string;
    comment: string;
  };
};

type Emoji = {
  unsatisfied: ReactElement,
  neutral: ReactElement,
  satisfied: ReactElement, 
  verySatisfied: ReactElement 
};

function FinalForm({ data }: Props) {
  const emojiData: Emoji = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    verySatisfied: <BsFillEmojiHeartEyesFill/>
  }

  return (
    <section className="final-container">
      <h2>Falta pouco...</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque laudantium voluptates exercitationem architecto in vitae quod accusantium deleniti facere.</p>
      <p>Itaque beatae, amet cum accusantium perspiciatis maiores vitae deleniti et ipsum?</p>

      <h3>Resumo da avaliação de {data.name}</h3>

      <p className="review-data"><span>Email:</span>{data.email}</p>
      <p className="review-data"><span>Satisfação:</span>
        {emojiData[data.review as keyof typeof emojiData]}
        </p>
      <p className="review-data"><span>Comentário:</span>{data.comment}</p>
    </section>
  );
}

export default FinalForm;