import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import classes from "./search.module.css";

type SearchProps = {
  loadUsers: (userName: string) => Promise<void>;
};

function Search({ loadUsers }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDow = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUsers(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Buscar Por um Usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDow}
        />
        <button onClick={() => loadUsers(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
