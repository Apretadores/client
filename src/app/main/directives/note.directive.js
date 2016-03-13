(function () {

  angular.module('apretadores.main')
    .directive('noteTemplate', noteTemplate);

  function noteTemplate (Config) {
    return {
      restrict: 'E',
      scope: {
        note: '='
      },
      link: function (scope) {
        scope.baseUrl = Config.base;
      },
      templateUrl: 'app/main/views/note.html'
    };
  }

}());
