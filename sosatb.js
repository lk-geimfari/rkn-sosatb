(function roskomnadzorSosatb() {
    ['container', 'wrapper'].forEach(function(id) {
        console.log('Роскомнадзор сасатб!')
        document.getElementById('age-verification-' + id).outerHTML = "";
    });
})()
