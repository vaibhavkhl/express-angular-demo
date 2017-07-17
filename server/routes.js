var User = require('./models/user');
var generator = require('generate-password');

module.exports = function(app) {

  app.get('/api/users', function(req, res) {
    User.find(function(err, users){
            if (err)
                res.send(err);

            res.json(users);
        });
  });

  app.post('/api/user', function(req, res) {
    var password = generator.generate({
        length: 10,
        numbers: false
    });
    var user = new User({email: req.body.email, temppassword: password})
    user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ user: user });
        });
  });

  app.post('/api/changepassword', function(req, res) {
    
    requser = req.body.user
    User.findById(requser._id, function(err, user){
      if (err)
          res.send(err);

      user.password = requser.password
      user.save(function(err) {
              if (err)
                  res.send(err);

              res.json({ user: user });
          });
    })
  })

  app.post('/api/login', function(req, res) {
    User.findOne({email: req.body.email}, function(err, user) {
      if (err) {
          res.send(err)
        }

      if (user == null) {
        return res.json('no user with this email')
      }

      if (user.temppassword == req.body.password) {
        return res.json({user: user})
      }

      if (user.password == req.body.password) {
        return res.json({user: user, message: 'loggedin'})
      }

      res.json('incorrect password')
    })
  })

  app.get('*', function(req, res) {
      res.sendfile('./public/index.html');
  });

}
