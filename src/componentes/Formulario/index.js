import CampoTexto from '../CamspoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {


    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]


    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
            </form>
        </section>
    )
}

export default Formulario 