import React, { useState } from "react";

const PinModal = ({ onClose, onConfirm }) => {
  const [pin, setPin] = useState("");

  const handleConfirm = () => {
    onConfirm(pin); // Passer le code PIN à la fonction de validation
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Entrez le code PIN pour confirmer l'opération</h3>
        <input
          type="password"
          placeholder="Code PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={onClose}>Annuler</button>
          <button onClick={handleConfirm}>Confirmer</button>
        </div>
      </div>
    </div>
  );
};

export default PinModal;