
import Table from 'react-bootstrap/Table';
import './table.css'
import TableRow from './TableRow';
import Container from 'react-bootstrap/Container'
import UserService from '../../../../userService';
import { useState, useEffect } from 'react';


function TableHome ( ) {

  const [userList, setUserList] = useState([]);

  const getUserlist = async () => {
      const finalUserList = await UserService.getUsers();
      console.log("esto es table home"+finalUserList);
      setUserList(finalUserList);

  }


    return (
      <Container>
      <div className='tableHome p-2'>
        <Table className = 'table-default rounded-2 ' >
          <thead>
          <tr >
            <th >Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Curso</th>
          </tr>  
        </thead>
        <tbody>
        {userList.map((user, index) => (
              <TableRow  key={index} user={user} />
            ))}
          
        </tbody>
        </Table>
      </div>

      <div class="col-md-2 col-sm-12 mt-2 d-flex align-items-center">
        <button class="buttonSend w-100 h-auto py-2" id="loadList">Guardar lista</button>
      </div>
      <div class="col-md-2 col-sm-12 mt-2 d-flex align-items-center">
        <button class="buttonSend w-100 h-auto py-2" onClick={getUserlist}>Cargar lista</button>
      </div>
      </Container>

    )
}
export default TableHome;
