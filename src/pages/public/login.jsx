import { useAuth, useUtil } from 'src/hooks'
import { Navigate } from 'react-router-dom'
import { useUser } from 'src/hooks'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { api } from 'src/services'

const schema = z.object({
	name: z.string().min(1, 'campo obrigatorio').email('email invalido'),
	pwd: z.string().min(1, 'campo obrigatorio'),
})

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	})
	const [user, setUser] = useState({ name: '', pwd: '' })
	const { getUser } = useUtil()
	const { signin } = useAuth()
	const { save } = useUser()

	const onSubmit = async (data) => {
		console.log(data)

		const { name, pwd } = data

		console.log(data)
		try {
			const response = await api.post('/auth/signin', { password: pwd, email: name })
			if (response.data?.data?.AuthenticationResult?.AccessToken) {
				const accessToken = response.data.data.AuthenticationResult.AccessToken
				console.log(accessToken)
				signin({ name: accessToken })
			}
		} catch (error) {
			// toast de erro
		}
	}

	if (getUser()) return <Navigate to="/auth" replace />
	return (
		<main className="max-container bg-custom min-h-screen flex items-center justify-center max-sm:justify-center py-24 px-6 sm:px-12">
			<section className=" bg-white sm:w-[500px] w-[350px] p-10 rounded-md">
				<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="sm:text-3xl text-2xl font-semibold">Acesse sua conta</h1>
					<p className="mt-5 mb-5 text-slate-500">Seja bem-vindo a nossa comunidade!</p>
					<label>
						<small className="font-semibold">Login *</small>
						<input
							type="text"
							className={`rounded-md px-3 py-3 mt-1 w-full bg-slate-100 focus:border focus:outline-none focus:border-blue-500 ${
								errors.name ? 'border-red-500' : ''
							}`}
							name="name"
							{...register('name')}
							placeholder="Insira seu login ou email"
						/>
						{errors.name && <p className="text-red-500">{errors.name.message}</p>}
					</label>
					<label className="mt-4">
						<small className="font-semibold">Senha *</small>
						<input
							type="password"
							className={`rounded-md px-3 py-3 mt-1 w-full bg-slate-100 focus:border focus:outline-none focus:border-blue-500 ${
								errors.pwd ? 'border-red-500' : ''
							}`}
							name="pwd"
							{...register('pwd')}
							placeholder="Insira sua senha"
						/>
						{errors.pwd && <p className="text-red-500">{errors.pwd.message}</p>}
					</label>
					<p className="mt-4 text-slate-500">Esqueci minha senha</p>
					<button
						className="w-full mt-5 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
						type="submit"
					>
						Logar
					</button>
					<Link
						to={'/sign-in'}
						className="py-2 px-4 w-fit active:border border border-transparent flex items-center 
					justify-center border-black rounded-lg mt-4"
					>
						criar conta
					</Link>
				</form>
			</section>
		</main>
	)
}

export default Login
