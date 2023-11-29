import Carrusel from "../components/molecule/Carrusel";
import Catalogue from "../components/molecule/Catalogue";
import Footer from "../components/molecule/Footer";
import Header from "../components/molecule/Header";
import Tips from "../components/molecule/Tips";


function Home() {
    return (
        <div>
            <Header></Header>
            <Catalogue></Catalogue>
            <Tips/>
            <Carrusel/>
            <Footer></Footer>
        </div>
    );
}

export default Home;