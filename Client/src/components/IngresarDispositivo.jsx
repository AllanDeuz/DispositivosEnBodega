import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
import DispositivosIngresados from './DispositivosIngresados'

const endpoint = 'http://localhost:8000/api'

const IngresarDispositivo = () => {

    
    const [bodega_id, setBodega_id] = useState([])
    const [dispositivo_id, setDispositivo_id] = useState([])
    const [dispositivos, setDispositivos] = useState([])
    const [bodegas, setBodegas] = useState([])

    const getBodegas = async () => {
        const response = await axios.get(`${endpoint}/bodegas`)
        setBodegas(response.data)
    }

    const dispositivosIngresados = async () => {
        const response = await axios.get(`${endpoint}/dispositivos`)
        setDispositivos(response.data)
    }

    useEffect(() => {
        getBodegas()
        dispositivosIngresados()
    }, [])

    const navigate = useNavigate()

    const ingresoEnBodega = async (e) => {
        e.preventDefault()
        await axios.post(`${endpoint}/enbodega`, {
            bodega_id: bodega_id,
            dispositivo_id: dispositivo_id
        })
        dispositivosIngresados()
        navigate('/')
    }

    return (
        <div>

            <h1>Ingresar dispositivo en bodega</h1>

            <br/>
            <hr/>
            <form onSubmit={ingresoEnBodega}> 

                <div className="form-group">

                    <select className="form-control" onChange={(e) => setBodega_id(e.target.value)}>
                        <option value="">Seleccione una bodega</option>
                        {bodegas.map( (bodega) => (
                            <option key={bodega.id} value={bodega.id}>{bodega.nombre}</option>
                        ))}
                    </select>

                    <br/>

                    <select className="form-control" onChange={(e) => setDispositivo_id(e.target.value)}>
                    <option value="">Seleccione un dispositivo</option>
                        {dispositivos.map( (dispositivo) => (
                            <option key={dispositivo.id} value={dispositivo.id}>{dispositivo.nombre} {dispositivo.marca} {dispositivo.modelo}</option>
                        ))}
                    </select>

                </div>
                
                <br/>

                <button type="submit" className="btn btn-success">Ingresar</button>

            </form>
            <hr/>

            <DispositivosIngresados/>
        </div>
    )
}

export default IngresarDispositivo