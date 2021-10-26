describe('Website', function () {
    it('should be alive', function () {
        browser.url('/');
        expect($('.header-logo-img')).toBeDisabled();
        browser.pause(10000)
    })
})