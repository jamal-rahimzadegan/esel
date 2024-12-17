/**
 * use this function for nested objects and arrays.--> ex: obj1={obj2:{...}}
 * for on level object or array use (...) not this function.--> ex: obj={name:""}
 */

enum Methods {
    arr = 'arr',
    obj = 'obj',
}

export default function copyDeep<T>(method: keyof typeof Methods, data: T): T {
    switch (method) {
        case Methods.arr:
            // @ts-ignore
            return data.map((el) => ({ ...el }));
        case Methods.obj:
            return JSON.parse(JSON.stringify(data));
        default:
            return data;
    }
}
