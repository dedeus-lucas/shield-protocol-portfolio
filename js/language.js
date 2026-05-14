const translations = {
  "pt-br": ptBR,
  en: enUS,
};

const languageToggle = document.getElementById("languageToggle");

const elements = document.querySelectorAll("[data-i18n]");

let currentLanguage = localStorage.getItem("language") || "pt-br";

function updateLanguage(language) {
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    element.textContent = translations[language][key];
  });

  document.documentElement.lang = language;

  languageToggle.textContent = language === "pt-br" ? "EN" : "PT";

  localStorage.setItem("language", language);
}

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt-br" ? "en" : "pt-br";

  updateLanguage(currentLanguage);
});

updateLanguage(currentLanguage);
