import './sobre.css'
export default function Sobre() {
    return (
        <>
            <div class="display-flex w-100 p-3  text-center">
                <div class="col-md-6 p-lg-5 mx-auto my-5">
                    <img className="perfil" src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/perfil" />
                    <h3 class=" display-6 fw-bold text-light">Natanael Alves da Costa </h3>
                    <div class="d-flex gap-3 justify-content-center lead fw-normal">
                        <div class="row text-light">
                                <h5 className='fw-bold'>Data de Nascimento</h5>
                                <p> 02-09-1999</p>
                                <h5 className='fw-bold'>Email</h5>
                                <p>costaalvesn16@gmail.com</p>
                                <h5 className='fw-bold'>Endereço</h5>
                                <p>Residencial São Francisco, Recanto da Ema, Brasilia-DF</p>
                                <p> Quadra 3, Conjunte E, Casa 07</p>
                        </div>
                    </div>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </>
    )
}