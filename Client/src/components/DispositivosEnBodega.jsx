import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const DispositivosEnBodega = () => {

    const [dispositivosEnBodega, setDispositivosEnBodega] = useState([])

    useEffect(() => {
        getAllDispositivosEnBodega()
    }, [])

    const getAllDispositivosEnBodega = async () => {
        const response = await axios.get(`${endpoint}/verbodegas`)
        setDispositivosEnBodega(response.data)
    }

    const deleteDispositivoEnBodega = async (id) => {
        await axios.delete(`${endpoint}/enbodega/${id}`)
        getAllDispositivosEnBodega()
    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/ingresar" className="btn btn-success btn-lg mt-2 mb-2 text-white">Ingresar Dispositivo</Link>
            </div>

            <table className='table table-striped'>

                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID Dispositivo</th>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Bodega</th>
                        <th>Accion</th>
                    </tr>
                </thead>

                <tbody>
                    {dispositivosEnBodega.map(dispositivo => (
                        <tr key={dispositivo.id}>
                            <td>{dispositivo.dispositivo_id}</td>
                            <td>{dispositivo.nombre}</td>
                            <td>{dispositivo.marca}</td>
                            <td>{dispositivo.modelo}</td>
                            <td>{dispositivo.bodega_id}</td>
                            <td>
                                <button onClick={() => deleteDispositivoEnBodega(dispositivo.id)} className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default DispositivosEnBodega