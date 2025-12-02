document.addEventListener('DOMContentLoaded', function() {

    // ======================================================
    // 1. MENU MOBILE (NÚT 3 GẠCH)
    // ======================================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Thêm/Bỏ class 'active' để trượt menu ra/vào
            navMenu.classList.toggle('active');
            
            // Hiệu ứng xoay nút 3 gạch (Tùy chọn)
            hamburger.classList.toggle('open');
        });

        // Đóng menu khi bấm vào một link bất kỳ
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    // ======================================================
    // 2. MODAL (CỬA SỔ BẬT LÊN)
    // ======================================================
    const modal = document.getElementById('promoModal');
    const openBtn = document.querySelector('.open-modal-btn');
    const closeBtn = document.querySelector('.close-btn');

    if (modal && openBtn && closeBtn) {
        openBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // ======================================================
    // 3. CAROUSEL (SLIDER ẢNH)
    // ======================================================
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (slides.length > 0) {
        showSlides(slideIndex);

        if (prevBtn) {
            prevBtn.addEventListener('click', () => changeSlide(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => changeSlide(1));
        }
    }

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});
