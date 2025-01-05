import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'

import logo from '../../assets/logo.png'

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    async function handleSubmit(e){
        e.preventDefault();

        if(name !== '' && email !== '' && password !== ''){
            await signUp(email, password, name)
        }
    }

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="logo sistema de chamados"></img>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Nova Conta</h1>
                    <input 
                    type="text" 
                    placeholder="digite seu nome..."
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                    />
                    <input 
                    type="text" 
                    placeholder="digite seu email..."
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                    />
                    <input 
                    type="password" 
                    placeholder="digite sua senha..."
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                    />

                    <button type='submit'>
                        {loadingAuth ? 'Carregando...' : 'Criar Conta'}
                    </button>
                </form>
                
                <Link to="/">Já possui uma conta? Faça login</Link>
            </div>
        </div>
    )
}