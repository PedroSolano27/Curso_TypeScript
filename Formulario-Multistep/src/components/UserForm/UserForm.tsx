// Formulário do usuário

type Props = {
  data: {
    name: string;
    email: string;
  };

  update: (key: string, value: string) => void;
};

function UserForm({ data, update }: Props) {
  return (
    <section>
      <section className="form-control">
        <label htmlFor="name">Nome: </label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" value={data.name || ""}
          required onChange={(e)=>update("name", e.target.value )}
        />
      </section>

      <section className="form-control">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="Digite seu Email" value={data.email || ""}
          required onChange={(e)=>update("email", e.target.value)}
        />
      </section>
  </section>
  );
}

export default UserForm;