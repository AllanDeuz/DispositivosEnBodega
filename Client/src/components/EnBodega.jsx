import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const EnBodega = () => {
  const [dispositivosEnBodega, setDispositivosEnBodega] = useState([])

  useEffect(() => {
    getAllDispositivosEnBodega()
  }, [])

  const getAllDispositivosEnBodega = async () => {
    const response = await axios.get(`${endpoint}/enbodegas`)
    setDispositivosEnBodega(response.data)
  }

  const deleteDispositivoEnBodega = async (id) => {
    await axios.delete(`${endpoint}/enbodega/${id}`)
    getAllDispositivosEnBodega()
  }

  return (
    <div>
      <div className='d-grid gap-2'>
        <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Create</Link>
      </div>

      <table className='table table-striped'>

        <thead className='bg-primary text-white'>
          <tr>
            <th>Bodega</th>
            <th>Dispositivo</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>

          {dispositivosEnBodega.map( (dispositivosEnBodega) => (

            <tr key={dispositivosEnBodega.id}>
              <td>{dispositivosEnBodega.bodega_id}</td>
              <td>{dispositivosEnBodega.dispositivo_id}</td>
              <td>
                <Link to={`/edit/${dispositivosEnBodega.id}`} className="btn btn-warning">Edit</Link>
                <button onClick={() => deleteDispositivoEnBodega(dispositivosEnBodega.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>

          ))}

        </tbody>
      </table>
    </div>
  )
}

export default EnBodega