# rkn-sosatb
Remove auth form PornHub for Russian users.


# Code

```js
(function roskomnadzorSosatb() {
    var ids = ['container', 'wrapper']
    for (var i in ids) {
        var elementID = 'age-verification-' + ids[i];
        var element = document.getElementById(elementID);
        element.parentNode.removeChild(element);
    }
})()
```
