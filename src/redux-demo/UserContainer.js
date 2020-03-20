import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux'

// function UserContainer({userData, fetchUsers}) {
function UserContainer() {
  const userData = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchUsers()
    dispatch(fetchUsers())
  },[]);
  return userData.loading ? (<h2>Loading</h2>)
  : userData.error ? (<h2>{userData.error}</h2>)
  : (
    <div>
      <h2>Users List</h2>
      <div>
        {
          userData && 
          userData.users && 
          userData.users.map(user => <p key={user.id}>{user.name}</p>)
        }
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     userData: state.users
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
export default UserContainer