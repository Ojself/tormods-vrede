import './Modal.css';
import PropTypes from 'prop-types';

function NutritionModal({ onClose }) {
     const dogePhrases = [
        { text: 'Much spice', top: '10%', left: '68%', color: 'red' },
        { text: 'Wow', top: '26%', left: '35%', color: 'blue' },
        { text: 'Very chili', top: '35%', left: '55%', color: 'green' },
        { text: 'Many hot', top: '55%', left: '42%', color: 'orange' },
        { text: 'Such burn omg', top: '78%', left: '24%', color: 'purple' },
    ];
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {/* Doge phrases overlay */}
                <div className="doge-overlay">
                    {dogePhrases.map((phrase, index) => (
                        <span
                            key={index}
                            className="doge-phrase"
                            style={{ top: phrase.top, left: phrase.left, color: phrase.color }}
                        >
                            {phrase.text}
                        </span>
                    ))}
                </div>

                <h2 className="modal-header">Ingredienser & næringsinnhold</h2>
                
                <h3>Ingredienser:</h3>
                <ul className="modal-list">
                    <li>- Rapsolje</li>
                    <li>- Kinesisk chiliflak</li>
                    <li>- Knust Sandefjord chili </li>
                    <li>- Havsalt</li>
                </ul>
                <h3>Krydder:</h3>
                <ul className="modal-list">
                    <li>- Stjerneanis</li>
                    <li>- Kanelstang</li>
                    <li>- Laurbærblad</li>
                    <li>- Sichuanpepper</li>
                </ul>
                <h3>Aromatikk</h3>
                <ul className="modal-list">
                    <li>- Hvitløk</li>
                    <li>- Sjalottløk</li>
                    <li>- Sesamfrø</li>
                    <li>- Sesamolje</li>
                </ul>
                <h3>Næringsinnhold (per spiseskje):</h3>
                <table className="nutrition-table">
                    <tbody>
                        <tr>
                            <td>Kalorier</td>
                            <td>92 kcal</td>
                        
                        </tr>
                        <tr>
                            <td>Karbohydrater</td>
                            <td>2g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>1g</td>
                        </tr>
                        <tr>
                            <td>Fett</td>
                            <td>10g</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;Mettet Fett</td>
                            <td>8g</td>
                        </tr>
                        <tr>
                            <td>Natrium</td>
                            <td>129mg</td>
                        </tr>
                        <tr>
                            <td>Kalium</td>
                            <td>96mg</td>
                        </tr>
                        
                        <tr>
                            <td>Fiber</td>
                            <td>2g</td>
                        </tr>
                        <tr>
                            <td>Sukker</td>
                            <td>1g</td>
                        </tr>
                        <tr>
                            <td>Vitamin A</td>
                            <td>1461 IU</td>
                        </tr>
                        <tr>
                            <td>Vitamin C</td>
                            <td>1mg</td>
                        </tr>
                        <tr>
                            <td>Kalsium</td>
                            <td>16mg</td>
                        </tr>
                        <tr>
                            <td>Jern</td>
                            <td>1mg</td>
                        </tr>
                        
                    </tbody>
                </table>

                <button className="close-button" onClick={onClose}>Lukk</button>
            </div>
        </div>
    );
}

NutritionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default NutritionModal;
