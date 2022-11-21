import React from "react"

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.usuarioimg} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidoimg} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidouser}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const [like, setLike] = React.useState(0)

    const postsinfo = [
        { usuarioimg: 'assets/img/meowed.svg', username: 'meowed', conteudo: 'assets/img/gato-telefone.svg', curtidouser: 'respondeaí', curtidoimg: 'assets/img/respondeai.svg', curtidas: 101523 },
        { usuarioimg: 'assets/img/barked.svg', username: 'barked', conteudo: 'assets/img/dog.svg', curtidouser: 'adorable_animals', curtidoimg: 'assets/img/adorable_animals.svg', curtidas: 99159 }
    ]
    return (
        <div class="posts">
            {postsinfo.map((item) => <Post usuarioimg={item.usuarioimg} username={item.username} conteudo={item.conteudo} curtidouser={item.curtidouser} curtidoimg={item.curtidoimg} curtidas={item.curtidas} />)}
        </div>
    )
}