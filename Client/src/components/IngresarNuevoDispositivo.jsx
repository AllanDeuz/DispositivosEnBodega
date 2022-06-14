import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
import DispositivosIngresados from './DispositivosIngresados'

const endpoint = 'http://localhost:8000/api'

const IngresarNuevoDispositivo = () => {

    const [dispositivo, setDispositivo] = useState({
        nombre: '',
        marca: '',
        modelo: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setDispositivo({
            ...dispositivo,
            [e.target.name]: e.target.value
        })
    }

    const ingresarDispositivo = async (e) => {
        e.preventDefault()
        await axios.post(`${endpoint}/dispositivo`, dispositivo)

        navigate('/ingresar-dispositivo')

        window.location.reload()

    }

    return (
        <div>

            <h1>Ingresar nuevo dispositivo</h1>
            <br/>
            <hr/>
            <form onSubmit={ingresarDispositivo} className='nuevoDispositivo'>
                <input type="text" placeholder="Nombre del dispositivo" value={dispositivo.nombre} onChange={(e) => setDispositivo({...dispositivo, nombre: e.target.value})} />
                <input type="text" placeholder="Marca del dispositivo" value={dispositivo.marca} onChange={(e) => setDispositivo({...dispositivo, marca: e.target.value})} />
                <input type="text" placeholder="Modelo del dispositivo" value={dispositivo.modelo} onChange={(e) => setDispositivo({...dispositivo, modelo: e.target.value})} />
                <br/>
                <button type="submit" className='btn btn-success'>Ingresar dispositivo</button>
            </form>
            <hr/>

            <DispositivosIngresados/>
        </div>
    )
}

export default IngresarNuevoDispositivo