import './table.css'

function TableRow ({user}){
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.secondSurname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.curso}</td>
            
        </tr>
    )
}
export default TableRow;