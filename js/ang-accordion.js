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
      oneAtATime: '@'
    },
    controller: function($scope) {
      var collapsibleItems = [];

      this.openCollapsibleItem = function(collapsibleItemToOpen) {
        if($scope.oneAtATime) {
          angular.forEach(collapsibleItems, function(collapsibleItem) {
            collapsibleItem.isOpenned = false;
          });
        }
        collapsibleItemToOpen.isOpenned = true;
      };

      this.addCollapsibleItem = function(collapsibleItem) {
        collapsibleItems.push(collapsibleItem);
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

      scope.toggleCollapsibleItem = function () {
        if(!scope.isOpenned) {
          accordionController.openCollapsibleItem(this);
        }
        else
          scope.isOpenned = false;
      }
    },
    template: '<div class="collapsible-item" ng-class="{open: isOpenned}"><div class="title" ng-click="toggleCollapsibleItem()">{{title}}</div><div class="body"><div class="content" ng-transclude></div></div></div>'
  };
});
