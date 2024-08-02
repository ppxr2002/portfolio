$('#formContact').addEventListener('submit', function(event) {
    event.preventDefault();

        var name = encodeURIComponent($('#name').value);
        var email = encodeURIComponent($('#email').value);
        var message = encodeURIComponent($('#message').value);

        var subject = encodeURIComponent($('#motif').value);
        var to = encodeURIComponent('rotsiniainanajaina@gmail.com');
        
        alert(name +" "+ email +" "+ message +" "+ subject +" "+ to)
        // var mailtoLink = `mailto:${to}?subject=${subject}&body=Name: ${name}%0AEmail: ${email}%0AMessage:%0A${message}`;

        // window.location.href = mailtoLink;
    });