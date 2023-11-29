import Face from '../../img/faceboo.png';
import Insta from '../../img/instagra.png';
import Tell from '../../img/llamada.png';
import maps from '../../img/maps-and-location.png';
import './Footer.css';

function Footer() {
    return ( 
        <div width={"100%"} className='footer'>
            <div className="footer1">
            <br></br>
                <h3>MARDIER</h3>
                <ul>
                    <li className='li'><img src={maps} alt="logo" width={"20px"} style={{"margin": "5px"}}></img>Carretera Tuxtla Gutierrez. - Portillo Zaragoza Km 21+500, Las Brisas, 29150 Suchiapa, Chis.</li>
                    <li className='li'><img src={Face} alt="logo" width={"20px"} style={{"margin": "5px"}}></img>Margaritaa_oliveraa</li>
                    <li className='li'><img src={Tell} alt="logo" width={"20px"} style={{"margin": "5px"}}></img>961-123-29-49</li>
                    <li className='li'><img src={Insta} alt="logo" width={"20px"} style={{"margin": "5px"}}></img>Margaritaa_oliveraa</li>
                </ul>
                <br></br>
            </div>
        </div>
    );
}

export default Footer;