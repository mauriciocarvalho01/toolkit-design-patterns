class Validation {
     IsEmail(params: { message?: string }) {
        return function (target: any, propertyKey: string) {
            let value = target[propertyKey];
    
            const getter = () => value;
            const setter = (newValue: any) => {
                const validateEmailRegex = /^\S+@\S+\.\S+$/
                if (!validateEmailRegex.test(newValue)) {
                    throw new Error(params.message || `${propertyKey} must be a valid email`);
                }
                value = newValue;
            };
    
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true,
            });
        };
    }

    Length(minLength: number = 0, maxLength: number = 255, params: { message?: string }) {
        return function (target: any, propertyKey: string) {
            let value = target[propertyKey];
    
            const getter = () => value;
            const setter = (newValue: any) => {
                if(typeof newValue !=='string') throw new Error(`${propertyKey} must be a string`);
                if(newValue.length < minLength || newValue.length > maxLength) throw new Error(params.message || `${propertyKey} must be between ${minLength}`)
                value = newValue;
            };
    
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true,
            });
        };
    }
}


export const IsEmail = new Validation().IsEmail;
export const Length = new Validation().Length;