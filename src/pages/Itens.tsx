import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import './Itens.css';
import { useState } from 'react';

const ItensPage = function() {
    //let estado = INICIAL
    const [estado,setEstado] = useState ('inicial');

    const botaoCriarClicado = function(){
        setEstado ('CRIAR');
        //let estado = CRIAR
    };
    return (
        <>
            <Cabecalho />
            <main>
                <button onClick={botaoCriarClicado}>Test</button>
                <h1 className='Itens01'>Itens</h1>
        <h1>Itens</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        {(estado === 'INICIAL') && (
          <Botao texto="Novo" />
        )}
        {(estado === 'CRIAR') && (
          <form className='item'>
            <label>
                Nome:
                <input type="text" placeholder='Nome'/>
            </label>
            <label>
                Descrição:
            <textarea placeholder='Descrição'></textarea>
            </label>
            <div>
                <Botao texto='Salvar' />
                <Botao texto='Cancelar' />
            </div>
            </form> 
        )}
            
        </main>
        < Rodape />
        </>
    )
};

export default ItensPage;