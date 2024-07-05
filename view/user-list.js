$(document).ready(function() {
    $('#loadUsers').click(function() {
      $.ajax({
        url: '/users',
        type: 'GET',
        success: function(users) {
          const tbody = $('#userTable tbody');
          tbody.empty();
          users.forEach(function(user) {
            const row = `<tr>
              <td>${user.firstName}</td>
              <td>${user.lastName}</td>
              <td>${user.mobileNo}</td>
              <td>${user.email}</td>
              <td>${user.address.street}</td>
              <td>${user.address.city}</td>
              <td>${user.address.state}</td>
              <td>${user.address.country}</td>
              <td>${user.loginId}</td>
              <td>${new Date(user.creationTime).toLocaleString()}</td>
              <td>${new Date(user.lastUpdatedOn).toLocaleString()}</td>
            </tr>`;
            tbody.append(row);
          });
        },
        error: function(error) {
          alert('Error loading users: ' + error.responseText);
        }
      });
    });
  });
  