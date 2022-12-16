let decision = prompt()
if (decision) {
    if (decision == "Admin") {
        password = prompt()
        if (password) {
            if (password == "TheMaster") {
                alert('Welcome!');

            } else {
                alert('Wrong password');
            }

        } else {
            alert('Canceled');
        }

    } else {
        alert("I don't know you");
    }

} else {
    alert('Canceled');
}