'use client'
import React from 'react';
import Link from "next/link";
import {getServerSession} from "next-auth";
import {useSession} from "next-auth/react";

const Navbar = () => {
    const {data:session}=useSession()
    console.log(session)
    return (
        <header className='bg-blue-300 '>
            <nav className='flex items-center justify-between w-full px-10 py-4'>
                <div>
                    <h1 className='text-3xl font-bold'><Link href='/'>Cocina con Walvins</Link></h1>
                </div>
                <div className='flex gap-3'>
                    {/*<Link href='/auth/register' className='hover:bg-blue-400 py-2 px-1'>Crear Cuenta</Link>*/}
                    {session ? <Link href="/api/auth/signout?callbackUrl=/" className='hover:bg-blue-400 py-2 px-1'>Cerrar
                            sesión</Link> :
                        <Link href='api/auth/signin?callbackUrl=/' className='hover:bg-blue-400 py-2 px-1'>Iniciar Sesión</Link>}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;