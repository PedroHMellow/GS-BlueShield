import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { Link } from "react-router-dom";
import { register, login, validateToken } from '../../Services/api.js';
import React, { useState } from 'react';

function Home () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            await register(username, password);
            setMessage('User registered successfully');
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            setToken(response.data.token);
            setMessage('User logged in successfully');
        } catch (error) {
            setMessage('Error logging in');
        }
    };

    const handleValidate = async () => {
        try {
            const response = await validateToken(token);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Invalid token');
        }
    };

    return (
        <>
            <Header />
            

            <section style={{backgroundImage: "url('Banner.png')"}} className="h-screen min-w-full">

                <div className="flex flex-col md:flex-row pt-20 items-center">
                    <div className="p-10 pl-16">
                        <p className="text-white text-xl md:text-2xl lg:text-5xl"> 
                            <samp className="text-Azul_Fiap2 font-bold"> BlueShield: </samp> O Escudo e Vigia dos Mares 
                        </p>

                        <p className="text-white mt-5 text-sm md:text-md lg:text-lg text-justify">
                            Desenvolvemos um sistema baseado em Arduino que monitora perturbações nos mares em corpos d'água, como variações de temperatura (seja ela baixa ou alta) e níveis de oxigenação da água, ph(grau de acidez), permitindo intervenções quando necessário.
                        </p>
                        <div>
            <h1>User Authentication</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleValidate}>Validate Token</button>
            <p>{message}</p>
        </div>
                        <div className="w-40 mb-12">
                            <Link to="/Dashboard" > 
                                <button className="flex justify-center items-center bg-Azul_ODS14 text-white border-2 rounded-lg p-3 px-7 mt-10">
                                    Teste aqui!!
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="opacity-0  md:opacity-100	">
                        <img src="../../../public/BlueShield_Logo.png" alt="" className="w-80 h-80 min-w-80 min-h-80 max-w-80 max-h-80"/>
                    </div>

                </div>
            
            </section>
            
            <Footer />

        </>
    )
}

export default Home