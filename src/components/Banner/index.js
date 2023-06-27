import './banner.css'
export default function Banner() {
    return (
        <>
            <div class="display-flex w-100 p-3  text-center">
                <div class="col-md-6 p-lg-5 mx-auto my-5">
                    <img className="perfil" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/perfil"/>
                    <h3 class=" display-6 fw-bold text-light">Natanael Alves da Costa </h3>
                    <h5 class="fw-normal text-light mb-3 px-5">"Aos outros dou o direito de serem como são, mas a mim, dou o <b>dever</b> de ser cada dia melhor"</h5>
                    <div class="d-flex gap-3 justify-content-center lead fw-normal">
                        <a class="icon-link" href="#">
                            Habilidades
                            <svg class="bi"></svg>
                        </a>
                        <a class="icon-link" href="#">
                            Experiencia
                            <svg class="bi"></svg>
                        </a>
                    </div>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </>
    )
}