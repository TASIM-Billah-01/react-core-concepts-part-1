export default function Singer( {singer } ) {
    console.log(singer);
    
    return (
        <div>

            <h2> singer of bangladesh : {singer.name}  </h2>
            <h2>singer age : {singer.age} </h2>
        </div>
     
    )
}