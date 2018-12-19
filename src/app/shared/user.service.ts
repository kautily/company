import { Subject } from 'rxjs';
import { User } from "./user.model";
import { EmailValidator } from "@angular/forms";

export class UserService{
    public loggedUserName = new Subject<string>();
    public userChanged = new Subject<User[]>();

    constructor(){}

    users: User[]=[
        {name: "Shubham",
        email: "shubham.pandey128@gmail.com",
        phone: "9111112293",
        userName: "Kautily",
        password: "123456",
        role: "user",
        },
        {name: "Vikash",
        email: "vikashmishra@gmail.com",
        phone: "1245671236",
        userName: "vikki",
        password: "123456",
        role: "user",
        },
        {name: "Anjuman",
        email: "anjum@gmail.com",
        phone: "2356897523",
        userName: "anjuman",
        password: "123456",
        role: "user",
        },
        {name: "Rishbh ",
        email: "test1@gmail.com",
        phone: "9752999037",
        userName: "Neeraj",
        password: "123456",
        role: "admin",
        }
    ];

    getUsers(){
        return this.users.slice();
    }

   

    addUser(newUser: User){
        this.users.push(newUser);
        this.userChanged.next(this.users);
    }
}