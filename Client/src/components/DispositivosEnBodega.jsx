import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link, useNavigate} from 'react-router-dom'


const endpoint = 'http://localhost:8000/api'

const DispositivosEnBodega = () => {

    const [bodegas, setBodegas] = useState([])
    const [bodega_id, setBodega_id] = useState([])
    const [dispositivosEnBodega, setDispositivosEnBodega] = useState([])
    const [marca, setMarca] = useState([])
    const [marcas, setMarcas] = useState([])
    const [modelo, setModelo] = useState([])
    const [modelos, setModelos] = useState([])

    const navigate = useNavigate()

    const getAllDispositivosEnBodega = async () => {
        const response = await axios.get(`${endpoint}/verbodegas`)
        setDispositivosEnBodega(response.data)
    }

    const deleteDispositivoEnBodega = async (id) => {
        await axios.delete(`${endpoint}/enbodega/${id}`)
        getAllDispositivosEnBodega()
        navigate('/')
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

    const getBodegas = async () => {
        const response = await axios.get(`${endpoint}/bodegas`)
        setBodegas(response.data)
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
        getBodegas()
        getAllDispositivosEnBodega()
        getMarcas()
        getModelos()
    }, [])

    return (
        <div className='contenido'>
            <div className='ingresarDisp'>
                <ul className='accionesPrincipales'>
                    <li>
                        <Link to="/ingresar-dispositivo" className="btn btn-success btn-lg mt-2 mb-2 text-white">Ingresar Nuevo Dispositivo</Link>
                    </li>
                    <li>
                        <Link to="/ingresar" className="btn btn-success btn-lg mt-2 mb-2 text-white">Ingresar Dispositivo a Bodega</Link>
                    </li>
                </ul>
            </div>

            <div className='subcontenido'>

                <div className='filtros'>
                    <hr/>
                    <h2>Filtros</h2>
                    <br/>

                    <form onSubmit={getDispositivosBodega}>
                    
                        <select name="bodega_id" id="bodega_id" className="form-control" onChange={(e) => setBodega_id(e.target.value)}>
                        <option value="" id='filtro'>Click para ver bodegas</option>
                            {bodegas.map( (bodega) => (
                                <option key={bodega.id} value={bodega.id}>{bodega.nombre}</option>
                            ))}
                        </select>

                        <br/>

                        <button type="submit" className="btn btn-primary" id="filtro">Filtrar</button>

                    </form>

                    <br/>

                    <form onSubmit={getDispositivosMarca}>
                        <select name="marca_id" id="marca_id" className="form-control" onChange={(e) => setMarca(e.target.value)}>
                            <option value="" id='filtro'>Click para ver marcas</option>
                            {marcas.map( (marca) => (
                                <option key={marca.id} value={marca.marca}>{marca.marca}</option>
                            ))}
                        </select>

                        <br/>

                        <button type="submit" className="btn btn-primary" id="filtro">Filtrar</button>

                    </form>

                    <br/>

                    <form onSubmit={getDispositivosModelo}>

                        <select name="modelo_id" id="modelo_id" className="form-control" onChange={(e) => setModelo(e.target.value)}>
                            <option value="" id='filtro'>Click para ver modelos</option>
                            {modelos.map( (modelo) => (
                                <option key={modelo.id} value={modelo.modelo}>{modelo.modelo}</option>
                            ))}
                        </select>

                        <br/>

                        <button type="submit" className="btn btn-primary" id="filtro">Filtrar</button>

                    </form>

                    <br/>

                    <form onSubmit={getAllDispositivosEnBodega}>
                        <button type="submit" className="btn btn-primary" >Todos los dispositivos en bodega</button>
                    </form>
                </div>

                <div className='tablaPrincipal'>
                    <hr/>
                    <h1>Dispositivos ingresados en bodegas</h1>
                    <br/>

                    <table className='table table-striped'>

                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>ID Dispositivo</th>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Bodega</th>
                                <th>Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dispositivosEnBodega.map(dispositivo => (
                                <tr key={dispositivo.id}>
                                    <td data-titulo="ID Dispositivo">{dispositivo.dispositivo_id}</td>
                                    <td data-titulo="Nombre">{dispositivo.nombre}</td>
                                    <td data-titulo="Marca">{dispositivo.marca}</td>
                                    <td data-titulo="Modelo">{dispositivo.modelo}</td>
                                    <td data-titulo="Bodega">{dispositivo.bodega_id}</td>
                                    <td className='accion'>
                                        <button onClick={() => deleteDispositivoEnBodega(dispositivo.id)} className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default DispositivosEnBodega