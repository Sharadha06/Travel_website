document.addEventListener('DOMContentLoaded', () => {
    let formBtn = document.querySelector('#login-btn');
    let loginForm = document.querySelector('.login-form-container');
    let formClose = document.querySelector('#form-close');
    let navbar = document.querySelector('.navbar');
    let videoBtn = document.querySelectorAll('.vid-btn');
    let imgBtn = document.querySelectorAll('.img-btn');
    let searchBar = document.querySelector('#search');
    
    window.onscroll = () => {
        if (navbar) navbar.classList.remove('active');
        if (loginForm) loginForm.classList.remove('active');
    };

    if (formBtn) {
        formBtn.addEventListener('click', () => {
            if (loginForm) loginForm.classList.add('active');
        });
    }

    if (formClose) {
        formClose.addEventListener('click', () => {
            if (loginForm) loginForm.classList.remove('active');
        });
    }

    if (videoBtn) {
        videoBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                let activeControl = document.querySelector('.controls .active');
                if (activeControl) activeControl.classList.remove('active');
                btn.classList.add('active');
                let src = btn.getAttribute('data-src');
                let videoSlider = document.querySelector('#video-slider');
                if (videoSlider) videoSlider.src = src;
            });
        });
    }

    if (imgBtn) {
        imgBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                let activeSlide = document.querySelector('.slides .active');
                if (activeSlide) activeSlide.classList.remove('active');
                btn.classList.add('active');
                let src = btn.getAttribute('data-src');
                let imgSlider = document.querySelector('#img-slider');
                if (imgSlider) imgSlider.src = src;
            });
        });
    }

    if (searchBar) {
        let productContainer = document.getElementById("box-container");
        if (productContainer) {
            let productlist = productContainer.querySelectorAll(".box .content h3");

            searchBar.addEventListener("keyup", (event) => {
                let enteredValue = event.target.value.toUpperCase();
                productlist.forEach(product => {
                    let productname = product.textContent.toUpperCase();
                    if (productname.indexOf(enteredValue) < 0) {
                        product.parentElement.parentElement.style.display = "none";
                    } else {
                        product.parentElement.parentElement.style.display = "block";
                    }
                });
            });
        }
    }
});