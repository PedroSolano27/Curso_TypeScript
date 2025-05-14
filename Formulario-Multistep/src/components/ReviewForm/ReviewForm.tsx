// Formulário de Review
import { BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./ReviewForm.css";

type Params = {
  data: {
    review: string,
    comment: string
  };
  update: (key: string, value: string) => void;
}

function ReviewForm({ data, update }: Params) {
  return (
    <section className="review-form">
      <section className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required
            checked={data.review === "unsatisfied"}
            onChange={(e)=>update("review", e.target.value)}
          />
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required
            checked={data.review === "neutral"}
            onChange={(e)=>update("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill/>
          <p>Neutro</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required
            checked={data.review === "satisfied"}
            onChange={(e)=>update("review", e.target.value)}
          />
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="verySatisfied" name="review" required
            checked={data.review === "verySatisfied"}
            onChange={(e)=>update("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>
      </section>

      <section className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder="Deixe seu comentário aqui..." required
          value={data.comment || ""}
          onChange={(e)=>update("comment", e.target.value)}
        />
      </section>
    </section>
  );
}

export default ReviewForm;