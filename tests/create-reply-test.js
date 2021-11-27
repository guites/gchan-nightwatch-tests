module.exports = {
    '@tags': ['reply','no-img'],
    'Tests that the reply button works without attachments'(browser) {
        const siteUrl = 'http://192.168.0.103:8080';
        const lastPostSelector = 'ul.list-unstyled li:first-child';
        const lastReplySelector = 'ul.list-unstyled .reply-item:last-of-type';
        let newReplyId;
        const replyBtnSelector = '.reply';
        const replyBoxSelector = '#replybox';
        const usernameSelector = replyBoxSelector + ' #username';
        const messageSelector = replyBoxSelector + ' #message';
        const submitBtnSelector = '#submitReply';
        const alertSelector = '.alert';

        browser
            .url(siteUrl)
            .waitForElementVisible(lastPostSelector)
            .click(replyBtnSelector)
            .waitForElementVisible(replyBoxSelector)
            .assert.elementPresent(replyBoxSelector, 'Reply Box is displayed...')
            .sendKeys(usernameSelector, 'the Tester')
            .sendKeys(messageSelector, 'last test all ok')
            .execute(function(lastReplyId) {
                lastReplyId = document.querySelector('ul.list-unstyled .reply-item:last-of-type > div').id;
                newReplyId = parseInt(lastReplyId.replace('quoted_', '')) + 1;
                return newReplyId;
            }, [newReplyId], function(result) {
                newReplyId = result.value;
                browser
                    .click(submitBtnSelector)
                    .waitForElementVisible(alertSelector)
                    .assert.cssClassPresent(alertSelector, 'alert-info', 'Reply is being submitted...')
                    .assert.elementPresent(`#quoted_${newReplyId}`, "Reply html was inserted into the feed...")
            })
    }
}