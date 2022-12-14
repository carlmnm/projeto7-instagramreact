import React from 'react'

export default function Usuario() {

    const dadosuser = ['assets/img/catanacomics.svg', 'Catana']

    const [nome, setNome] = React.useState(dadosuser[1])
    const [imagem, setImagem] = React.useState(dadosuser[0])

    function novoNome(){
        setNome(prompt("Qual é o seu nome?"))
    }

    function novaImagem(){
        const imagemAdicionada = prompt("Forneça o link da sua nova imagem")
        setImagem(imagemAdicionada)
    }

    return (
        <div data-test="user" class="usuario">
            
            <img data-test="profile-image" onClick={novaImagem} src={!imagem ? dadosuser[0] : imagem} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {nome}
                    <ion-icon data-test="edit-name" onClick={novoNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}