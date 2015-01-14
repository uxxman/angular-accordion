/*
 * angaccordion
 * Accordion directive for AngularJS
 * Licensed under the MIT license
 */

(function() {
    'use strict';

    angular
      .module('angAccordion', ['collapsibleItem'])
      .controller('angAccordionController', ['$scope', function($scope){
        var collapsibleItems = [];
          
          this.openCollapsibleItem = function(collapsibleItemToOpen) {
            if( $scope.oneAtATime ) {
              angular.forEach(collapsibleItems, function(collapsibleItem) {
                collapsibleItem.isOpenned = false;
                collapsibleItem.icon = collapsibleItem.closeIcon;
              });
            }
            collapsibleItemToOpen.isOpenned = true;
          };

          this.addCollapsibleItem = function(collapsibleItem) {
            collapsibleItems.push(collapsibleItem);
            
            if ( $scope.closeIconClass !== undefined || $scope.openIconClass !== undefined ) {
              collapsibleItem.iconsType = 'class';
              collapsibleItem.closeIcon = $scope.closeIconClass;
              collapsibleItem.openIcon = $scope.openIconClass;
            }
            else if ( $scope.closeIconUrl !== undefined || $scope.openIconUrl !== undefined ) {
              collapsibleItem.iconsType = 'url';
              collapsibleItem.closeIcon = $scope.closeIconUrl;
              collapsibleItem.openIcon = $scope.openIconUrl;
            }

            collapsibleItem.iconIsOnLeft = $scope.iconPosition == 'left' ? true: false;
          };

      }])
      .directive('angAccordion', function() {
      return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
          oneAtATime: '@',
          closeIconUrl: '@',
          openIconUrl: '@',
          closeIconClass: '@',
          openIconClass: '@',
          iconPosition: '@' 
        },
        controller: 'angAccordionController',
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
            scope.icon = scope.openIcon;
          else
            scope.icon = scope.closeIcon;

          scope.toggleCollapsibleItem = function () {
            if(!scope.isOpenned) {
              accordionController.openCollapsibleItem(this);
              scope.icon = scope.openIcon;
            }
            else {
              scope.isOpenned = false;
              scope.icon = scope.closeIcon;
            }
          };

          scope.getIconUrl = function ( type ) {
            return type == 'url' ? scope.icon : null;
          };
        },
        template: '<div class="collapsible-item" ng-class="{open: isOpenned}"><div class="title" ng-click="toggleCollapsibleItem()">{{title}}<i ng-show="iconsType == \'class\'" class="{{icon}} icon" ng-class="{iconleft: iconIsOnLeft}"></i><img ng-show="iconsType == \'url\'" class="icon" ng-class="{iconleft: iconIsOnLeft}" ng-src="{{getIconUrl(iconsType)}}" /></div><div class="body"><div class="content" ng-transclude></div></div></div>'
      };
    });
})();
