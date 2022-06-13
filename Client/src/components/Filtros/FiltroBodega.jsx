import React, {useState, useEffect} from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api'

const FiltroBodega = () => {

    const [dispositivos, setDispositivos] = useState([])
    const [bodegas, setBodegas] = useState([])

    const bodegasIngresadas = async () => {
        const response = await axios.get(`${endpoint}/bodegas`)
        setBodegas(response.data)
    }

    const dispositivosIngresados = async () => {
        const response = await axios.get(`${endpoint}/dispositivos`)
        setDispositivos(response.data)
    }

    const filtrarBodega = async (e) => {
        e.preventDefault()
        const response = await axios.get(`${endpoint}/filtrobodega/${e}`)
        setDispositivos(response.data)
    }

    useEffect(() => {
        bodegasIngresadas()
        dispositivosIngresados()
    }
    , [])


  return (
    <div>

        FiltroBodega

        <form onSubmit={filtrarBodega()}>

            <div className="form-group">

                <label className='form-label'>Seleccione alguna bodega</label>

                <select className="form-control">
                {bodegas.map( (bodega) => (
                    <option key={bodega.id} value={bodega.id}>{bodega.nombre}</option>
                ))}
                </select>

            </div>

            <button type="submit" className="btn btn-primary">Filtrar</button>

        </form>

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
                {dispositivos.map(dispositivo => (
                    <tr key={dispositivo.id}>
                        <td>{dispositivo.dispositivo_id}</td>
                        <td>{dispositivo.nombre}</td>
                        <td>{dispositivo.marca}</td>
                        <td>{dispositivo.modelo}</td>
                        <td>{dispositivo.bodega_id}</td>
                    </tr>
                ))}

            </tbody>

        </table>

    </div>

  )
}

export default FiltroBodega