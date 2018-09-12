# sosatb
Remove age verification system form PornHub for Russian users.

# How to use it?

So, it's easy. Just copy this code and paste it to conslove of your browser.

```js
(function roskomnadzorSosatb() {
    var ids = ['container', 'wrapper']
    ids.forEach(function(id) {
        document.getElementById('age-verification-' + id).outerHTML = "";
    });
})()
```

# LICENSE
Lol, do what the fuck you want.
