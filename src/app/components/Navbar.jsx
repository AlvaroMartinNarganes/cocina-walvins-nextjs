import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <header className='bg-blue-300 '>
            <nav className='flex items-center justify-between w-full px-10 py-4'>
                <div>
                    <h1 className='text-3xl font-bold'><Link href='/'>Cocina con Walvins</Link></h1>
                </div>
                <div className='flex gap-3'>
                    <Link href='/auth/login' className='hover:bg-blue-400 py-2 px-1'>Iniciar Sesión</Link>
                    <Link href='/auth/register' className='hover:bg-blue-400 py-2 px-1'>Crear Cuenta</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;