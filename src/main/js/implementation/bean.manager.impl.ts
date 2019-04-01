import { BeanManager } from "../context/bean.manager";
import { Bean } from "../context/bean";
import { BeanInjector } from "../context/bean.injector";
import { BeanSubject } from "./bean.subject.impl";
import { BeanImpl } from "./bean.impl";
import { BeanInjectorFactory } from "./bean.injector.factory";
//import {Subject} from "rxjs";

export class BeanManagerImpl implements BeanManager {

    private beans: Map<string, Bean>;

    constructor() {
        this.beans = new Map();
    }

    createBean(service: any): boolean {
        let bean: Bean = this.beans.get(service);
        if (!bean) {
            bean = new BeanImpl();
            bean.assign(service);
            this.beans.set(service, bean);
        }

        let injector: BeanInjector = this.getInjector();
        injector.resolve(service, bean);
        return this.beans.has(service);
    }

    getBean(name: string): Bean {
        let bean: Bean = this.beans.get(name);
        if (!bean) {
            bean = new BeanSubject();
            this.beans.set(name, bean);
        }
        return bean;
    }


    getInjector(): BeanInjector {
        return BeanInjectorFactory.get();
    }

    isQualifier(name: string, qualifier: string): boolean {
        throw new Error("Method not implemented.");
    }

    isScope(name: string, scope: string): boolean {
        throw new Error("Method not implemented.");
    }
}