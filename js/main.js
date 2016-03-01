var madLibs = angular.module('ngMadLibs', [])

madLibs.constant('VERSION', "1.1")
madLibs.run(function(VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

madLibs.controller('madLibsController',function($scope){

    function initScope() {
      $scope.gender = {
      };

      $scope.showMadLib = false;
      $scope.submitted = false;

    }

    initScope();

    $scope.setGender = function(gender) {
      if(gender == 'male') {
        $scope.gender.pronoun='he';
        $scope.gender.possessive='his';
        $scope.gender.poss='him';
      } else {
        $scope.gender.pronoun='she';
        $scope.gender.possessive='her';
        $scope.gender.poss='her';
      }
    }

    $scope.submit = function(){
      console.log($scope);
        try {
          if(!Object.keys($scope.gender).length) { // check if the object is empty
            genderError();
          }
        } catch (e) { genderError(); }
        $scope.showMadLib = true;
        $scope.submitted = true;
        console.log($scope.mad);

        function genderError() { //show genderReminder div if no gender chosen
          var genderReminder = document.getElementById('genderReminder').style.display = 'block';
          var maleLabel = document.getElementById('maleLabel').style.color = '#ff4d4d';
          var femaleLabel = document.getElementById('femaleLabel').style.color = '#ff4d4d';
          return false;
        }
    }

    $scope.reset = function(){
        document.getElementById('male').checked = document.getElementById('female').checked = false; // clear radio buttons visually
        $scope.name = $scope.job = $scope.tedious = $scope.dirty_task = $scope.celebrity = $scope.useless = $scope.adjective = $scope.obnoxious_celebrity = $scope.huge_number = undefined;
        initScope();
        console.log($scope.mad);
    }
});
