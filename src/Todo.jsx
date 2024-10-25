// export default function Todo({pending}) {
//     return (
//         <h2>Pending Task : {pending}  </h2>
//     )
// }

// conditional rendering 1
// export default function Todo({isDone ,pending}) {
//     if (isDone === true) {
//         return <h2> {pending} . Its not pedning anymore. its complete</h2>
//     }
//     return <h2> {pending} . Still pending</h2>
// }


// conditional rendering 2
export default function Todo({pending, isDone}) {
    return (
        <h2> {pending} : {   isDone  ? "Its not pedning anymore. its complete" : "Still pending" } </h2>
    )
}