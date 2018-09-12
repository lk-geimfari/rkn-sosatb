# rkn-sosatb

<p align="center">
  <img src="https://user-images.githubusercontent.com/15812620/45451528-08215100-b6e4-11e8-92c3-2161e773ef58.png"/>
</p>

Remove age verification system form PornHub for Russian users. Роскомнадзор состатб!

# Attention
Этот проект поддерживаю не я, а брат моего знакомого друга.

# How to use it?

So, it's easy. Just copy this code and paste it to console of your browser.

```js
(function roskomnadzorSosatb() {
    var ids = ['container', 'wrapper']
    ids.forEach(function(id) {
        document.getElementById('age-verification-' + id).outerHTML = "";
    });
})()
```

# LICENSE
Do what the fuck you want.
