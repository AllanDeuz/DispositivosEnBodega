import React, {useState} from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
const endpoint = 'http://localhost:8000/api'

const IngresarDispositivo = () => {

    
    const [bodega_id, setBodega_id] = useState([])
    const [dispositivo_id, setDispositivo_id] = useState([])
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

                    <input
                        value={bodega_id}
                        onChange={(e) => setBodega_id(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                    <label className='form-label'>Dispositivo</label>
                    <input
                        value={dispositivo_id}
                        onChange={(e) => setDispositivo_id(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>

        </div>
    )
}

export default IngresarDispositivo