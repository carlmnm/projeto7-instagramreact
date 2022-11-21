import React from "react"


export default function Posts() {


    const postsinfo = [
        { usuarioimg: 'assets/img/meowed.svg', username: 'meowed', conteudo: 'assets/img/gato-telefone.svg', curtidouser: 'respondeaí', curtidoimg: 'assets/img/respondeai.svg', curtidas: 101523 },
        { usuarioimg: 'assets/img/barked.svg', username: 'barked', conteudo: 'assets/img/dog.svg', curtidouser: 'adorable_animals', curtidoimg: 'assets/img/adorable_animals.svg', curtidas: 99159 }
    ]





    function Post(props) {
        const [save, setSave] = React.useState("bookmark-outline")
        const [like, setLike] = React.useState("heart-outline")
        const [color, setColor] = React.useState("black")
        const [addlike, setAddLike] = React.useState(0)

        function salvar(){
            if (save === "bookmark-outline"){
                setSave("bookmark")
            } else if (save === "bookmark"){
                setSave("bookmark-outline")
            }
        }

        function curtir(){
            if (like === "heart-outline"){
                setLike("heart");
                setColor("red");
                setAddLike(1)
                
            } else if (like === "heart"){
                setLike("heart-outline");
                setColor("black");
                setAddLike(0)
        
            }
        }


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
                            <ion-icon onClick={curtir} name={like} style={{color: color}}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={salvar} name={save}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.curtidoimg} />
                        <div class="texto">
                            Curtido por <strong>{props.curtidouser}</strong> e <strong>outras {props.curtidas + addlike} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div class="posts">
            {postsinfo.map((item) => <Post usuarioimg={item.usuarioimg} username={item.username} conteudo={item.conteudo} curtidouser={item.curtidouser} curtidoimg={item.curtidoimg} curtidas={item.curtidas} />)}
        </div>
    )
}