export default function ProvaSocial(){
    return(
        <>
        <div className="container">
        <h5 class="display-5 fw-bold text-rosa mb-4 text-center">O que nossos clientes estão dizendo</h5>
        <div className="w-100 mx-0 align-items-center">
        {[
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp1',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp2',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp3',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp4',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp5',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp6',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp7',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp8',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp9',
                            'https://uozxpkapjvicsytezmip.supabase.co/storage/v1/object/public/imagens/depoimentos/dp10',

                        ].map((descktop) => (
                            <img src={descktop.toLowerCase()} height={100}/>

                        ))}
        </div>

        </div>
                   
        
        </>
    )
}