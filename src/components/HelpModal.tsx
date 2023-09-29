import React from "react";
import { BsBoxArrowInDownLeft } from 'react-icons/bs'

const HelpModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="help-modal">
            <div className="help-modal-content">
                <button className='help-modal-close form-button' onClick={onClose}>Close</button>
                <h2>Helpful Info</h2>
                <p>To insert Custom Instructions, you must first open the Custom Instructions modal in ChatGPT:</p>
                <ol>
                    <li>Click on the three dots next to your name in the lower left-hand corner.</li>
                    <li>Select 'Custom Instructions'.</li>
                    <li>If the 'Introducing Custom Instructions' popup appears, click 'OK'.</li>
                    <li>Re-open this browser extension and click on the 'Insert Instructions' <BsBoxArrowInDownLeft/> button next to the instructions you wish to insert.</li>
                </ol>
                <p>If inserting instructions is not working, try refreshing your ChatGPT page.</p>
                <p>Note: You may need to begin a new chat for new Custom Instructions to take effect.</p>
            </div>
        </div>
    );
};

export default HelpModal;