import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

//const handler=NextAuth(options);
const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [
        Credentials({
            name: "user",
            credentials: {
                username: {label: 'User', type: 'text'},
                password: {label: 'Contraseña', type: 'password'}
            },
            async authorize(credentials, req) {
                //TODO: En un futuro conectar con la base de datos, aquí vamos a probar solo que funciona bien
                const user = {id: '1', name: 'walvins', email: 'walvinstheoriginal@gmail.com', pass: '123456'}
                //Comprobar que el usuario existe en la bd
                if (credentials.username === user.name && credentials.password === user.pass) {
                    console.log('ta chevere dale paso')
                    return user
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        //JWT devuelve un valor token.sub que sirve como identificador del usurio, usando este sub podremos
        async jwt({token}) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            return token
        },
        async session({session, token, user}) {
            // Send properties to the client.
            session.user.id = token.sub //Mandar la session con el identificador al cliente para poder hacer lo que necesite
            return session
        }
    }
})
export {handler as GET, handler as POST}