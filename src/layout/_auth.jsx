import React from 'react';
import { FaPlus, FaUser } from 'react-icons/fa';
import { useAuth, useUtil } from 'src/hooks';
import { Outlet, Navigate } from 'react-router-dom';
import { Button } from "../../@/components/ui/button"

const Navbar = () => {
    const { signout } = useAuth();
    return (
        <header className="padding-x py-4 bg-lime-600">
            <nav className="flex justify-between items-center max-container">
                <a href="/" className="text-white">Cat List</a>
                {/* <div className="flex flex-col max-lg:hidden">
                    <small className="text-slate-600">Cursando:</small>
                    <p className="text-2xl font-semibold">Análise e Desenvolvimento de Sistemas</p>
                </div> */}
                {/* TODO: HAMBURGER */}
                <div className="flex gap-3">
                    <button className="bg-transparent text-white font-semibold py-2 px-4 border border-blue-500 rounded padding-x py-2 border-white text-white">
                        <span className="flex items-center">
                            <FaPlus className="text-white mr-1 transition-colors duration-300 ease-in-out" />
                            Add a cat
                        </span>
                    </button>
                    <button className="w-12 h-12 bg-transparent-500 border-2 border-white rounded-full flex items-center justify-center hover:text-black">
                        <FaUser className="text-white" />
                    </button>
                </div>
            </nav>
        </header>
    );
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