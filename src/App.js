import { React, useState, useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchUser, setSearchUser] = useState("");
  const [isInvited, setIsInvited] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    async function fetchData() {
      await fetch("https://reqres.in/api/users")
        .then((responce) => responce.json())
        .then((json) => {
          setUsers(json.data);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);
  const changeNameHandler = (event) => {
    setSearchUser(event.target.value);
  };

  const inviteHandler = (id) => {
    if (isInvited.includes(id)) {
      setIsInvited((prev) => [...prev.filter((i) => i !== id)]);
    } else {
      setIsInvited((prev) => [...prev, id]);
    }
  };
  const successInviteHandler = () => {
    setSuccess(true);
  };
  const goBackHandler = () => {
    setSuccess(false);
    setIsInvited([]);
  };

  return (
    <div className="App">
      {success ? (
        <Success isInvited={isInvited} goBackHandler={goBackHandler} />
      ) : (
        <Users
          successInviteHandler={successInviteHandler}
          isInvited={isInvited}
          inviteHandler={inviteHandler}
          searchUser={searchUser}
          onChangeInput={changeNameHandler}
          isLoading={isLoading}
          items={users}
        />
      )}
    </div>
  );
}

export default App;
