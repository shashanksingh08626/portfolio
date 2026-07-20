const form = document.getElementById("contact-Form");
const submitBtn = document.getElementById("submit-Btn");

form.addEventListener("submit", function (e) {

        setTimeout(() => {

            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                Send Message
                <i class="fa-solid fa-paper-plane"></i>
            `;

        }, 2000);

    }, 2000);

})

