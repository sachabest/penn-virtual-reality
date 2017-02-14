var express = require('express');
var GitHubApi = require("github");

var app = express();

var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var AUTH_TOKEN = process.env.AUTH_TOKEN;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

var github = new GitHubApi({
  // optional
  debug: true,
  protocol: "https",
  host: "api.github.com", // should be api.github.com for GitHub
  headers: {
      "user-agent": "PennVR Site" // GitHub is happy with a unique user agent
  },
  Promise: require('bluebird'),
  followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
  timeout: 5000
});

app.get('/api/projects/three', (req, res) => {
  github.authenticate({
    type: "oauth",
    token: AUTH_TOKEN
  });
  return github.repos.getForOrg({org: 'PennVR'}, (error, projects) => {
    res.send(projects.filter((repo) => {
      return repo['name'].indexOf('three-js') != -1;
    }));
  });
});

app.get('/api/projects/unreal', (req, res) => {
  github.authenticate({
    type: "oauth",
    token: AUTH_TOKEN
  });
  return github.repos.getForOrg({org: 'PennVR'}, (error, projects) => {
    res.send(projects.filter((repo) => {
      return repo['name'].indexOf('unreal-project') != -1;
    }));
  });
});

app.use(function(req, res) {
  // support ui router
  res.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
