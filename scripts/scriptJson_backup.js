//import i18n from 'i18next';

i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['special', 'common'],
    defaultNS: 'special',
    backend: {
      loadPath: 'http://localhost:8080/I18NSample/locales//{{lng}}/{{ns}}.json',
      crossDomain: false
    }
  }, function (err, t) {
    // init set content
    updateContent();
  });


// just set some content and react to language changes
// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
function updateContent() {
  var text = i18next.t('title');
  $('#title').html(i18next.t('title', { what: 'i18next' }));
  $('#saveBtn').html(i18next.t('common:button.save', { count: 1 }));

  $('#info').html(`detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`);
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});