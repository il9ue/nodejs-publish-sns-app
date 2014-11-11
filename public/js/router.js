
define(['views/index', 'views/register', 'views/login',
        'views/profile', 'models/statusCollections', 'models/account'],

       function(IndexView, RegisterView, LoginView, ProfileView,
                StatusCollection, Account) {
 
  var SocialRouter = Backbone.Router.extend({
    currentView: null,

    routes: {
      "index": "index",
      "login": "login",
      "register": "register",
      "profile/:id": "profile"
    },

    changeView: function(view) {
      if ( null != this.currentView ) {
        this.currentView.undelegateEvents();
      }
      this.currentView = view;
      this.currentView.render();
    },

    index: function() {
      //var statusCollection = new StatusCollection();
      //statusCollection.url = '/accounts/me/activity';
      this.changeView(new IndexView({
        //collection: statusCollection
      }));
      //statusCollection.fetch();
    },

    login: function() {
      this.changeView(new LoginView());
    },

    register: function() {
      this.changeView(new RegisterView());
    },

    profile: function(id) {
      
    },
  });

  return new SocialRouter();
});

