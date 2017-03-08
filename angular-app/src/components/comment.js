/**
 * Created by idannaim on 07/03/2017.
 */
const modalWarning = './services/bp-modal/warning-modal.html';

class commentController {
  
}

export const comment = {
  bindings: {
    data: '=',
    delete: '&',
    edit:'&'
  },
  templateUrl: './components/comment.html',
  controller: commentController,
  controllerAs: 'Comment'
};