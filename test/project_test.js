describe('test', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  after(function() {
    this.actionwords.closeDriver()
  })

  describe('Happy', function () {
    async function happy (student) {
      // Happy access to the quick student lookup tab
      await this.actionwords.loginToTheSystemAsPc386();
      await this.actionwords.goToTheLookupsPage();
      await this.actionwords.clickTheQuickStudentLookupLink();
    }

    it('Kent ID', async function () {
      await happy.apply(this, [18000804]);      
    });
  });
});
