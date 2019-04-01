import { Bean } from "../context/bean";

export class BeanImpl implements Bean {
    
    assign(service: any) {
        throw new Error("Method not implemented.");
    }
    
    getBeanClass() {
        throw new Error("Method not implemented.");
    }
    getBeanName(): string {
        throw new Error("Method not implemented.");
    }
    getMetaData() {
        throw new Error("Method not implemented.");
    }
    getInjectionPoint() {
        throw new Error("Method not implemented.");
    }
    getInstance() {
        throw new Error("Method not implemented.");
    }
    getScope(): string {
        throw new Error("Method not implemented.");
    }
}