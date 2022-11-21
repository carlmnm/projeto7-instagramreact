function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}

export default function Stories() {
    const storyinfo = [{ img: 'assets/img/9gag.svg', usuario: '9gag'}, { img: 'assets/img/meowed.svg', usuario: 'meowed'}];
    return (
        <div class="stories">

            {storyinfo.map((item) => <Story img={item.img} usuario={item.usuario} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>


        </div>
    )

} 
