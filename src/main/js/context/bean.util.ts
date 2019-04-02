
/**
 * 
 */
export abstract class BeanUtil {

    /**
     * 
     * @param service 
     * @param target 
     * @param propertyKey 
     */
    static getName(service: any, target: any, propertyKey: string): string {
        let name: string;
        if (service) {
            name = service.name;
        } else {
            let type = Reflect.getMetadata("design:type", target, propertyKey);
            name = type ? type.name : propertyKey;
        }
        return name;
    }
}