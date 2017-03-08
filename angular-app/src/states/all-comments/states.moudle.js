/**
 * Created by idannaim on 8/03/17.
 */
import { allCommentsController } from './allCommentsController';
//current controller

function adminConfig($stateProvider) {
  $stateProvider
    .state('allComments', {
      url: '/all-comments',
      templateUrl: "states/all-comments/allComments.html",
      controller: 'allCommentsController',
      controllerAs: 'AllComments'
    })
}

export default angular.module('states.module', [
  'ui.router'
])
  .config(adminConfig)
  .controller('allCommentsController', allCommentsController)