export interface Bean {
    getBeanClass(): any;
    getBeanName(): string;
    getMetaData(): any;
    getInjectionPoint(): any;
    getInstance(): any;
    getScope(): string;
    assign(service: any);
}