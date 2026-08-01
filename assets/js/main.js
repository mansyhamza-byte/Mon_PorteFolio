// ================================
// INITIALISATION EMAILJS
// ================================

(function () {

    emailjs.init({

        publicKey: "zeDH2NbTxgTklaTMm"

    });

})();




// ================================
// CONTACT FORM
// ================================


const form = document.getElementById("contact-form");



form.addEventListener("submit", function(event){



    // Empêche le rechargement de la page
    event.preventDefault();

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();



    if(name === "" || email === "" || message === ""){

        alert("Veuillez remplir tous les champs avant d'envoyer.");

        return;

    }


    // Envoie les données du formulaire à EmailJS

    const time = new Date().toLocaleString();


emailjs.send(

    "service_c4mm2l8",

    "template_ye4v5bc",

    {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
        time: time
    }

)

    .then(function(){


        alert("Message envoyé avec succès ✅");


        // Effacer le formulaire après l'envoi

        form.reset();


    })


    .catch(function(error){


        alert("Erreur lors de l'envoi ❌");


        console.log("Erreur :", error);


    });



});

