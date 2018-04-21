console.log('config.js');

// Using a module approach works fine--except in firefox!!!
//import {Atto} from './js/atto.js';
// using $.getScript below

var github_base = 'https://raw.githubusercontent.com/';
var username = 'abalter/';
var reponame = 'attoweb/';

var base_url = github_base + username + reponame + 'master/';
base_url = "";

var default_content =
[
    {source: "header.md", target: "header"}
];

var initial_content =
{
    target: 'main', source: 'page1.md'
};

var configs =
{
    default_content: default_content,
    initial_content: initial_content,
    base_url: base_url
};

debug_level = 2;
$.getScript('js/atto.js', () =>
{
    var app = new Atto(configs);
    app.initializeApp();
});

