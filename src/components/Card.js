import './Card.css'
function Card() {
    return (
        <div id="container">
            <div id='lista_card'>
                <div className="card" id='card_1'>
                    <div className="nome_card" id='nome_card_1'>
                        <h2>Básico</h2>
                    </div>
                    <div className="descricao_card" id='descricao_card_1'>
                        <h1>18,90 / Mês</h1>
                        <p>O Plano Básico oferecido pela Netflix é uma opção acessível para os espectadores que desejam desfrutar da vasta biblioteca
                            de conteúdo da plataforma a um preço mais econômico. Este plano é projetado para atender às necessidades essenciais
                            de streaming, proporcionando uma experiência de entretenimento básica. </p>
                            <p>_____________________________</p>
                    </div>

                    <div className="vantagens_card" id='vantagens_card_1'>
                        <ul>
                            <li><h5>Qualidade de Vídeo Padrão</h5></li>
                            <li><h5>Acessibilidade Econômica</h5></li>
                            <li><h5>Streaming em um Dispositivo por Vez</h5></li>
                            <li><h5>Catálogo Completo</h5></li>
                            <li><h5>Sem Recurso de Download</h5></li>
                        </ul>
                    </div>
                    <div className='botao'>
                        <button>ASSINAR</button>
                    </div>
                </div>

                <div className="card" id='card_2'>
                    <div className="nome_card" id='nome_card_2'>
                        <h2>Padrão</h2>
                    </div>
                    <div className="descricao_card" id='descricao_card_2'>
                        <h1>29,00 / Mês</h1>
                        <p>O Plano Padrão da Netflix oferece uma experiência de streaming ainda mais aprimorada, proporcionando uma combinação
                            ideal entre qualidade e acessibilidade. Ideal para aqueles que desejam um compromisso equilibrado.</p>
                            <p>_____________________________</p>
                    </div>

                    <div className="vantagens_card" id='vantagens_card_2'>
                        <ul>
                            <li><h5>Qualidade de Vídeo em HD</h5></li>
                            <li><h5>Acessibilidade Ampliada</h5></li>
                            <li><h5>Streaming em Dois Dispositivos Simultaneamente</h5></li>
                            <li><h5>Catálogo Completo e Recurso de Download</h5></li>
                            <li><h5>Experiência de Streaming Aprimorada</h5></li>
                        </ul>
                    </div>
                    <div className='botao'>
                        <button>ASSINAR</button>
                    </div>
                </div>

                <div className="card" id='card_3'>
                    <div className="nome_card" id='nome_card_3'>
                        <h2>Premium</h2>
                    </div>
                    <div className="descricao_card" id='descricao_card_3'>
                        <h1>59,90 / Mês</h1>
                        <p>O Plano Premium da Netflix oferece uma experiência de streaming incomparável, proporcionando a mais alta qualidade de vídeo e uma variedade excepcional de recursos. Ideal para quem busca o ápice do entretenimento sob demanda.</p>
                        <p>_____________________________</p>
                    </div>

                    <div className="vantagens_card" id='vantagens_card_3'>
                        <ul>
                            <li><h5>Qualidade de Vídeo em Ultra HD/4K</h5></li>
                            <li><h5>Áudio Imersivo</h5></li>
                            <li><h5>Streaming em Quatro Dispositivos Simultaneamente</h5></li>
                            <li><h5>Catálogo Completo e Recurso de Download</h5></li>
                            <li><h5>Experiência Sem Interrupções</h5></li>
                        </ul>
                    </div>
                    <div className='botao'>
                        <button>ASSINAR</button>
                    </div>
                </div>

                <div className="card" id='card_4'>
                    <div className="nome_card" id='nome_card_4'>
                        <h2>Empresarial</h2>
                    </div>
                    <div className="descricao_card" id='descricao_card_4'>
                        <h1>99,90 / Mês</h1>
                        <p>O Plano Empresarial da Netflix oferece uma solução completa de entretenimento sob demanda, projetada especialmente para atender às necessidades das empresas. Proporciona uma experiência premium para todos os colaboradores.</p>
                        <p>_____________________________</p>
                    </div>

                    <div className="vantagens_card" id='vantagens_card_4'>
                        <ul>
                            <li><h5>Qualidade de Vídeo em Ultra HD/4K</h5></li>
                            <li><h5>Áudio Imersivo</h5></li>
                            <li><h5>Streaming em Múltiplos Dispositivos Simultaneamente</h5></li>
                            <li><h5>Controle de Acesso e Permissões</h5></li>
                            <li><h5>Relatórios de Uso e Analytics</h5></li>
                        </ul>
                    </div>
                    <div className='botao'>
                        <button>ASSINAR</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;