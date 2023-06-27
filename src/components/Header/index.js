

import './header.css'

function Header() {
  return (
    <nav class="navbar navbar-custom">
      <div class="container-fluid">
        <img className='logo' src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/logo02" />\
        <span class="navbar-text">
        <a href='/'className='text-light fw-bold mx-1'>Home</a>
          <a href='/sobre'className='text-light fw-bold mx-1'>Sobre</a>
          <a href='#'className='text-light fw-bold mx-1'>Portfolio</a>
          <a href='#'className='text-light fw-bold mx-1'>Contato</a>
        </span>
        
      </div>
    </nav>
  );
}

export default Header;