import React from 'react'
import { useAuth, useUtil } from 'src/hooks'
import { Outlet, Navigate } from 'react-router-dom'

const Navbar = () => {
	const { signout } = useAuth()
	return (
		<header className="padding-x py-4">
			<nav className="flex justify-between items-center max-container">
				<a href="/" className="h-16 w-16 bg-black"></a>
				<div className="flex flex-col max-lg:hidden">
					<small className="text-slate-600">Cursando:</small>
					<p className="text-2xl font-semibold">Análise e Desenvolvimento de Sistemas</p>
				</div>
				{/* TODO: HAMBURGER */}
				<div className="flex gap-3">
					<div className="w-12 h-12 bg-pink-500 rounded-full"></div>
				</div>
			</nav>
		</header>
	)
}

const Auth = () => {
	const { getUser } = useUtil()
	if (!getUser()) return <Navigate to="/login" replace />
	return (
		<section>
			<Navbar />
			<Outlet />
		</section>
	)
}

export default Auth
export { Auth }
