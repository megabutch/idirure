// Example code using isAuthenticated in a Node.js application with Passport.js

// Middleware to check if the user is authenticated
function adminIsLoggedIn(req, res, next) {
  // If the user is authenticated, proceed to the next middleware
  if (req.isAuthenticated()) {
    return next();
  }
  // If the user is not authenticated, redirect to the login page
  res.redirect('/login');
}

// Route that requires authentication
app.get('/admin', adminIsLoggedIn, (req, res) => {
  // Only authenticated users can access this route
  res.render('admin');
});
