import './Tips.css';
import tipsData from './TipsData';

function Tips() {
  const tipData = tipsData[0];
  
  return (
    <div className="divPrincipal">
      <div className="div">
        <img className="img" src={tipData.imageSrc} alt="logo" />
      </div>
      <div className="div2">
        <div className="divText">
          <h1>{tipData.title}</h1>
        </div>
        <div className="divText2">
          <h5>{tipData.subtitle}</h5>
        </div>
        <div>
          <ul>
            {tipData.tips.map((tips, index) => (
              <li key={index}>{tips}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tips;
