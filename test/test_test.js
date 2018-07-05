describe('test', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  describe('Happy', function () {
    function happy (student) {
      // Happy access to the quick student lookup tab
      this.actionwords.loginToTheSystemAsPc386();
      this.actionwords.goToTheLookupsPage();
      this.actionwords.clickTheQuickStudentLookupLink();
    }

    it('Kent ID (uid:77d377f0-23ea-4127-a4db-4bfbac516cf7)', function () {
      happy.apply(this, [18000804]);
    });
  });
});
