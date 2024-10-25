import Book from "./Book"
export default function Bookstore ( {books12}) {
    return (
        <div>
            <h2>Books : {books12.length} </h2>
            {
                books12.map( book1 => <Book book2 = {book1}></Book>)
            }
        </div>
    )
}