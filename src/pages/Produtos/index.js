import CtaCompra from "../../components/CtaCompra/index.js";
import Footer from "../../components/Footer/index.js";
import Funcionamento from "../../components/Funcionamento/index.js";
import FormProdutos from "../../components/Inputs/UserForm/Forms/FormProdutos.js";
import CtaModalProdutos from "../../components/Modal/CtaModalProdutos/index.js";
import ProvaSocial from "../../components/ProvaSocial/index.js";
import SobreNos from "../../components/SobreNos/index.js";
import Vantagens from "../../components/Vantagens/index.js";

export default function Produtos() {
    return (
        <>
           

                <div class="px-4 p-1 mb-5 text-center">
                    <img class="d-block mx-auto" src="https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/logo/preta" alt="" width="200" />
                    <h1 class="display-5 fw-bold text-rosa">Bella Cestas</h1>
                    <h1>Cestas Personalizadas para Presentes</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4 text-light">Surpreenda seus entes queridos com cestas feitas sob medida para cada ocasião.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" class="btn btn-rosa btn-lg px-4 m-2 gap-3">  <CtaModalProdutos text="Encomendar Agora" /></button>
                            <button type="button" class="btn btn-rosa btn-lg m-2 px-4">Voltar</button>
                        </div>
                    </div>
                </div>

                <section id="features">
                    <Vantagens />
                </section>
                <SobreNos />

                <CtaCompra/>

                <section id="how-it-works">
                    <Funcionamento />
                </section>
                <ProvaSocial />
                <section id="cta-section">
                 
                </section>

        </>
    )
}