function login() {
    const correctModmeid = '123456';
    const correctPassword = '78900';

    const enteredModmeid = document.getElementById('modmeid').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredModmeid === correctModmeid && enteredPassword === correctPassword) {
        alert('You have successfully entered Mars Space!');
    } else {
        alert('Error: incorrect modmeid or password.');
    }
}