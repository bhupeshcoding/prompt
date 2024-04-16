document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var age = document.getElementById('age').value;
  
    if (name === '' || email === '') {
      alert('Name and Email are required!');
    } else {
      // You can perform further actions like submitting the form to a server
      console.log('Form submitted:', { name, email, address, age });
      // For demonstration purposes, just clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('address').value = '';
      document.getElementById('age').value = '';
    }
  });
  