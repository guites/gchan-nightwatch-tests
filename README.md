# gchan-nightwatch-tests

Suite of e2e tests for a vue.js app.

- [x] tests posting and replying to posts without images
- [ ] tests posting and replying to posts sending an image url as attachment
- [ ] tests posting and replying to posts using image upload functionallity
- [ ] tests posting using the gif search functionallity
- [ ] tests possible user flow ex. uploading an image, cancelling, searching for a gif, cancelling, attaching an URL, cancelling, uploading a video and submitting
- [ ] tests the infinite scroll functionallity
- [ ] tests the search functionallity
- [ ] tests navigating to post single pages and replying
- [ ] tests embedded youtube links
- [ ] tests quotted reply preview \(both showing in the feed and not showing in the feed\)

see package.json for specific browser testing.

## test by tags

```
node_modules/nightwatch/bin/nightwatch --tag no-img
node_modules/nightwatch/bin/nightwatch --tag reply
```

etc
