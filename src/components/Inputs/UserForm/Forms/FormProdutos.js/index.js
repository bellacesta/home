import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import BtnSendZap from "../../../../../utils/BtnSendZap";
import { Link } from "react-router-dom";


export default function FormProdutos() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit, getValues } = useForm();

    //Envia todos os dados do formulario por meio de uma url do whatsapp
    const formValues = getValues();
    const nome = `${formValues.NOME}`
    const zap = `${formValues.ZAP}`
    const address = `${formValues.ADDRESS}`
    const produtos = `${formValues.PRODUTOS}`
    const mensagem = `${formValues.MENSAGEM}`




    return (
        <>
            <div className="container">
                <form className=" row g-3">
                    {/* Nome da pessoa */}
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label fw-bold fs-5">Nome</label>
                        <input type="text" class="form-control"{...register("NOME", { required: true })} />
                    </div>
                    {/* Zap */}
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label fw-bold fs-5">Whatsapp</label>
                        <input type="number" class="form-control" {...register("ZAP", { required: true })} />
                    </div>
                    {/* Endereço */}
                    <div class="col-12">
                        <label for="inputAddress" class="form-label fw-bold fs-5">Endereço Completo</label>
                        <input type="text" class="form-control" placeholder="Bairro, Cidade, Lotes, Ap" {...register("ADDRESS", { required: true })} />
                    </div>
                    {/* inicia o check SALGADINHOS*/}
                    <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Salgadinhos:</label>
                        {[
                            'Doritos 300g',
                            'Doritos 55g',
                            'Ruflles',
                            'Pringles',


                        ].map((descktop) => (
                            <div className="border p-3 mt-2">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value={descktop.toLowerCase()}  {...register("PRODUTOS")} />
                       
                                  
                                  
                                  <label class="form-check-label ms-2" for="flexCheckDefault">
                                    
                                        {descktop.toLowerCase()}
                                    </label>
                                </div>
                            </div>


                        ))}

                    </div>
                    {/* inicia o check GULOSEIMAS*/}
                    <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Doces:</label>
                        {[
                            'Machemelon',
                            ' Finis',
                            'M&Ms',
                            'Nutella 140g',
                            'Bis 126g',
                            ' Bis Extra 45g',
                            'Barra de chocolate Lacta',
                            'Barra de chocolate Nestlé ',
                            'Barra de chocolate Garoto',
                            'Kit kat',
                            'Caixa de bombom Lacta',
                            'Caixa de bombom Nestlé',
                            'Caixa de bombom Garoto',
                            'Ferrero Rocher 8un',
                            'Ferrero Rocher 3un',
                            'Bueno Kinder',
                            'Ouro Branco',
                            'Sonho de Valsa',
                            'Barra Nutella',
                            'Geleia',



                        ].map((descktop) => (
                            <div className="border p-3 mt-2">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value={descktop.toLowerCase()}  {...register("PRODUTOS")} />
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        {descktop.toLowerCase()}
                                    </label>
                                </div>
                            </div>


                        ))}

                    </div>

                      {/* inicia o check Bebidas*/}
                      <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Bebidas:</label>
                        {[
                           'Iorgute',
                          'Danone Nestlé', 
                           'Iorgute Alpino', 
                           'Suco one Uva 300ml',
                           'Suco one laranja 300ml',
                           'Suco Aurora 300ml',
                           'Coca-Cola', 
                          ' Heineken 330m',
                          ' Corona', 
                           'Red Bull',
                           'JackDaniels 1L',
                           'JackDaniels 375ml',
                           'JackDaniels 50ml',
                           'Ducoco',
                           'Vinho Pergola', 
                           'Itaipava', 
                           'Budwelser', 
                          ' Stella Artois', 
                           'Elsenbahn', 
                           'Brahma',
                           'Império', 
                           'Bohemia',
                           'Pepis',



                        ].map((descktop) => (
                            <div className="border p-3 mt-2">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value={descktop.toLowerCase()}  {...register("PRODUTOS")} />
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        {descktop.toLowerCase()}
                                    </label>
                                </div>
                            </div>


                        ))}

                    </div>

                      {/* inicia o check Petiscos*/}
                      <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Petiscos:</label>
                        {[
                          'Peito de Peru', 
                          'Queijo', 
                          'Presunto', 
                          'Roleta de Amendoins ( 5 sabor)',
                          'Castanha de caju', 
                          'Ameixa seca', 
                          'Damasco seco',
                          'Salame', 
                          'Azeitona ',
                          'Amendoin Japonês', 
                          'Amendoin Caramelizado', 
                          'Amendoin sem casca', 
                          'Amendoin verde', 



                        ].map((descktop) => (
                            <div className="border p-3 mt-2">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value={descktop.toLowerCase()}  {...register("PRODUTOS")} />
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        {descktop.toLowerCase()}
                                    </label>
                                </div>
                            </div>


                        ))}

                    </div>
    {/* inicia o check Petiscos*/}
    <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Frutas:</label>
                        {[
                          'Uva Verde',
                          'Uva Roxa', 
                          'Morango', 
                          'Maçã', 
                          'Kiwi', 
                          'Mamão', 
                          'Banana',
                          'Ameixa',
                          'Goiaba', 



                        ].map((descktop) => (
                            <div className="border p-3 mt-2">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value={descktop.toLowerCase()}  {...register("PRODUTOS")} />
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        {descktop.toLowerCase()}
                                    </label>
                                </div>
                            </div>


                        ))}

                    </div>
                        {/* inicia o check Pães*/}
                        <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Pães e Biscoitos:</label>
                        {[
                          'Pão de Sal', 
                          'Pão francês', 
                          'Pão de forma', 
                          'Misto', 
                          'Pão de queijo', 
                          'Donuts',
                          'Torrada',
                          'Bolo', 
                          'Biscoitinhos', 
                          'Biscoitinhos bauducco', 
                          'Biscoitinhos Nestlé', 
                          'Bicoitinhos de Ninho', 
                          'Oreo', 
                          



                        ].map((descktop) => (
                            <div className="border p-3 mt-2">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value={descktop.toLowerCase()}  {...register("PRODUTOS")} />
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        {descktop.toLowerCase()}
                                    </label>
                                </div>
                            </div>


                        ))}

                    </div>
                        {/* inicia o check Decoração*/}
                        <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Decorações:</label>
                        {[
                          'Orquídea', 
                          'Flor Pote 11',
                          'Flor Pote 5',
                         ' Porta Retrato', 
                          'Urso', 
                          'Balão Personalizado com Frases', 
                          'Arco de Balão', 
                          'Xícara', 
                          'Taça de vidro', 
                          'Copo de vidro', 



                        ].map((descktop) => (
                            <div className="border p-3 mt-2">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value={descktop.toLowerCase()}  {...register("PRODUTOS")} />
                                    <label class="form-check-label ms-2" for="flexCheckDefault">
                                        {descktop.toLowerCase()}
                                    </label>
                                </div>
                            </div>


                        ))}

                    </div>

                    <div class="col-12">
                        <label for="floatingTextarea2" className="fw-bold fs-5">Mensagem Especial (Opcional)</label>

                        <textarea class="form-control" placeholder="Digite uma mensagem especial que deseja colocar na cesta ou em um balão" id="floatingTextarea2" {...register("MENSAGEM")}> </textarea>
                    </div>
                    {/* Butão que abre o modal com as informações e ainda verifica se o formulario foi preenchido */}

                    <button type="button" className="btn btn-lg btn-success mb-4" onClick={handleSubmit(handleShow)}>
                        Finalizar
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-whatsapp ms-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </button>


                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header>
                            <Modal.Title>
                                <h4 className="mt-2 fw-bold">Informações!</h4>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ul>
                                <li>Prazo para pedidos 48 horas de antêcendencia.</li>
                                <li>Formas de Pagamentos crédito, débito, pix e dinheiro.</li>
                                <li>Só começamos realizar os serviço mediante entrada de 50% do valos total da cesta.</li>
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <BtnSendZap
                                text="Confirmar"
                                produtos={produtos}
                                nome={nome}
                                zap={zap}
                                address={address} 
                                mensagem={mensagem}/>
                        </Modal.Footer>
                    </Modal>
                </form>
            </div>

        </>
    )
}