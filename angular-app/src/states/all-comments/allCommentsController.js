/**
 * Created by idannaim on 8/11/15.
 */
const modalWarning = './services/bp-modal/warning-modal.html';
const editModal    = './services/bp-modal/edit-modal.html';

export class allCommentsController {
  // @ngInject //
  constructor(ServerApi, Modal) {
    this.ServerApi = ServerApi;
    this.Modal     = Modal;
    this._init();
  }

  deleteComment(comment) {
    this.Modal.open(modalWarning)
      .then(()=> {
        this.ServerApi.delete(comment.id)
          .then(()=>this._init());
      })
  }

  editComment(comment) {
    this.Modal.open(editModal)
      .then((text)=> {
        comment.comment = text;
        this.ServerApi.put(comment.id, comment)
          .then(()=>this._init());
      });
  }

  _init() {
    this.ServerApi.get()
      .then((comments) => {
        this.comments = comments;
      });

  }
}