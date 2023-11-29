import Face from '../../img/faceboo.png';
import Insta from '../../img/instagra.png';
import Tell from '../../img/llamada.png';
import './Header.css';


function Header() {
    return (
        <>
        <div className='encabezado'>
            <div className='div1'><p>MARDIER</p></div>
            <div className='divList'>
                <ul>
                    <li className='li'><img src={Face} alt="logo" width={"20px"} style={{"margin": "5px"}}></img>Margaritaa_oliveraa</li>
                    <li className='li'><img src={Tell} alt="logo" width={"20px"} style={{"margin": "5px"}}></img>961-123-29-49</li>
                    <li className='li'><img src={Insta} alt="logo" width={"20px"} style={{"margin": "5px"}}></img>Margaritaa_oliveraa</li>
                </ul>
            </div>
        </div>
        <div>
            </div>
        </>
    );
}

export default Header;