Common command 
npm install -g typescript
node -v
tsc -v
npm -v
tsc <filename>.ts
node <filename>.js

// create a program to define a class as user with attributes as user and password and two methods for input and output
// and take a input user name and password and
then display the output as username and password

class User {
    username: string;
    password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }

    input(username: string, password: string): void {
        this.username = username;
        this.password = password;
    }

    display(): void {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    }
}

let user1: User = new User();
user1.input("Anurag", "1607");
user1.display();
