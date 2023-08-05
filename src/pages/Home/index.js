import Banner from "../../components/Banner";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../index.css'

function Home() {
    return (
        <>
            <div className="bg-max">
                <div className="bg-home h-100">
                    <Header />
                    <Banner />
                    <Footer />
                </div>
            </div >

        </>

    )
}
export default Home;