import { BeanInjector } from "../context/bean.injector";
import { BeanInjectorImpl } from "./bean.injector.impl";

export class BeanInjectorFactory {
    private static injector: BeanInjector = null;
    static get(): BeanInjector {
        if (!this.injector) {
            this.injector = new BeanInjectorImpl();
        }
        return this.injector;
    }
}