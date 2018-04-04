var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var Announcement = keystone.list('Announcement').model;

  var locals = res.locals;
  locals.section = 'announcement';
  locals.announcements = [];

  Announcement.find(function (err, results) {
    results.forEach(function(result) {
      locals.announcements.unshift(result);
    });
  });

  view.render('announcement');
};
