import React, {useState, useEffect} from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api'

const TotalEnBodega = () => {

    const [totalBodegas, setTotalBodegas] = useState([])

    const getTotalBodegas = async () => {
        const response = await axios.get(`${endpoint}/totalbodegas`)
        setTotalBodegas(response.data)
    }

    useEffect(() => {
        getTotalBodegas()
    }, [])


    return (
        <div>
            <h1>Total en bodega</h1>
            <hr/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Bodega</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {totalBodegas.map( (totalBodega) => (
                        <tr key={totalBodega.id}>
                            <td data-titulo="Bodega">{totalBodega.id}</td>
                            <td data-titulo="Total">{totalBodega.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TotalEnBodega