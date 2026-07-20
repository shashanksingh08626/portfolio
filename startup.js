document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger to GSAP Engine core
    gsap.registerPlugin(ScrollTrigger);

    /* ==========================================
       1. HERO SECTION TIMELINE (Pure JS Control)
       ========================================== */
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-trigger",
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });

    // Hum .fromTo use kar rahe hain taaki CSS badalni na pade
    heroTl.fromTo('[data-scroll-item="badge"]', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
    .fromTo('[data-scroll-item="title"]', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 
        "-=0.3"
    )
    .fromTo('[data-scroll-item="desc"]', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
        "-=0.3"
    )
    .fromTo('[data-scroll-item="cta"]', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
        "-=0.2"
    )
    .fromTo('[data-scroll-item="mini-features"]', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
        "-=0.2"
    )
    
    // Right Side Exact Glass Card Entry (CSS Tilt angle handle karte hue zoom-in)
    .fromTo('.exact-glass-card', 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.6"
    )
    
    // Scroll Explore Prompt Hint
    .fromTo('[data-scroll-item="scroll-prompt"]', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, ease: "power1.out" }, 
        "-=0.2"
    );


    /* ==========================================
       2. THE STORY, SPARK & PROBLEM TIMELINE
       ========================================== */
    const storyTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#story-trigger",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });

    // Left Side Info Entry
    storyTl.fromTo('[data-story-item="tag"]', 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    )
    .fromTo('[data-story-item="title"]', 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
        "-=0.2"
    )
    .fromTo('[data-story-item="desc"]', 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
        "-=0.3"
    )

    // ✨ THE SPARK CARD ENTRY (No CSS required) ✨
    .fromTo('[data-story-item="spark"]', 
        { opacity: 0, y: 30, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.1)" }, 
        "-=0.2"
    )

    // Right Side 4 Problem Cards Staggered Pop
    .fromTo(['[data-story-item="card-1"]', '[data-story-item="card-2"]', '[data-story-item="card-3"]', '[data-story-item="card-4"]'], 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" }, 
        "-=0.4"
    )

    // Bottom Note Ticker Alert
    .fromTo('[data-story-item="note"]', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 
        "-=0.2"
    );
});

gsap.registerPlugin(ScrollTrigger);

    // Timeline configuration
    const visionTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".vision-section",
            start: "top 80%",          // Jab section ka top browser screen ke 80% par aayega
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Scroll up karne par reverse hoga, down par play
            // markers: true            // Kisi bhi confusion ke liye isko uncomment karke check kar sakte hain debug karne ke liye
        }
    });

    // 1. Left Text Elements Reveal (Fade from opacity 0 to 1, and slide up)
    visionTL.fromTo(".vision-tag", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
    .fromTo(".vision-title", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 
        "-=0.3"
    )
    .fromTo(".vision-desc", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 
        "-=0.4"
    );

    // 2. Chips Stagger Animation (Pills pop up one by one)
    visionTL.fromTo(".vision-chip", 
        { opacity: 0, scale: 0.8, y: 20 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" },
        "-=0.2"
    );

    // 3. Right Bento Header Reveal
    visionTL.fromTo(".bento-core-header", 
        { opacity: 0, scale: 0.95, y: 30 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
    );

    // 4. Bento Cards Slide-in from Right (Cascading Stagger Effect)
    visionTL.fromTo(".bento-card", 
        { opacity: 0, x: 60, scale: 0.98 }, 
        { opacity: 1, x: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
    );

    // 5. Mini Status Tags Pop (Final polish)
    visionTL.fromTo(".bento-status-tag", 
        { opacity: 0, scale: 0 }, 
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(2)" },
        "-=0.2"
    );

    // Ensure GSAP and ScrollTrigger are loaded correctly
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// SECTION 03: CONCEPT HIGHLIGHTS ANIMATION
// ==========================================
const initConceptHighlights = () => {
    // 1. Target elements
    const sectionContainer = document.querySelector('.concept-highlights-section .section-container');
    const sectionHeader = document.querySelector('.section-tag-wrapper');
    const highlightCards = document.querySelectorAll('.highlight-card');

    if (!sectionContainer) return; // Guard clause agar element na mile

    // Desktop/Tablet layout ke liye interactive aur smooth fade-in reveal pipeline
    const highlightsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".concept-highlights-section",
            start: "top 80%", // Jab section viewport ke 80% area me aaye tab animation start hogi
            end: "bottom 20%",
            toggleActions: "play none none reverse" // Scroll back hone par animation standard reverse toggling support karegi
        }
    });

    // Header Label Fade-in & Slide Up
    if (sectionHeader) {
        highlightsTimeline.fromTo(sectionHeader, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
    }

    // Grid Cards Staggered Animation (Ek ke baad ek smoothly fade aur scale ho kar upar aayenge)
    if (highlightCards.length > 0) {
        highlightsTimeline.fromTo(highlightCards,
            { 
                opacity: 0, 
                y: 40,
                scale: 0.95 
            },
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.7, 
                stagger: 0.1, // Har card ke beech me 0.1 seconds ka stagger delay
                ease: "back.out(1.2)" // Premium spring-back smooth drop feel dene ke liye
            },
            "-=0.3" // Header animation complete hone se pehle hi shuru ho jayega
        );
    }
};

// DOM Content Load hone par initialize karein
document.addEventListener("DOMContentLoaded", () => {
    initConceptHighlights();
});

// ==========================================================================
// SECTION 04 (HOW IT COULD WORK) STAGGERED SCROLL ANIMATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger plugin safely
    gsap.registerPlugin(ScrollTrigger);

    const processSection = document.querySelector(".process-flow-section");
    const processContainer = document.querySelector(".process-outer-container");

    if (processSection && processContainer) {
        
        // 1. Pehle outer glass block ko smoothly fade-in aur upar layout me set karenge
        gsap.to(processContainer, {
            scrollTrigger: {
                trigger: processSection,
                start: "top 75%", // Jab section screen ke 75% area par aayega
                toggleActions: "play none none none",
                once: true // Ek hi baar run hoga, performance optimize rakhne ke liye
            },
            onStart: () => {
                processContainer.classList.add("is-visible");
            }
        });

        // 2. Fir steps aur arrow connectors ko left-to-right cascade me animate karenge
        const timelineElements = document.querySelectorAll(
            ".process-timeline-track > .process-step, .process-timeline-track > .process-connector"
        );

        if (timelineElements.length > 0) {
            gsap.to(timelineElements, {
                scrollTrigger: {
                    trigger: ".process-timeline-track",
                    start: "top 70%", // Jab timeline track container target par aaye
                    toggleActions: "play none none none",
                    once: true
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.12, // Har agla step thode gap ke baad smoothly reveal hoga
                ease: "power2.out"
            });
        }
    }
});

// Register ScrollTrigger Plugin (ensure GSAP and ScrollTrigger CDN are loaded in HTML)
gsap.registerPlugin(ScrollTrigger);

// Isolate all animations inside .founder-section
const founderSection = document.querySelector('.founder-section');

if (founderSection) {
    const outerContainer = founderSection.querySelector('.founder-outer-container');
    
    // 1. Reveal the main background card container first
    ScrollTrigger.create({
        trigger: founderSection,
        start: "top 75%", // Triggers when top of the section is 75% down the viewport
        onEnter: () => {
            outerContainer.classList.add('is-visible');
        },
        once: true // Ensures animation only runs once for premium performance
    });

    // 2. Create timeline for inner elements (Photo Frame & Right side Content)
    const founderTL = gsap.timeline({
        scrollTrigger: {
            trigger: outerContainer,
            start: "top 65%",
            toggleActions: "play none none none"
        }
    });

    founderTL
        // Left Column Animations
        .to(founderSection.querySelector('.tech-frame-container'), {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out"
        })
        .to(founderSection.querySelector('.ambient-ring-glow'), {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.75)"
        }, "-=0.6")
        .to(founderSection.querySelector('.founder-profile-img'), {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")

        // Right Column Text Revelations (Staggered sequence)
        .to([
            founderSection.querySelector('.quote-mark-accent'),
            founderSection.querySelector('.founder-hero-greeting'),
            founderSection.querySelector('.founder-tagline'),
            founderSection.querySelector('.founder-bio-desc')
        ], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=1")

        // Bento Badges Staggered Animation
        .to(founderSection.querySelectorAll('.founder-bento-badges .badge-card'), {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.5)"
        }, "-=0.5")

        // Bottom Signature reveal
        .to(founderSection.querySelector('.founder-signature-footer'), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4");
}