import React from "react";

export const CustomModal = ({ children, isModalOpen }) => (
  <div>
    <div
      className={`${isModalOpen ? "modal-backdrop fade show" : ""}`}
      bis_skin_checked="1"
    ></div>
    <div
      className={`modal fade WelcomeModal ${isModalOpen ? "show" : ""}`}
      style={{
        display: `${isModalOpen ? "block" : "none"}`,
      }}
      id="WelcomeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  </div>
);
