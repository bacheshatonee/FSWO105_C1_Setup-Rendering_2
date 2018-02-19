const hasUsernameAndPassword = (user) => user.name.length > 0 && user.password.length > 0
}

const filterInvalidUsers = (users) => {
    var validUsers = [];

    for (var user of users) {
        if (hasUsernameAndPassword(user)) {
            validUsers.push(user);
        }
    }

    return validUsers;
}

const userToFormattedString = (user) => 'name: ' + user.name + '\nrole: ' + user.role


let users = [
    {
        name: 'Kirk Douglass',
        password: 'iamspartacus',
        role: 'revolutionary'
    },
    {
        name: 'Charlie Chaplain',
        password: '',
        role: 'tramp'
    },
    {
        name: 'Harrison Ford',
        password: 'AnythingButSnakes',
        role: 'archaeologist'
    }
];

let validUsers = filterInvalidUsers(users);

for (let validUser of validUsers) {
    console.log(userToFormattedString(validUser));
}
