const contactData = {
  phone: "+919845973774",
  whatsapp: "+91 9845973774",
  email: "contact@example.com",
};

injectContact(contactData);

function injectContact(contactData) {
  document.querySelectorAll(".phoneElement").forEach((el) => {
    el.href = `tel:${contactData.phone}`;
    // el.textContent = contactData.phone; // Remove if you don't want to replace text
  });

  document.querySelectorAll(".whatsappElement").forEach((el) => {
    const phoneNumber = contactData.whatsapp.replace(/\s+/g, "");
    el.href = `https://wa.me/${phoneNumber}?text=Hello%2C%20%0AI%20hope%20you%27re%20doing%20well.%20%0AI%20found%20your%20number%20and%20thought%20I%E2%80%99d%20reach%20out%20to%20say%20hi.%20%0ALooking%20forward%20to%20connecting`;
    // el.textContent = contactData.whatsapp; // 🔥 Remove this line
  });

  document.querySelectorAll(".emailElement").forEach((el) => {
    el.href = `mailto:${contactData.email}`;
    // el.textContent = contactData.email;
  });
}
