/**
 * Created by idannaim on 8/03/17.
 */
import {ServerApi} from './serverApi'
import {Modal} from './bp-modal/bp-modal'
export default angular.module('services.module', [])
.service('ServerApi',ServerApi)
.service('Modal',Modal)