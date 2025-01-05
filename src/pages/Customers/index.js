import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { db } from '../../firebase/firebaseConn';
import { addDoc, collection } from 'firebase/firestore';

export default function Customers(){
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    async function handleRegister(e){
        e.preventDefault();

        if(nome !== '' && cnpj !== '' && endereco !== ''){
            await addDoc(collection(db, "customers"), {
                nomeFantasia: nome,
                cnpj: cnpj,
                endereco: endereco
            })
            .then(() => {
                setNome('');
                setCnpj('');
                setEndereco('');
                toast.success("Cliente cadastrado!");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Erro ao fazer o cadastro.")
            })
        } else{
            toast.error("Preenchatodos os campos!")
        }
    }

    return(
        <div>
            <Header />

            <div className='content'>
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Nome fantasia</label>
                        <input 
                          type='text'
                          placeholder='Nome da empresa'
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                        />
                        <label>CNPJ</label>
                        <input 
                          type='text'
                          placeholder='Digite o CNPJ'
                          value={cnpj}
                          onChange={(e) => setCnpj(e.target.value)}
                        />
                        <label>Endereço</label>
                        <input 
                          type='text'
                          placeholder='Endereço do cliente'
                          value={endereco}
                          onChange={(e) => setEndereco(e.target.value)}
                        />

                        <button type="submit">
                            Salvar
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}