import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const DispositivosIngresados = () => {

    const [dispositivosIngresados, setDispositivosIngresados] = useState([])

    const getDispositivos = async () => {
        const response = await axios.get(`${endpoint}/dispositivos`)
        setDispositivosIngresados(response.data)
    }

    const deleteDispositivo = async (id) => {
        await axios.delete(`${endpoint}/dispositivo/${id}`)
        getDispositivos()
    }
    
    useEffect(() => {
        getDispositivos()
    }, [])

    return (
        <div>
            <h1>Dispositivos ingresados</h1>

            <br/>

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

                {dispositivosIngresados.map( (dispositivo) => (

                    <tr key={dispositivo.id}>
                        <td data-titulo="Nombre">{dispositivo.nombre}</td>
                        <td data-titulo="Marca">{dispositivo.marca}</td>
                        <td data-titulo="Modelo">{dispositivo.modelo}</td>
                        <td className='accion'>
                            <button onClick={() => deleteDispositivo(dispositivo.id)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

            <Link to="/" className="btn btn-success btn-lg mt-2 mb-2 text-white">Volver al inicio</Link>
        </div>
    )
}

export default DispositivosIngresados