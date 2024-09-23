// src/users/UsersList.jsx
import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Filter from "../Filter";

const UsersList = ({ users, filterText, setFilterText }) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <Filter
        filterText={filterText}
        count={filteredUsers.length}
        onChange={setFilterText}
      />
      {filteredUsers.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.usersList,
  filterText: state.users.filterText,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterText: (text) => dispatch({ type: "SET_FILTER_TEXT", payload: text }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
