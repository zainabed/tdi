import { BeanManagerImpl } from "../implementation/bean.manager.impl";
import { BeanManager } from "../context/bean.manager";

/**
 * 
 */
export abstract class BeanFactory {
    static beanManager: BeanManager = null;

    /**
     * 
     */
    static getBeanManager(): BeanManager {
        if (this.beanManager == null) {
            this.beanManager = new BeanManagerImpl();
        }
        return this.beanManager;
    }


}