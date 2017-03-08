/**
 * Created by idannaim on 8/12/15.
 */
import {ServiceStorage} from './serviceStorage'
import {ServerApi} from './serverApi'
import {Modal} from './bp-modal/bp-modal'
export default angular.module('services.module', [])
.service('ServiceStorage',ServiceStorage)
.service('ServerApi',ServerApi)
.service('Modal',Modal)