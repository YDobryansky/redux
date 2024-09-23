// src/users/UsersList.jsx
import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";

const UsersList = ({ users, currentPage, itemsPerPage, goPrev, goNext }) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = users.slice(startIndex, endIndex);

  return (
    <ul className="users">
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      {usersToDisplay.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
  itemsPerPage: 3,
});

const mapDispatchToProps = (dispatch) => ({
  goPrev: () => dispatch({ type: "PREV_PAGE" }),
  goNext: () => dispatch({ type: "NEXT_PAGE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
