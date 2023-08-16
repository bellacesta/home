import Accordion from 'react-bootstrap/Accordion';


export default function Duvidas() {

    return (
        <>

            <h5 class="display-5 fw-bold text-rosa my-4 text-center">Dúvidas Frequentes</h5>
    

            <Accordion defaultActiveKey="0" className='container'>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header > <h6 className='text-rosa'>Onde fica a loja física? </h6></Accordion.Header>
                    <Accordion.Body className='bg-roxo'>
                        <p className='text-light'> Nossa loja é On-line , sendo assim não temos atendimento fisico , somente on-line!</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h6 className='text-rosa'>Onde posso retirar a cesta?</h6></Accordion.Header>
                    <Accordion.Body className='bg-roxo'>
                        <p className='text-light'>Como samos loja On-line , trabalhamos somente por Delivery,  não temos opções de retiradas!</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h6 className='text-rosa'>Qual o preço das Cestas?</h6></Accordion.Header>
                    <Accordion.Body className='bg-roxo'>
                        <p className='text-light'>Nossas Cestas por serem Personalizadas de acordo com o cliente, o preço varia de acordo com cada item retirado ou adicionado, o que interfere no valor final do produto</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h6 className='text-rosa'>Quanto tempo antes tenho que fazer o pedido?</h6></Accordion.Header>
                    <Accordion.Body className='bg-roxo'>
                        <p className='text-light'>Algumas opções do nossos Produtos, devem ser feitas com 1 a 2 dias de antecedência, como: Café da manhã,  bebidas e Personalizado com bolo, algumas  são feita no dia e entregue 2horas no mesmo dia!</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}