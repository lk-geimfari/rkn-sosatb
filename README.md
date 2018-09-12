# rkn-sosatb

<p align="center">
  <img src="https://user-images.githubusercontent.com/15812620/45451528-08215100-b6e4-11e8-92c3-2161e773ef58.png"/>
</p>

Removes annoying age verification system based on VK.com from PornHub for Russian users.

# Attention (in Russian)
Проект разработан исключительно в научных целях и исключительно во благо общества и общественной справедливости. Данный проект поддерживаю не я, а брат моего знакомого друга, потому все вопросы к нему, но он сейчас в отпуск уехал, поэтому не ищите его  пожалусто.

# How to use it?

So, it's easy. Just copy this code and paste it to console of your browser.

```js
(function roskomnadzorSosatb() {
    ['container', 'wrapper'].forEach(function(id) {
        document.getElementById('age-verification-' + id).outerHTML = "";
    });
})()
```

# LICENSE
Do what the fuck you want. I mean do what the fuck you want with the project above, not in actual life, because some things in real life can be illegal.
