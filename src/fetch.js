import { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data.slice(0, 3));  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();  
  }, []);  

  return (
    <div className="user-list">
      
      {users.length === 0 ? (
        <p className="loading">Loading...</p>  
      ) :

      (users.map((user, index) => (
          <div key={index} className="user-card">
            <div className="card-body">
              <h3>{user.name}</h3>
              <p><strong>First Name:</strong> {user.name.split(' ')[0]}</p>
              <p><strong>Last Name:</strong> {user.name.split(' ')[1]}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Fetch;
