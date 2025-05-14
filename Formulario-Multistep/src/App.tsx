// App Principal
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import "./App.css";
import useForm from "./hooks/useForm";
import Steps from "./components/Steps/Steps";
import UserForm from "./components/UserForm/UserForm";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import FinalForm from "./components/FinalForm/FinalForm";

type FormTemplate = {
  name: string
  email: string
  review: string
  comment: string
}

function App() {  
  const template: FormTemplate = {name: "", email: "", review: "", comment: ""};
  const [data, setData] = useState(template);
  const formComponents = [
    <UserForm data={data} update={updateData}/>, 
    <ReviewForm data={data} update={updateData}/>, 
    <FinalForm data={data}/>,
  ]
  const { currentStep, currentComponent, changeStep } = useForm(formComponents);
  
  function updateData(key: string, value: string){
    setData((prev)=>{
      return {...prev, [key]: value}
    });
  }

  return (
    <>
    <header>
      <h1>Formulário MultiStep</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum autem sit ipsum pariatur inventore id illo vero recusandae enim repellendus. Quis qui ipsa nulla vel quasi, quam tenetur reiciendis error!</p>
    </header>

    <main className="form-container">
      <Steps currentStep={currentStep}/>
      <form>
        
        <section className="inputs">
          {currentComponent}
        </section>

        <section className="actions">
          {currentStep !== 0 && 
            <button type="button"
              onClick={()=>changeStep(currentStep - 1)}
            ><GrFormPrevious/><span>Voltar</span></button>
          }

          {currentStep !== formComponents.length -1 &&
            <button type="submit"
              onClick={(e)=>changeStep(currentStep + 1, e)}
            ><span>Avançar</span><GrFormNext/></button>
          }

          {currentStep === formComponents.length -1 &&
            <button type="button"><span>Enviar</span><FiSend/></button>
          }
        </section>

      </form>
    </main>
    </>
  );
}

export default App;