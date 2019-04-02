import { Bean } from "../context/bean";
import { Subject } from "rxjs";
export class BeanSubject implements Bean {

    susbscription: Subject<any>;
    service: any;

    apply(target: any, propertyKey: string) {
        this.susbscription.subscribe({
            next: service => {
                console.log("Resolved for " + target + " : " + propertyKey);
                Reflect.defineProperty(target, propertyKey, {
                    value: service
                });
            }
        });
    }

    resolve(target: any) {
        console.log(target);
        this.susbscription.next(target);
    }

    geType() {
        throw new Error("Method not implemented.");
    }
    getMetaData() {
        throw new Error("Method not implemented.");
    }
    getInjectionPoint() {
        throw new Error("Method not implemented.");
    }
    getInstance() {
        throw new Error("Method not implemented.");
    }
    getScope(): string {
        throw new Error("Method not implemented.");
    }
    assign(service: any) {
        this.service = service;
        this.susbscription = new Subject();
    }

}