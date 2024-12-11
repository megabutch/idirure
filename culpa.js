let propertiesMap = {
    name: 'John',
    age: 30,
    active: true
};

let prop = 'address';

if (!propertiesMap[prop]) {
    console.log(`Property '${prop}' does not exist or is falsy.`);
} else {
    console.log(`Property '${prop}' exists and is truthy: ${propertiesMap[prop]}`);
}
