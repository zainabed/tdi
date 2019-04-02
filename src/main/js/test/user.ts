import { Service } from "../annotation/service";
import { Autowired } from "../annotation/autowired";

@Service
export class ParentUser {
    name: string = "parent";
}

@Service
export class User {
    name: string = "user";

    @Autowired(ParentUser)
    parent: ParentUser;
}
