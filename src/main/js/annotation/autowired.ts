import { BeanManager } from "../context/bean.manager";
import { Bean } from "../context/bean";
import { BeanInjector } from "../context/bean.injector";
import { BeanFactory } from "../context/bean.factory";
import { BeanUtil } from "../context/bean.util";
import "reflect-metadata";

export function Autowired(service: any = null) {
    return (target: any, propertyKey: string) => {
        let beanManager: BeanManager = BeanFactory.getBeanManager();
        let beanName = BeanUtil.getName(service, target, propertyKey);
        let bean: Bean = beanManager.getBean(beanName);
        let injector: BeanInjector = beanManager.getInjector();
        injector.inject(target, propertyKey, bean);
    }
} 