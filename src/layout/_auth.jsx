import React from 'react'
import { useState } from 'react'
import { useAuth, useUtil } from 'src/hooks'
import { Outlet, Navigate } from 'react-router-dom'

import * as dialog from "../../components/ui/dialog"
import { Input } from "../../@/components/ui/input"
import { Label } from "../../@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../@/components/ui/select"
import { Textarea } from "../../@/components/ui/textarea"




const Navbar = () => {
	const { signout } = useAuth()
	const [avatar, setAvatar] = useState(null);

	const handleAvatarChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setAvatar(imageUrl);
		}
	}

	const removeAvatar = () => {
		setAvatar(null); // Remove a imagem
	};

	return (
		<header className="padding-x py-4">
			<nav className="flex justify-between items-center max-container">
				<a href="/" className="h-16 w-16 bg-black"></a>
				<div className="flex flex-col max-lg:hidden">
					<small className="text-slate-600">Cursando:</small>
					<p className="text-2xl font-semibold">Análise e Desenvolvimento de Sistemas</p>
				</div>
				{/* TODO: HAMBURGER */}
				<div>
					<dialog.Dialog >
						<dialog.DialogTrigger >+ Add Cat</dialog.DialogTrigger>
						<dialog.DialogContent className="bg-white flex justify-center ">
							<dialog.DialogHeader>
								<dialog.DialogTitle className="w-full font-bold">Add a cat</dialog.DialogTitle>
								<div className="w-full gap-1.5 ease-out">
									{avatar ? (
										<div>
											<img src={avatar} alt="Avatar" className='h-40 rounded-full w-40 flex items-center' />
											<button onClick={removeAvatar}>Remover Avatar</button>
										</div>
									) : (
										<Input
											id="picture"
											type="file"
											className="h-40 rounded-full w-40 flex items-center"
											onChange={handleAvatarChange}
										/>
									)}

									<Label>Name</Label>
									<Input id="nome" type="text" className="w-max"></Input>
									<Label>Breed</Label>
									<Select>
										<SelectTrigger className="w-[180px]">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="light">Light</SelectItem>
										</SelectContent>
									</Select>
									<Label>Age</Label>
									<Select>
										<SelectTrigger className="w-[180px]">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="light">Light</SelectItem>
										</SelectContent>
									</Select>
									<Label>Description</Label>
									<Textarea className="mt-1"></Textarea>
								</div>

							</dialog.DialogHeader>
						</dialog.DialogContent>
					</dialog.Dialog>

				</div>
			</nav>
		</header >
	)
};


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
