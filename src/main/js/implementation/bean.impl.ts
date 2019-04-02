import { Bean } from "../context/bean";
import { BeanType } from "../context/bean.type";
import "reflect-metadata";

export class BeanImpl implements Bean {




    private type: string;
    private instance: any;

    assign(service: any) {
        this.instance = Reflect.construct(service, []);
        this.type = service.name;
    }

    geType() {
        return this.type;
    }

    apply(target: any, propertyKey: string) {
        Reflect.defineProperty(target, propertyKey, {
            value: this.instance
        })
    }

    getMetaData() {
        //  throw new Error("Method not implemented.");
    }
    getInjectionPoint() {
        //throw new Error("Method not implemented.");
    }
    getInstance() {
        return this.instance;
    }
    getScope(): string {
        // throw new Error("Method not implemented.");
        return null;
    }

    resolve(target: any) {

    }
}