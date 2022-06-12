import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const VerDispositivos = () => {

    const [dispositivos, setDispositivos] = useState([])
    useEffect(() => {
        getAllDispositivos()
    }, [])

    const getAllDispositivos = async () => {
        const response = await axios.get(`${endpoint}/dispositivos`)
        setDispositivos(response.data)
    }

    const deleteDispositivo = async (id) => {
        await axios.delete(`${endpoint}/dispositivo/${id}`)
        getAllDispositivos()
    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Create</Link>
            </div>

            <table className='table table-striped'>

                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Accion</th>
                    </tr>
                </thead>

                <tbody>

                    {dispositivos.map( (dispositivo) => (

                        <tr key={dispositivo.id}>
                            <td>{dispositivo.nombre}</td>
                            <td>{dispositivo.marca}</td>
                            <td>{dispositivo.modelo}</td>
                            <td>
                                <Link to={`/edit/${dispositivo.id}`} className="btn btn-warning">Edit</Link>
                                <button onClick={() => deleteDispositivo(dispositivo.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>

                    ))}

                </tbody>

            </table>
        </div>
    )
}

export default VerDispositivos