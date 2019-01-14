// use plugins and options as needed, for options, detail see
// http://i18next.com/docs/
function Localize(language) {
    i18next.init({
        lng: language, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
        resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
            en: {
                translation: {
                    input: {
                        placeholder: "a placeholder"
                    },
                    nav: {
                        home: 'home',
                        page1: 'Page One',
                        page2: 'Page Two'
                    }
                }
            }
            ,
            cn: {
                translation: {
                    input: {
                        placeholder: "一个占位符"
                    },
                    nav: {
                        home: '主页',
                        page1: '第一页',
                        page2: '第二页'
                    }
                }
            }

        }
    }, function (err, t) {
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $);

        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        var temp = $('[data-i18n]');
        temp.localize();
    })
};

Localize("cn");