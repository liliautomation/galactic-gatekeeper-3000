import React from "react";

const ConfirmModal = ({ show, onClose, onConfirm, onNext, name }) => {
  if (!show) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Confirm Verification</h2>
        <p>Are you sure it's you, not intergalactic criminal {name}?</p>
        <div style={styles.buttonContainer}>
          <button onClick={onConfirm} style={styles.button}>
            Confirm
          </button>
          <button onClick={onNext} style={styles.button}>
            Next
          </button>
          <button onClick={onClose} style={styles.button}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#6200ee",
    color: "#fff",
  },
};

export default ConfirmModal;
