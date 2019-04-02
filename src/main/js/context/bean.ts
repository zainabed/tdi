/**
 * 
 */
export interface Bean {
    /**
     * 
     */
    geType(): any;
    
    /**
     * 
     */
    getMetaData(): any;
    
    /**
     * 
     */
    getInjectionPoint(): any;
    
    /**
     * 
     */
    getInstance(): any;
    
    /**
     * 
     */
    getScope(): string;
    
    /**
     * 
     */
    assign(service: any);
    
    /**
     * 
     */
    apply(target: any, propertyKey: string);
    
    /**
     * 
     */
    resolve(target: any);
}