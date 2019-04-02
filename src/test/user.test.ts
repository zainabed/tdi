
import { User } from "./user";
import { Autowired } from "../main/js/annotation/autowired";

class Test { }

export class UserService {

    @Autowired()
    user: User;
}

export class UserHttp {
    @Autowired()
    user: User;
}



let userService = new UserService();
let userHttp = new UserHttp();
console.log(userService.user.parent);
console.log(userHttp.user.parent);