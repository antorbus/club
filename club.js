if (Meteor.isClient) {
  Accounts.ui.config({ passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL' });

  Meteor.autorun(function() {
    if(Meteor.user()) {
        $('body').css('background-image','url(http://unsplash.imgix.net/uploads/1412594480669535c9ef9/9d85c477?q=75&fm=jpg&s=e511a1f1342208af42aed9515ea97c3e)');
    }
    else
    {
        $('body').css('background-image','url(http://cdn2.landscapehdwalls.com/wallpapers/1/white-mountains-522-1920x1080.jpg)');
    }
  });
}
                 

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
