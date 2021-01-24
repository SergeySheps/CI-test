const expect = require('chai').expect;
const axios = require('axios');

describe('Authentication', function() {
  describe('Sign in test', () => {
    const testedUserData = {
      email: 'Admin@localhost.com',
      password: '123456',
    };

    before(async () => {
      const options = {
        method: 'post',
        url: 'http://localhost:3001/api/auth/signIn',
        data: testedUserData,
      };

      try {
        this.resp = await axios(options);
      } catch (error) {
        console.log(error, 'error');
      }
    });

    it('Has email', () => {
      expect(this.resp.data.email).to.equal(testedUserData.email);
    });
    it('Has token', () => {
      expect(this.resp.data.token).to.be.a('string');
    });
  });
});
