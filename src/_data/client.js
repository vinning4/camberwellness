module.exports = {
    name: "Camberwellness Medical Centre",
    email: "contact@camberwellness.health",
    phoneForTel: "03-9600-2661",
    phoneFormatted: "(03) 9600 2661",
    address: {
        lineOne: "124-126 Camberwell Rd",
        lineTwo: "",
        city: "Camberwell",
        state: "VIC",
        zip: "3123",
        country: "AU",
        mapLink: "https://share.google/hUfYjaz3K8GyRqyB2",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.camberwellness.health",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
