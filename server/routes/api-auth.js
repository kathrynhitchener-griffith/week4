class User {
    constructor(username = "", birthdate = "", age = 0, email = "", password = "", valid = false) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

// hardcoded user list
let emma = new User('emma', '01/01/2020', 2, 'emma@email.com', '123', false)
let naomi = new User('naomi', '01/01/1920', 102, 'naomi@email.com', '123', false)
let kat = new User('kat', '01/01/1995', 27, 'emma@email.com', 'kat', false)
let users = [emma, naomi, kat];

// route for credential comparison
module.exports = function(req, res){
    // no body return error
    console.log("Checking...")
    if(!req.body){
        console.log("Errorrrr");
        return res.sendStatus(400);
    }
    // create new customer
    let customer = new User();
    customer.username = req.body.username;
    customer.valid = false;
    // loop over all customers and check credentials
    for(let i = 0; i < users.length; i++){
        if(req.body.username == users[i].username 
            && req.body.password == users[i].password){
            customer.valid = true;
            customer.email = true;
            customer.birthdate = users[i].birthdate;
            customer.age = users[i].age;
            customer.username
        }
    }
    res.send(customer);
}