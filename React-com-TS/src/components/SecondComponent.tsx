// Componente para testar Props

type Props = {
    name: string
    text: string
    likes: number
    followers: string[]
    online: boolean
}

export default function SecondComponent({name, text, likes, followers, online}: Props) {
  return (
    <section>
        <h2>Teste de Props</h2>

        <p>Nome: {name}</p>
        <p>Texto: {text}</p>
        <p>Likes: {likes}</p>

        {online && <p>Está online</p>}
        {!online && <p>Está offline</p>}

        {followers.map((follower)=>(
            <p key={follower} >Seguidor: {follower}</p>
        ))}
        
    </section>
  );
}