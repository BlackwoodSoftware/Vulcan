Package.describe({
  name: "telescope:rss",
  summary: "Telescope RSS package",
  version: "0.1.0",
  git: "https://github.com/TelescopeJS/telescope-rss.git"
});

Npm.depends({rss: "0.3.2"});

Package.onUse(function (api) {

  api.use(['telescope:core@0.1.0']);

  api.addFiles(['lib/server/rss.js', 'lib/server/routes.js'], ['server']);

  api.export(['serveRSS']);
});