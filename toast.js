fetch(`https://randomuser.me/api/?results=10`)
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".container");
    
    data.results.forEach(userData => {
      const user = document.createElement("div");
      user.className = "py-3 px-3 items-center font-bold border border-gray-300 rounded-3xl shadow-2xl";
      user.textContent = `${userData.name.first} ${userData.name.last}`;
      
      container.appendChild(user);
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });