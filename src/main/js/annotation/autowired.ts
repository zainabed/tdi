import { BeanManager } from "../context/bean.manager";
import { Bean } from "../context/bean";
import { BeanInjector } from "../context/bean.injector";
import { BeanFactory } from "../context/bean.factory";

export function Autowired(target, field, descriptor) {
    let beanManager: BeanManager = BeanFactory.getBeanManager();
    let bean: Bean = beanManager.getBean(field);
    let injector: BeanInjector = beanManager.getInjector();
    injector.inject(target, field, bean);
}