import { Service } from "../main/js/annotation/service";
import { Autowired } from "../main/js/annotation/autowired";



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
