const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:8000/')
        if(!response.ok) throw new Error('Response Error')
        const data = await response.json()
        console.log(data.message)
    } catch(error) {
        console.error('Error getting data:', error)
    }
}

fetchData()