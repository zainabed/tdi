import { BeanFactory } from "../context/bean.factory";
import { BeanManager } from "../context/bean.manager";

export function Service(target) {
  let beanManager: BeanManager = BeanFactory.getBeanManager();
  beanManager.createBean(target);
}