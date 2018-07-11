const safechain = require('../lib');
const expect = require('chai').expect;

const einstein = {
    name: {
        firstName: "Albert",
        lastName: "Einstein"
    },
    dob: "1897/03/14",
    wife: ['Maric', 'Elsa']
};

describe('Safe chain function', () => {
    it('Returns correct lastname', () => {
        const result = safechain(einstein, 'name', 'lastName', 'Unknown');
        expect(result).to.be.equal('Einstein');
    });
    it('Returns correct date of birth', () => {
        const result = safechain(einstein, 'dob', 'Unknown');
        expect(result).to.be.equal('1897/03/14');
    });
    it('Returns correct fallbak ', () => {
        const result = safechain(einstein, 'address', 'Fallback value');
        expect(result).to.be.equal('Fallback value');
    });
    it('Shouldn\'t crash when requesting false deep attribute ', () => {
        const result = safechain(einstein, 'address', 'postcode', 0);
        expect(result).to.be.equal(0);
    });
    it('Shouldn\'t crash when requesting false deep attribute ', () => {
        const result = safechain(einstein, 'address', 'postcode', false);
        expect(result).to.be.equal(false);
    });
});
