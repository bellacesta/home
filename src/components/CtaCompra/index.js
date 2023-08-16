import CtaModalProdutos from "../../components/Modal/CtaModalProdutos/index.js";

export default function CtaCompra() {
    return (
        <>
            <div className="bg-rosa">
                <div className="text-center px-3">
                    <h2 className="text-rosa fw-bold">Faça Sua Encomenda Agora</h2>
                    <p className="mb-0 fs-5 text-roxo fw-bold">Não perca a oportunidade de surpreender alguém com um presente verdadeiramente especial.</p><p className="mt-0"> Clique abaixo para encomendar sua cesta personalizada agora!</p>
                    <ul className="list-style-none text-muted">
                                <li>Prazo para pedidos 48 horas de antêcendencia.</li>
                                <li>Formas de Pagamento: Crédito, débito, pix e dinheiro.</li>
                                <li>Começamos criar a cesta mediante entrada de apenas 50% do valos total da cesta.</li>
                            </ul>
                    <div class="d-gridjustify-content-sm-center">
                            <button type="button" class="btn btn-rosa btn-sm  px-4 m-2">  <CtaModalProdutos text="Encomendar Agora" /></button>
                        </div>
                </div>
            </div>

        </>
    )
}