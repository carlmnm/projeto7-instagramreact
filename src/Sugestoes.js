function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.sugestaoimg} />
                <div class="texto">
                    <div class="nome">{props.sugestaonome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const sugestoesinfo = [
        { sugestaoimg: 'assets/img/bad.vibes.memes.svg', sugestaonome: 'bad.vibes.memes' },
        { sugestaoimg: 'assets/img/chibirdart.svg', sugestaonome: 'chibirdart' }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoesinfo.map((item) => <Sugestao sugestaoimg={item.sugestaoimg} sugestaonome={item.sugestaonome} />)}

        </div>
    )
}