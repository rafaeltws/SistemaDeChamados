import './profile.css'

import { useContext, useState } from 'react'
import { toast } from 'react-toastify'

import Header from '../../components/Header'
import Title from '../../components/Title'

import { FiSettings } from 'react-icons/fi'

import avatar from '../../assets/avatar.png'

import { AuthContext } from '../../contexts/auth'

import { db } from '../../firebase/firebaseConn'
import { doc, updateDoc } from 'firebase/firestore'

export default function Profile(){
    const { user, storageUser, setUser, logout } = useContext(AuthContext);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);

    async function handleSubmit(e){
        e.preventDefault();

        if(nome !== ''){
            //atualizar o nome
            const docRef = doc(db, "users", user.uid)
            await updateDoc(docRef, {
                nome: nome
            })
            .then(() => {
                let data = {
                    ...user,
                    nome: nome,
                }

                setUser(data);
                storageUser(data);
                toast.success("Atualizado com sucesso!")
            })
        }
    }

    return(
        <div>
            <Header />

            <div className="content">
                <Title name="Minha conta">
                    <FiSettings size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSubmit}>
                        <label className="label-avatar">
                              {avatarUrl === null ? (
                                <img src={avatar} alt="Foto de Perfil" width={250} height={250} />
                              ) : (
                                <img src={avatarUrl} alt="Foto de Perfil" width={250} height={250} />
                              )}

                        </label>

                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>

                        <label>Email</label>
                        <input type="email" value={email} disabled={true} />

                        <button type="submit">Salvar</button>
                    </form>
                </div>

                <div className="container">
                    <button className="logout-btn" onClick={() => logout()}>Sair</button>
                </div>
            </div>

        </div>
    )
}