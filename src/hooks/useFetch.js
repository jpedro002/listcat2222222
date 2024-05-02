import { useState, useEffect } from 'react'
import { api } from 'src/services'

const useFetch = (initialUrl) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [url, setUrl] = useState(initialUrl)

	const fetchData = async (options = {}) => {
		setIsLoading(true)
		try {
			const response = await api(url, options)
			setData(response.data)
		} catch (error) {
			setError(error)
		}
		setIsLoading(false)
	}

	const postData = async (postData, options = {}) => {
		setIsLoading(true)
		try {
			const response = await api.post(url, postData, options)
			setData(response.data)
		} catch (error) {
			setError(error)
		}
		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [url])

	return { data, error, isLoading, fetchData, postData, setUrl }
}

export default useFetch
