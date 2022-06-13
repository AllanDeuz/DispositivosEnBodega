import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const DispositivosEnBodega = () => {

    const [bodegas, setBodegas] = useState([])
    const [bodega_id, setBodega_id] = useState([])
    const [dispositivosEnBodega, setDispositivosEnBodega] = useState([])
    const [marca, setMarca] = useState([])
    const [marcas, setMarcas] = useState([])
    const [modelos, setModelos] = useState([])
    const [modelo, setModelo] = useState([])

    const bodegasIngresadas = async () => {
        const response = await axios.get(`${endpoint}/bodegas`)
        setBodegas(response.data)
    }

    const getAllDispositivosEnBodega = async () => {
        const response = await axios.get(`${endpoint}/verbodegas`)
        setDispositivosEnBodega(response.data)
    }

    const deleteDispositivoEnBodega = async (id) => {
        await axios.delete(`${endpoint}/enbodega/${id}`)
        getAllDispositivosEnBodega()
    }

    const getDispositivosBodega = async (e) => {
        e.preventDefault()
        const response = await axios.get(`${endpoint}/filtrobodega/${bodega_id}`)
        setDispositivosEnBodega(response.data)
    }

    const getDispositivosMarca = async (e) => {
        e.preventDefault()
        const response = await axios.get(`${endpoint}/filtromarca/${marca}`)
        setDispositivosEnBodega(response.data)
    }

    const getDispositivosModelo = async (e) => {
        e.preventDefault()
        const response = await axios.get(`${endpoint}/filtromodelo/${modelo}`)
        setDispositivosEnBodega(response.data)
    }

    const getMarcas = async () => {
        const response = await axios.get(`${endpoint}/marcas`)
        setMarcas(response.data)
    }

    const getModelos = async () => {
        const response = await axios.get(`${endpoint}/modelos`)
        setModelos(response.data)
    }

    useEffect(() => {
        bodegasIngresadas()
        getAllDispositivosEnBodega()
        getMarcas()
        getModelos()
    }, [])

    return (
        <div>

            <div className='d-grid gap-2'>
                <Link to="/ingresar" className="btn btn-success btn-lg mt-2 mb-2 text-white">Ingresar Dispositivo</Link>
            </div>

            <div className='d-grid gap-2'>

                <form onSubmit={getAllDispositivosEnBodega}>
                    <button type="submit" className="btn btn-primary">Todos los dispositivos</button>
                </form>

                <form onSubmit={getDispositivosBodega}>
                
                    <label htmlFor="bodega_id">Bodegas</label>
                    <select name="bodega_id" id="bodega_id" className="form-control" onChange={(e) => setBodega_id(e.target.value)}>
                    <option value="">Click para ver bodegas</option>
                        {bodegas.map( (bodega) => (
                            <option key={bodega.id} value={bodega.id}>{bodega.nombre}</option>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-primary">Filtrar</button>

                </form>

                <form onSubmit={getDispositivosMarca}>
                    <label htmlFor="marca_id">Marcas</label>
                    <select name="marca_id" id="marca_id" className="form-control" onChange={(e) => setMarca(e.target.value)}>
                        <option value="">Click para ver marcas</option>
                        {marcas.map( (marca) => (
                            <option key={marca.id} value={marca.marca}>{marca.marca}</option>
                        ))}
                    </select>

                    <button type="submit" className="btn btn-primary">Filtrar</button>

                </form>

                <form onSubmit={getDispositivosModelo}>
                    <label htmlFor="modelo_id">Modelos</label>
                    <select name="modelo_id" id="modelo_id" className="form-control" onChange={(e) => setModelo(e.target.value)}>
                        <option value="">Click para ver modelos</option>
                        {modelos.map( (modelo) => (
                            <option key={modelo.id} value={modelo.modelo}>{modelo.modelo}</option>
                        ))}
                    </select>

                    <button type="submit" className="btn btn-primary">Filtrar</button>

                </form>

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