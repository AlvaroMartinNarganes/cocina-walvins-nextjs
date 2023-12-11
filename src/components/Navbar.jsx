'use client'
import React from 'react';
import Link from "next/link";
import {getServerSession} from "next-auth";
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
    const {data: session} = useSession()
    const imageAvatarSyle={
        borderRadius:'50%'
    }
    return (
        <header className='bg-blue-300 '>
            <nav className='flex items-center justify-between w-full px-10 py-4'>
                <div>
                    <h1 className='text-3xl font-bold'><Link href='/'>Cocina con Walvins</Link></h1>
                </div>
                <div className=''>
                    {/*<Link href='/auth/register' className='hover:bg-blue-400 py-2 px-1'>Crear Cuenta</Link>*/}
                    {session ? <div className='flex flex-row items-center uppercase gap-2'>
                            {session.user.image ?
                                <Image src={session.user.image} width={40}
                                       height={40}
                                       alt={`Foto de perfil de ${session.user.name}`}
                                       style={imageAvatarSyle}
                                /> : <></>}
                            <p className='font-bold'>{session.user.name}</p>
                            <button onClick={() => signOut()} className='hover:bg-blue-400 rounded-xl py-2 px-1'>Cerrar
                                sesión
                            </button>
                        </div> :
                        <button onClick={() => signIn()} className='hover:bg-blue-400 rounded-xl py-2 px-1'>Iniciar
                            Sesión</button>}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;