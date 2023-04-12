import React, { useState } from 'react';
import axios from '../../api/axios';
import jwtDecode from 'jwt-decode';
const LOGIN_URL = '/api/login_check';


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: username, password: password}),
                    {
                        headers:{'content-Type' : 'application/json'},
                        withCredentials: true
                    }
            )

            const accessToken = response.data.token;
            const token = { accessToken: accessToken };
            console.log(accessToken);
            
            const storedToken = window.localStorage.setItem(
                'loggedAppUser', accessToken
            );

            console.log(storedToken)

            const auth_username = { username: username }
            const stored_username = window.localStorage.setItem(
                'name', JSON.stringify(auth_username)
            );
            console.log(stored_username)

            const decoded_token = jwtDecode(accessToken)
            console.log(decoded_token);

            const decoded_role = decoded_token.roles

            const userRole = { role: decoded_role }
            const stored_roles = window.localStorage.setItem(
                'role', JSON.stringify(userRole)
            )

            setUsername('')
            setPassword('')
            setSuccess(true)

            console.log('¡Estás logead@!')

        }catch (err){
            console.log('Oh vaya! No funciona ...')
        }
    }

  return (
    <div>
        {success ? (
            <section className='success'>
                <h2>¡Has iniciado sesión!</h2>
                <a href='#' className='btn-login'>Ve al inicio</a>
            </section> 
        ) : (
            <section>
                <h1>Login</h1>
                    <div className='box-fichaje'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='username'>username</label>
                            <input
                                type='text'
                                id='username'
                                autoComplete='off'
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />

                            <label htmlFor='password'>Contraseña</label>
                            <input
                                type='password'
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                            <button className='btn'>Entrar</button>
                        </form>

                        <a href="#" className='btn-password'>Recuperar Contraseña</a>
                    </div>
            </section>
        )}
    </div>
  )
}

export default Login;