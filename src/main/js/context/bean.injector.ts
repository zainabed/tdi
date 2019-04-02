import { Bean } from "./bean";

/**
 * 
 */
export interface BeanInjector {

    /**
     * 
     */
    inject(target: any, field: string, bean: Bean): boolean;

    /**
     * 
     */
    resolve(service: string, bean: Bean);
}