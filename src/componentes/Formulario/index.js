import CampoTexto from '../CamspoTexto'
import './Formulario.css'

const Formulario = () => {

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario 