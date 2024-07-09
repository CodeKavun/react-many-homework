
export default function FilmComponent(props) {
    return (
        <>
        <h1>{props.title} ({props.year})</h1>
        <p>Director: <strong>{props.director}</strong>,
        Filmstudio: <strong>{props.studio}</strong></p>
        <h3>Actors</h3>
        <ul>
            {props.actors.map(item => <li>{item}</li>)}
        </ul>
        </>
    )
}