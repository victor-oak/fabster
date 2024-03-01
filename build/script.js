window.addEventListener("load", function (event) {

    let body = document.body;

    function adicionarClasseAoBody() {
        body.classList.add('mobile-edit');
    }

    function retirarClasseDoBody() { 
        body.classList.remove('mobile-edit');
        document.querySelector('.create .subwrap').scroll(0,0);
    }

    document.querySelector('.edit-card').addEventListener('click', adicionarClasseAoBody);

    document.querySelector('.view-card').addEventListener('click', retirarClasseDoBody);

});