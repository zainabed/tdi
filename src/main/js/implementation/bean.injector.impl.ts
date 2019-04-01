import { BeanInjector } from "../context/bean.injector";
import { Bean } from "../context/bean";

export class BeanInjectorImpl implements BeanInjector {
    resolve(service: string, bean: Bean) {
        throw new Error("Method not implemented.");
    }
    inject(target: any, field: string, bean: Bean): boolean {
        throw new Error("Method not implemented.");
    }
}