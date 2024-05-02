import { useState, useEffect } from 'react'
import { api } from 'src/services/_api'

const usePost = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [postData, setPostData] = useState(null) // Estado para armazenar os dados a serem enviados

	useEffect(() => {
		const postDataToAPI = async () => {
			if (postData) {
				setLoading(true)
				setError(null)
				try {
					const response = await api.post('/api/endpoint', postData)
				} catch (error) {
					setError(error.response.data.message) // Ou algo parecido dependendo da estrutura da resposta de erro
				}
				setLoading(false)
			}
		}

		postDataToAPI()

		return () => {}
	}, [postData])

	const post = (data) => {
		setPostData(data)
	}

	return { loading, error, post }
}

export default usePost
