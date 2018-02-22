(function() {
    var nav = '<a class="top" href="#">TOP</a><h2>目录</h2>' + getNav('h1');
    var dom = document.createElement('div');
    dom.className = 'nav-list';
    dom.innerHTML = nav;
    document.body.appendChild(dom);

    function getNav() {
        var nav = '<ul>';
        var hs = document.querySelectorAll('h1, h2, h3');
        for (var i = 0; i < hs.length; i++) {
            var link = escape(hs[i].innerHTML).replace(/(%u|\/|\\|\s)/g, '');
            hs[i].id = link;
            nav += '<li class="level-' + hs[i].tagName.toLowerCase() + '"><a href="#' + link + '">' + hs[i].innerHTML + '</a></li>';
        }
        return nav + '</ul>';
    }
    var navHead = document.querySelector('.nav-list h2');
    navHead.addEventListener('click', function () {
        dom.style.height = dom.style.height ? '' : '30px';
    });
})();