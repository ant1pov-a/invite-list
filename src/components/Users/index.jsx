import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({
  items,
  isLoading,
  onChangeInput,
  searchUser,
  isInvited,
  inviteHandler,
  successInviteHandler,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          onChange={onChangeInput}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((item) => {
              const fullName = item.first_name + " " + item.last_name;
              const standartValue = searchUser.trim().toLowerCase();
              return (
                item.first_name.toLowerCase().includes(standartValue) ||
                item.last_name.toLowerCase().includes(standartValue) ||
                fullName.toLowerCase().includes(standartValue) ||
                item.email.toLowerCase().includes(standartValue)
              );
            })
            .map((item, index) => {
              return (
                <User
                  isInvited={isInvited}
                  inviteHandler={inviteHandler}
                  key={index}
                  {...item}
                />
              );
            })}
        </ul>
      )}
      <button
        onClick={() => successInviteHandler()}
        className="send-invite-btn"
      >
        Отправить приглашение
      </button>
    </>
  );
};
