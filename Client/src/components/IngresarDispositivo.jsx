import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const IngresarDispositivo = () => {

    
    const [bodega_id, setBodega_id] = useState([])
    const [dispositivo_id, setDispositivo_id] = useState([])
    const [dispositivos, setDispositivos] = useState([])

    const dispositivosIngresados = async () => {
        const response = await axios.get(`${endpoint}/dispositivos`)
        setDispositivos(response.data)
    }

    useEffect(() => {
        dispositivosIngresados()
    }
    , [])

    const navigate = useNavigate()
    const ingresoEnBodega = async (e) => {
        e.preventDefault()
        await axios.post(`${endpoint}/enbodega`, {
            bodega_id: bodega_id,
            dispositivo_id: dispositivo_id
        })
        navigate('/')
    }

    return (
        <div>
            <h3>Ingresar producto en bodega</h3>
            <form onSubmit={ingresoEnBodega}> 
                <div className="form-group">
                    
                    <label className='form-label'>Bodega</label>

                    <select className="form-control" onChange={(e) => setBodega_id(e.target.value)}>
                        <option value="">Seleccione una bodega</option>
                        <option value="1">Bodega 1</option>
                        <option value="2">Bodega 2</option>
                        <option value="3">Bodega 3</option>
                    </select>

                    <label className='form-label'>Dispositivo</label>

                    <select className="form-control" onChange={(e) => setDispositivo_id(e.target.value)}>
                    <option value="">Seleccione un dispositivo</option>
                        {dispositivos.map( (dispositivo) => (
                            <option key={dispositivo.id} value={dispositivo.id}>{dispositivo.nombre}</option>

                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>

        </div>
    )
}

export default IngresarDispositivo