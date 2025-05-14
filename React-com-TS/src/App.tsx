// App principal
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  const name: string = "Pedro";
  const age: number = 19;
  const isOnline: boolean = true;

  function userHello(name: string):string {
    return `Olá ${name}`;
  }

  return (
    <>
    <header>
      <h1>React com TypeScript</h1>
    </header>
    
    <main>
      <section>
        <h2>Nome: {name}</h2>
        <h3>Idade: {age}</h3>
        {isOnline && 
          <p>Está online</p>
        }
        <h4>{userHello(name)}</h4>
      </section>

      <FirstComponent/>
      <SecondComponent 
        name="Segundo Com"
        text="Texto de exemplo"
        likes={10}
        followers={["User 1", "User 2", "User 3", "User 4", "User 5" ]}
        online={true}
      />
    </main>
    </>
  );
}

export default App;