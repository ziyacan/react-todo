import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <Container>
      <ListGroup>
        {users.length > 0 ? (
          <>
          {users.map(user => (
            <ListGroupItem className="d-flex justify-content-between align-items-center" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning mx-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
          </>
        ) : (
          <h4 className="text-center">No User</h4>
        )}
      </ListGroup>
    </Container>
  )
};
