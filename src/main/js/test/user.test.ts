import { Service } from "../annotation/service";
import { Autowired } from "../annotation/autowired";
import { User } from "./user";

class Test { }

export class UserService {

    @Autowired(User)
    user: User;
}

export class UserHttp {
    @Autowired(User)
    user: User;
}



let userService = new UserService();
let userHttp = new UserHttp();
console.log(userService.user.parent);
console.log(userHttp.user.parent);