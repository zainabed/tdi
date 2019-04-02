/**
 * 
 */
export abstract class BeanType {
   
    /**
     * 
     */
    static TYPE = {
        CLASS: Symbol.for("class-type"),
        PROPERTY: Symbol.for("class-propert")
    }
}