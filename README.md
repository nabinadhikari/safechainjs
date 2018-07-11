# safechainjs
A simple, light and safe way to access object's property in any level. It also assign back the fallback value if there is no given properties.

1. First parameter is object to look into.
2. Multiple parameters as string as property of object.
3. Last parameter is fallback value to be returned, if request value is not present.

## Installation 
```sh
npm install safechainjs --save
```
## Usage
### Javascript
```javascript
const safechain = require('safechainjs');
const obj = {
    name: {
        firstName: "Albert",
        lastName: "Einstein"
    },
    dob: "1897/03/14",
    wife: ['Maric', 'Elsa']
};
const propertyWife = 'wife';
const fname = safechain(obj, 'name', 'firstName', 'Unknown'); // Albert
const address = safechain(obj, 'address', 'postcode', 0); // 0
const wives = safechain(obj, propertyWife, []); // ['Maric', 'Elsa']
```

## Test 
```sh
npm run test
```