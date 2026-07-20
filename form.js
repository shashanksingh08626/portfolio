const form = document.getElementById("contact-form");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");

if (form && submitBtn) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        submitBtn.disabled = true;

        submitBtn.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        `;

        const formData = new FormData(form);

        try {

            const response = await fetch("https://api.web3forms.com/submit", {

                method: "POST",

                body: formData

            });

            const data = await response.json();

            if (data.success) {

                result.innerHTML = "✅ Message Sent Successfully!";
                result.style.color = "#8B5CF6";

                form.reset();

                submitBtn.innerHTML = `
                    <i class="fa-solid fa-circle-check"></i>
                    Message Sent
                `;

            } else {

                result.innerHTML = "❌ Something went wrong!";
                result.style.color = "#ff4d4d";

                submitBtn.innerHTML = "Send Message";

            }

        } catch (error) {

            result.innerHTML = "❌ Network Error!";
            result.style.color = "#ff4d4d";

            submitBtn.innerHTML = "Send Message";

        }

        submitBtn.disabled = false;

        setTimeout(() => {

            result.innerHTML = "";

            submitBtn.innerHTML = `
                Send Message
                <i class="fa-solid fa-paper-plane"></i>
            `;

        }, 3000);

    });

}