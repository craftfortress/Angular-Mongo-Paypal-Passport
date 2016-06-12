(function () {

  angular
  .module('meanApp')
  .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$location', 'authentication'];
  function loginCtrl($location, authentication) {
    var vm = this;

    vm.credentials = {
      email : "",
      password : ""
    };

    vm.onSubmit = function () {
      //alert("sub");
     //authentication
      //  .login(vm.credentials)
     //   .error(function(err){
           // alert("ERROR " + JSON.stringify(err));
      //  })
     //   .then(function(){
//$location.path('profile');
//});
    };

  }

})();