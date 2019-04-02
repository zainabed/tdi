import { Bean } from "./bean";
import { BeanInjector } from "./bean.injector";

/**
 * 
 */
export interface BeanManager {

    /**
     * 
     */
    createBean(service: any): boolean;

    /**
     * 
     */
    getBean(name: string): Bean;

    /**
     * 
     */
    getInjector(): BeanInjector;

    /**
     * 
     */
    isQualifier(name: string, qualifier: string): boolean;

    /**
     * 
     */
    isScope(name: string, scope: string): boolean;
}