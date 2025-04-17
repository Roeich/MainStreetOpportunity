document.addEventListener('DOMContentLoaded', function() {
    /* __________________________ start home page __________________________ */
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('translate-x-full');
    });
    closeMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('translate-x-full');
    });

    // submenu control 
    const submenuWraps = document.querySelectorAll(".sub_navbar_wrap");
    submenuWraps.forEach(wrap => {
        const trigger = wrap.querySelector(".nav_link");
        const submenu = wrap.querySelector(".sub_navbar");

        // Desktop hover
        wrap.addEventListener("mouseenter", function() {
            if (window.innerWidth >= 1024) {
                submenu.classList.remove("show_subNavbar");
            }
        });

        wrap.addEventListener("mouseleave", function() {
            if (window.innerWidth >= 1024) {
                submenu.classList.add("show_subNavbar");
            }
        });

        // Mobile click toggle
        trigger.addEventListener("click", function(e) {
            if (window.innerWidth < 1024) {
                e.preventDefault();

                // Close all other open submenus
                submenuWraps.forEach(otherWrap => {
                    if (otherWrap !== wrap) {
                        otherWrap.classList.remove("show_subNavbar");
                        const otherSubmenu = otherWrap.querySelector(".sub_navbar");
                        if (otherSubmenu) otherSubmenu.classList.add("hidden");
                    }
                });

                // Toggle current
                wrap.classList.toggle("active");
                submenu.classList.toggle("show_subNavbar");
            }
        });
    });


    // Office tabs functionality
    const frontOfficeTab = document.getElementById('front-office-tab');
    const backOfficeTab = document.getElementById('back-office-tab');
    const frontOfficeContent = document.getElementById('front-office-content');
    const backOfficeContent = document.getElementById('back-office-content');
    if(frontOfficeTab){
        frontOfficeTab.addEventListener('click', function() {
            frontOfficeContent.classList.remove('hidden');
            backOfficeContent.classList.add('hidden');
            frontOfficeTab.classList.add('bg-gray-800', 'text-white');
            frontOfficeTab.classList.remove('bg-gray-900', 'text-gray-300');
            backOfficeTab.classList.add('bg-gray-900', 'text-gray-300');
            backOfficeTab.classList.remove('bg-gray-800', 'text-white');
        });
    
        backOfficeTab.addEventListener('click', function() {
            frontOfficeContent.classList.add('hidden');
            backOfficeContent.classList.remove('hidden');
            frontOfficeTab.classList.add('bg-gray-900', 'text-gray-300');
            frontOfficeTab.classList.remove('bg-gray-800', 'text-white');
            backOfficeTab.classList.add('bg-gray-800', 'text-white');
            backOfficeTab.classList.remove('bg-gray-900', 'text-gray-300');
        });
    }

    // Typed.js for hero text
    // if (window.Typed) {
    //     if(document.getElementById("typed-text")){
    //         new Typed('#typed-text', {
    //             strings: [
    //                 'Your Business.<br>Our AI.<br><span class="gradient-text">Unlimited Growth.</span>',
    //                 'More Leads.<br>Less Work.<br><span class="gradient-text">Higher Profits.</span>',
    //                 'Smart Marketing.<br>Digital Workforce.<br><span class="gradient-text">Automated Success.</span>'
    //             ],
    //             typeSpeed: 50,
    //             backSpeed: 25,
    //             backDelay: 3000,
    //             startDelay: 500,
    //             loop: true,
    //             cursorChar: '|',
    //             contentType: 'html'
    //         });
    //     }
    // }

    // Initialize particles.js
    if (window.particlesJS) {
        if(document.getElementById("particles-js")){
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#3a86ff'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#3a86ff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (!mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.add('translate-x-full');
                }
            }
        });
    });

    // initialize on scroll animation 
    AOS.init({
        duration: 900
    });
    /* __________________________ end home page __________________________ */
});