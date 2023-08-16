import CtaModalProdutos from "../../components/Modal/CtaModalProdutos/index.js";

export default function Rodape(){
    return(
        <footer class="py-3  bg-footer">
        <div className="text-center  my-5">
        <div class="d-gridjustify-content-sm-center">
                            <button type="button" class="btn btn-rosa btn-sm  px-4 m-2">  <CtaModalProdutos text="Pedir uma Cesta Agora" /></button>
                        </div>
        </div> 
     <div className="d-flex justify-content-around">
     <ul class="nav hstack gap-3">
            <li class="nav-item text-light m-0"><a className="px-0" href="https://instagram.com/bellacestaofc"><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/instagram" width={40} /></a></li>
            <li class="nav-item text-light m-0"><a className="px-0" href="bellacestas59@gmail.com"><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/email" width={40} /></a></li>
            <li class="nav-item text-light m-0"><a className="px-0" href="https://wa.me/message/NKT3WAT5JK2CM1"><img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/whatsapp" width={40} /></a></li>
        </ul>
     </div>
        

        <p class="text-center text-light text-geral text-light border-top mt-4">© 2023 Bella Cesta -Todos os direitos reservados</p>
    </footer>
    )
}