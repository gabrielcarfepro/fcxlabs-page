import './style.scss';

export const LandingHome = () => {
    return (
        <section className='main-container'>
            <div className='logo-and-call-wrapper'>
                <img src="/src/assets/imgs/fcxlabs_logo.svg" alt="Logo da FCx Labs" />
                <p>Somos o laboratório de tecnologia e inovação do grupo <b>Ferreira Costa</b></p>
            </div>
            <img className='code-lines-vector' src="/src/assets/imgs/code_lines_vector.svg" alt="Art Design que representa uma tela de códigos." />
            <img className='network-vector' src="/src/assets/imgs/network_vector.svg" alt="Art Design que representa uma topologia de rede." />
            <img className='points-vector' src="/src/assets/imgs/points_vector.svg" alt="Art Design que representa pontos e botões de X." />
        </section>
    );
}