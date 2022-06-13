import React, {useState, useEffect} from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api'


const Filtro = () => {

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
        const response = await axios.get(`${endpoint}/bodegas/${e}`)
        setDispositivos(response.data)
    }

    useEffect(() => {
        bodegasIngresadas()
        dispositivosIngresados()
    }
    , [])



    return (
        <div>
            Filtros
            <form onSubmit={filtrarBodega()}>

                <div className="form-group">

                    <label className='form-label'>Seleccione alguna bodega</label>

                    <ul>

                        <li>
                            <select className="form-control">
                            {bodegas.map( (bodega) => (
                                <option key={bodega.id} value={bodega.id}>{bodega.nombre}</option>
                            ))}
                            </select>
                        </li>

                        <li>
                            <select className="form-control">
                            <option value="">Marcas</option>
                            {dispositivos.map( (dispositivo) => (
                                <option key={dispositivo.id} value={dispositivo.marca}>{dispositivo.marca}</option>
                            ))}
                            </select>
                        </li>

                        <li>
                            <select className="form-control">
                            <option value="">Modelo</option>
                            {dispositivos.map( (dispositivo) => (
                                <option key={dispositivo.id} value={dispositivo.modelo}>{dispositivo.modelo}</option>
                            ))}
                            </select>
                        </li>
                    </ul>

                </div>

                <button type="submit" className="btn btn-primary">Filtrar</button>

            </form>


            <form>

                <div className="form-group">

                    <label className='form-label'>Seleccione algun filtro</label>

                    <ul>

                        <li>
                            <select className="form-control">
                            <option value="">Bodega</option>
                            {bodegas.map( (bodega) => (
                                <option key={bodega.id} value={bodega.id}>{bodega.nombre}</option>
                            ))}
                            </select>
                        </li>

                        <li>
                            <select className="form-control">
                            <option value="">Marcas</option>
                            {dispositivos.map( (dispositivo) => (
                                <option key={dispositivo.id} value={dispositivo.marca}>{dispositivo.marca}</option>
                            ))}
                            </select>
                        </li>

                        <li>
                            <select className="form-control">
                            <option value="">Modelo</option>
                            {dispositivos.map( (dispositivo) => (
                                <option key={dispositivo.id} value={dispositivo.modelo}>{dispositivo.modelo}</option>
                            ))}
                            </select>
                        </li>
                    </ul>

                </div>
                <button type="submit" className="btn btn-primary">Filtrar</button>
            </form>

        </div>
    )

}

export default Filtro