console.log('config.js');

import {Atto} from './js/atto.js';

var plugins =
[
    'nav',
//    'blog'
];

var routes =
{
  footer: {path: "content", source: "footer.md"},
};

var default_content =
[
  {target: 'center.banner', source: 'content/banner.md'},
  {target: 'left-sidebar', source: 'content/left-sidebar.md'},
  {target: 'right-sidebar', source: 'content/right-sidebar.md'},
  {target: 'footer', source: 'footer'}
];

console.log("default_content");
console.log(default_content);

var initial_content = {target: 'center.main', source: 'content/main-page.md'};

var configs =
{
    plugins: plugins,
    routes: routes,
    default_content: default_content,
    initial_content: initial_content
}

var app = new Atto(configs);

app.initializeApp();