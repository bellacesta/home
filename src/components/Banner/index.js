import BtnCustom from '../Buttons/BtnCustom'
import './banner.css'
export default function Banner() {
    return (
        <>
            <div class="display-flex w-100 p-3  text-center text-bella">
                <div class="col-md-6 p-lg-5 mx-auto my-5">
                    <img className="perfil" src="https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/logo/logo-preta"/>
                    <h5 class="fw-normal text-light mb-3 px-5 mb-5 fw-bold">"Aqui sua felicidade é o nosso compromisso!" </h5>
                    <div class="d-flex gap-3 justify-content-center flex-column px-5">
                        <BtnCustom text="Montar Cesta Personalizada"/> 
                         <BtnCustom text="Encomendar Modelo de Cesta"/> 
                        
                       
                    </div>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </>
    )
}