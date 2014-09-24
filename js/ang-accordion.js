/*
 * angaccordion
 * Accordion directive for AngularJS
 * Licensed under the MIT license
 */

'use strict';

angular.module('angAccordion', ['collapsibleItem']).directive('angAccordion', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {
      oneAtATime: '@',
      rightIconUrl: '@',
      downIconUrl: '@', 
      iconPosition: '@' 
    },
    controller: function($scope) {
      var collapsibleItems = [];

      this.openCollapsibleItem = function(collapsibleItemToOpen) {
        if($scope.oneAtATime) {
          angular.forEach(collapsibleItems, function(collapsibleItem) {
            collapsibleItem.isOpenned = false;
            collapsibleItem.icon = $scope.rightIconUrl;
          });
        }
        collapsibleItemToOpen.isOpenned = true;
      };

      this.addCollapsibleItem = function(collapsibleItem) {
        collapsibleItems.push(collapsibleItem);
        collapsibleItem.rightIconUrl = $scope.rightIconUrl;
        collapsibleItem.downIconUrl = $scope.downIconUrl;
        collapsibleItem.iconIsOnLeft = $scope.iconPosition == 'left' ? true: false;
      };
    },
    template: '<div class="accordion" ng-transclude></div>'
  };
});

angular.module('collapsibleItem', []).directive('collapsibleItem', function() {
  return {
    require: '^angAccordion',
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {
      title: '@',
      initiallyOpen: '@'
    },
    link: function(scope, element, attrs, accordionController) {
      scope.isOpenned = (scope.initiallyOpen) ? true : false;
      accordionController.addCollapsibleItem(scope);

      if(scope.isOpenned)
        scope.icon = scope.downIconUrl;
      else
        scope.icon = scope.rightIconUrl;

      scope.toggleCollapsibleItem = function () {
        if(!scope.isOpenned) {
          accordionController.openCollapsibleItem(this);
          scope.icon = scope.downIconUrl;
        }
        else {
          scope.isOpenned = false;
          scope.icon = scope.rightIconUrl;
        }
      }
    },
    template: '<div class="collapsible-item" ng-class="{open: isOpenned}"><div class="title" ng-click="toggleCollapsibleItem()">{{title}}<img class="icon" ng-class="{iconleft: iconIsOnLeft}" ng-src="{{icon}}" /></div><div class="body"><div class="content" ng-transclude></div></div></div>'
  };
});
