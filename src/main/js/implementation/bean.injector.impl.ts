import { BeanInjector } from "../context/bean.injector";
import { Bean } from "../context/bean";

export class BeanInjectorImpl implements BeanInjector {
    resolve(target: any, bean: Bean) {
        bean.resolve(target);
    }
    inject(target: any, propertyKey: string, bean: Bean): boolean {
        bean.apply(target, propertyKey);
        return false;
    }
}