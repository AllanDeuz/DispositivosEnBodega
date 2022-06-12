import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const EnBodega = () => {
  const [dispositivosEnBodega, setDispositivosEnBodega] = useState([])
  useEffect(() => {
    getAllDispositivosEnBodega()
  }, [])

  const getAllDispositivosEnBodega = async () => {
    const response = await axios.get(`${endpoint}/dispositivos/en-bodega`)
    setDispositivosEnBodega(response.data)
  }

  return (
    <div>
      EnBodega
    </div>
  )
}

export default EnBodega