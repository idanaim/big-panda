/**
 * Created by idannaim on 07/03/2017.
 */
const baseUrl = 'http://localhost:3000/comments';

export class ServerApi {
  // @ngInject //
  constructor($http) {
    this.$http = $http;
  }

  get() {
    return this.$http.get(baseUrl);
  }

  post(body) {
    return this.$http.post(baseUrl, body);
  }

  put(id, body) {
    return this.$http.put(`${baseUrl}/${id}`, body);
  }

  delete(id) {
    return this.$http.delete(`${baseUrl}/${id}`);
  }

}