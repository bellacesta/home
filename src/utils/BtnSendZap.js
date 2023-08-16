export default function BtnSendZap(props){

function send(){
    let url = "https://api.whatsapp.com/send?phone=5561994357523&text=";
    let end_url =`
    ${url}Olá Bella, gostaria que fizesse um orçamento pra mim com esses produtos:%0A%0AProdutos:%0A${props.produtos}%0A%0ANome:${props.nome}%0ATelefone:${props.zap}%0AEndereço:${props.address}%0A%0AMensagem Especial:${props.mensagem}
    `; 
  window.open(end_url)
}

    return(
        <button 
    type="button" 
    className="btn btn-lg btn-primary mb-4" 
    onClick={send} 
    disabled ={props.disabled}
    >
     {props.text}
    </button>

    )
}