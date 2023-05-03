import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = url => {
  const [state, setState] = useState()
  const [hasError, setHasError] = useState(false)

  const getData = () => {
    
    axios.get(url)
    .then(res => {setState(res.data), setHasError(false)})
    .catch(error => {setHasError(true)})
  }

  return [state, getData, hasError]
}

export default useFetch
