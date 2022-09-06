import React from "react";

export const Success = ({ isInvited, goBackHandler }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {isInvited.length} пользователям отправлено приглашение.</p>
      <button onClick={() => goBackHandler()} className="send-invite-btn">
        Назад
      </button>
    </div>
  );
};
