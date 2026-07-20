gsap.registerPlugin(ScrollTrigger);

// ---------------- HERO ----------------

gsap.to(".hero-content", {
    y: -120,
    opacity: 0,

    scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: 2
    }
});

gsap.to(".hero-image-wrapper", {
    y: -80,
    scale: 0.92,
    opacity: 0.25,

    scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: 2
    }
});

// ---------------- WAVE ----------------

gsap.to("#wave-container", {
    y: -120,
    opacity: 0,

    scrollTrigger: {
        trigger: "#wave-container",
        start: "top center",
        end: "bottom top",
        scrub: 2
    }
});

// ---------------- STATS ----------------

gsap.to(".stats-container",{

    y:-120,

    ease:"none",

    scrollTrigger:{

        trigger:".stats-container",

        start:"top 80%",

        end:"top 10%",

        scrub:2,

        markers: false

    }

});



// ---------------- ABOUT ----------------

gsap.from(".about-section", {
    y: 120,
    opacity: 0,

    scrollTrigger: {
        trigger: ".about-section",
        start: "top 90%",
        end: "top 40%",
        scrub: 2,
        markers: false


    }
});

/* ==========================================
        NAVBAR ACTIVE LINK
========================================== */

function setActive(section){

    document
        .querySelectorAll(".nav-links a")
        .forEach(link=>link.classList.remove("active"));

    const activeLink=document.querySelector(`.nav-links a[href="#${section}"]`);

    if(activeLink){

        activeLink.classList.add("active");

    }

}

setActive("home")

/* ------------ HOME ------------ */

ScrollTrigger.create({

    trigger:"#home",

    start:"top top",

    end:"bottom 30%",

    onToggle:self=>{

        if(self.isActive){

            setActive("home");

        }

    }

});


/* ------------ ABOUT ------------ */

ScrollTrigger.create({

    trigger:"#about",

    start:"top 70%",

    end:"bottom 40%",

    onToggle:self=>{

        if(self.isActive){

            setActive("about");

        }

    }

});


/* ------------ SKILLS ------------ */

ScrollTrigger.create({

    trigger:"#skills",

    start:"top 70%",

    end:"bottom 40%",

    onToggle:self=>{

        if(self.isActive){

            setActive("skills");

        }

    }

});


/* ------------ PROJECTS ------------ */

ScrollTrigger.create({

    trigger:"#projects",

    start:"top 70%",

    end:"bottom 40%",

    onToggle:self=>{

        if(self.isActive){

            setActive("projects")

        }

    }

});


/* ------------ CONTACT ------------ */

ScrollTrigger.create({

    trigger:"#contact",

    start:"top 70%",

    end:"bottom 40%",

    onToggle:self=>{

        if(self.isActive){

          

        }

    }

});


// =============================================================
// SKILLS SECTION SCROLLYTELLING INTEGRATION (GSAP + THREE.JS)
// =============================================================

// Ensure GSAP plugins are registered safely
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Object to store properties that change dynamically on scroll
    const scrollModifiers = {
        topWaveAmplitude: 45,
        bottomWaveAmplitude: 35,
        waveSpeedMultiplier: 1.0,
        cameraZOffset: 850
    };

    // 1. Interactive Wave Scrollytelling
    gsap.to(scrollModifiers, {
        scrollTrigger: {
            trigger: ".skills-section-wrapper",
            start: "top bottom", // Starts when section top hits screen bottom
            end: "bottom top",   // Ends when section bottom leaves screen top
            scrub: 1.2,          // Smoothly links animation timeline to scrolling distance
        },
        // Jaise user scroll karega, waves ki height aur speed crash karke dynamically alter hongi
        topWaveAmplitude: 85,       // Waves expand into deep crests mid-scroll
        bottomWaveAmplitude: -65,    // Bottom grid flows deeper
        waveSpeedMultiplier: 2.2,   // Scrolling fast speeds up particle velocity
        cameraZOffset: 720,         // Zoom-in effect into the particle field
        ease: "none"
    });

    // 2. Technical Skills Cards Stagger Entrance
    gsap.fromTo(".skills-section-wrapper .lang-card", 
        {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotationX: 15
        },
        {
            scrollTrigger: {
                trigger: ".skills-section-wrapper .tech-cards-grid",
                start: "top 85%", // Triggers entry animation slightly before element is in view
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.12, // Har ek language card 0.12 seconds ke delay par modular wave banake entry lega
            ease: "power2.out"
        }
    );

    // 3. Other Skills Boxes Stagger Entrance
    gsap.fromTo(".skills-section-wrapper .other-skill-box", 
        {
            opacity: 0,
            y: 40,
            scale: 0.95
        },
        {
            scrollTrigger: {
                trigger: ".skills-section-wrapper .other-skills-grid",
                start: "top 90%"
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.4)" // Slight bounce effect on lower grid boxes arrival
        }
    );

    // --- RETAIN LOGIC COUPLING INSIDE ANIMATE LOOP ---
    // Ab jahan tumhaare animate() loop ke andar `pTop[idx + 1]` aur `count` logic calculations chal rahe hain,
    // wahan wave amplitudes aur count incremental speeds ko in dynamic variables se swap kar do:
    
    /* 
    Inside animate() function loop replace with:
    
    pTop[idx + 1] = (Math.sin((ix + count) * 0.23) * scrollModifiers.topWaveAmplitude) + 
                    (Math.sin((iy + count) * 0.38) * scrollModifiers.topWaveAmplitude) + 130;

    pBottom[idx + 1] = (Math.sin((ix - count) * 0.18) * Math.abs(scrollModifiers.bottomWaveAmplitude)) + 
                       (Math.sin((iy + count) * 0.32) * Math.abs(scrollModifiers.bottomWaveAmplitude)) - 170;
                       
    camera.position.z = scrollModifiers.cameraZOffset;
    count += 0.03 * scrollModifiers.waveSpeedMultiplier;
    */
}

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    // --- 1. FILTER HOVER SWITCH LOGIC ENGINE ---
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // Stops core card link mechanics from interrupting

            // Active structural assignment
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (filterValue === "all" || filterValue === cardCategory) {
                    card.style.display = "block";
                    // Delayed visibility fade matrix
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // --- 2. DYNAMIC CARD TAP OPENS LINK DIRECTLY ---
    projectCards.forEach(card => {
        // Force pointer cursor layout state
        card.style.cursor = "pointer";

        card.addEventListener("click", (e) => {
            // Safe escape checking if buttons inside footer are directly tapped
            if (e.target.closest('.project-links') || e.target.closest('.tech-icons')) {
                return; 
            }

            const targetURL = card.getAttribute("data-link");
            if (targetURL) {
                window.open(targetURL, "_blank"); // Launches app in secondary tab seamlessly
            }
        });
    });
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.3});

document.querySelectorAll(".hidden").forEach((el)=>{
    observer.observe(el);
});


