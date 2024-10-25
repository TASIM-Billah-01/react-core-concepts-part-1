import './Book.css'
export default function Book( {book2} ) {
    const {name, price} = book2;
    return (
        <div className='book'>
            <h3> Book Name : {name}  </h3>
            <h3> Book price : {price}  </h3>
        </div>
    )
}