import React from "react";
import { connect } from "react-redux";
import { getUsers } from "./actions";

class User extends React.Component {
  // props.getUsers();
  // console.log(props, "geytUser");
  componentDidMount(){
    this.props.getUsers()
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <h1>Users</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
           {this.props.users.map(user=>{
             return (
              <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
             )
           })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { getUsers }
)(User);
