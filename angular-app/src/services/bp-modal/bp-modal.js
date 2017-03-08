/**
 * Created by idannaim on 07/03/2017.
 */
import {defaults} from 'lodash';

export class Modal {
  constructor($uibModal) {
    this.$uibModal       = $uibModal;
    this.defaultSettings = {
      animation: false,
      windowTemplateUrl: 'services/bp-modal/default-template.html',
      size: 'sm',
      backdrop: true
    };
  }

  open(template,resolve) {
    return this.$uibModal.open(this.buildSettings(template, resolve)).result;
  }

  buildSettings(template, resolve) {
    const uniqueSettings = {
      templateUrl: template,
      resolve
    };
    return defaults(uniqueSettings, this.defaultSettings)
  }

} 