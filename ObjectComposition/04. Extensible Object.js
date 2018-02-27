function getExtensibleObject() {
    let obj = {
        extend: (template) => {
            for (let property in template) {
                console.log(template[property])
                if (typeof template[property] === 'function') {
                    Object.getPrototypeOf(obj)[property] = template[property]
                } else {
                    obj[property] = template[property]
                }
            }
        }
    }
    return obj
}