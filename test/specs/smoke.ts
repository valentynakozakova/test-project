describe('Website', function () {
    it('should be alive', function () {
        browser.url('/');
        expect($('.header-logo-img')).toBeDisabled();
        browser.pause(10000)
    })

    it('should allow user to register', function () {
        browser.url('/');
        $('span.userbar__button-text').click();
        const content = $('.popup-block login');
        
    })
})

