module.exports = {
    '@tags': ['post','no-img'],
    'Tests that the submit a post form is working without attachments'(browser) {
        let newPostId;
        const siteUrl = 'http://192.168.0.103:8080';
        const lastPostSelector = 'ul.list-unstyled li:first-child';
        const formSelector = 'section.create-thread form';
        const usernameSelector = '#username';
        const subjectCheckboxSelector = '#tem-assunto';
        const subjectSelector = '#subject';
        const messageSelector = '#message';
        const submitBtnSelector = 'button.create-post';
        const alertSelector = '.alert';
        const alertSuccessSelector = '.alert.alert-success';

        browser
            .url(siteUrl)
            .waitForElementVisible(formSelector)
            .sendKeys(usernameSelector, 'Jon Snow')
            .click(subjectCheckboxSelector)
            .sendKeys(subjectSelector, 'Raper, raper, horse thief, ninth-born son, ...')
            .sendKeys(messageSelector,
            `
               ISFUHAIOSUhfiouahsfisuahio@@#@#@___@#
            `
            )
            .execute(function(lastPostedId) {
                lastPostedId = document.querySelector('ul.list-unstyled li:first-child').id;
                newPostId = parseInt(lastPostedId.replace('li_', '')) + 1;
                return newPostId;
            }, [newPostId], function(result) {
                newPostId = "li_" + result.value;
                browser
                    .click(submitBtnSelector)
                    .waitForElementVisible(alertSelector)
                    .assert.cssClassPresent(alertSelector, 'alert-info', 'Post is being submitted...')
                    .waitForElementVisible(alertSuccessSelector, 1500, 'Post was submitted successfully...')
                    .assert.attributeEquals(lastPostSelector, "id", newPostId, "Post html was inserted into the feed...")
            })       
    },
}