
export default function BookInfo(props) {
    return (
        <div className="book-info">
            <strong>{props.name}</strong> - {props.description}
        </div>
    )
}