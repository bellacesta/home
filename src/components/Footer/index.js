export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-5 border-top fixed-bottom">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-light">© 2023 Natanael A Costa</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <img className='icon' src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/github' width={35} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <img className='icon' src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/instagram' width={35} />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <img className='icon text-secondary' src='https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/whatsapp' width={35} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}