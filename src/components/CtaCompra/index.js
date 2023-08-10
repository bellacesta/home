import CtaModalProdutos from "../../components/Modal/CtaModalProdutos/index.js";

export default function CtaCompra() {
    return (
        <>
            <div className="bg-rosa">
                <div className="text-center">
                    <h2 className="text-rosa fw-bold">Faça Sua Encomenda Agora</h2>
                    <p className="mb-0 fs-5">Não perca a oportunidade de surpreender alguém com um presente verdadeiramente especial.</p><p className="mt-0"> Clique abaixo para encomendar sua cesta personalizada agora!</p>
                    <div class="d-gridjustify-content-sm-center">
                            <button type="button" class="btn btn-rosa btn-sm  px-4 m-2">  <CtaModalProdutos text="Encomendar Agora" /></button>
                        </div>
                </div>
            </div>

        </>
    )
}