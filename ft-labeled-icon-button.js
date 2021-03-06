/*
Copyright 2018 FileThis, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
`<ft-labeled-icon-button>`

This element defines square button that has an icon with a small text label below it.

@demo
*/
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning">

            :host {
                display: block;
                overflow: hidden;
                @apply --ft-labeled-icon-button;
            }

            :host([disabled]) {
                pointer-events: none;
            }
        </style>

        <!-- A button with an icon above a small label -->
        <paper-button raised="" disabled="[[disabled]]" toggles="[[toggles]]" active="{{active}}" style="width:40px; min-width:40px; height: 40px; max-height:40px; background-color: white; margin:3px; ">
            <div class="layout vertical center">

                <!-- Icon -->
                <iron-icon style="--iron-icon-fill-color:var(--ft-labeled-icon-button-icon-fill-color); " icon="[[icon]]" src="[[iconSrc]]">
                </iron-icon>

                <!-- Label -->
                <div style="font-family:Arial; font-size: 8pt; text-transform:none; padding-bottom: 4px">
                    [[label]]
                </div>

            </div>
        </paper-button>
`,

  is: 'ft-labeled-icon-button',

  properties:
  {
      /** Name of icon to use from the standard icon set. */
      icon: {
          type: String
      },

      /** URL of icon to use. */
      iconSrc: {
          type: String
      },

      /** The label to be displayed below the icon */
      label: {
          type: String,
          value: "Check"
      },

      /**
       * When true, the button will appear disabled and will not respond to mouse clicks.
       *
       * Note that you can provide the strings "true" and "false" as attribute values.
       *
       * @type {boolean}
       */
      disabled: {
          type: Object,
          notify: true,
          value: false,
          reflectToAttribute: true  // For sake of the host style above
      },

      /**
       * When true, the button will have toggling behavior.
       *
       * Note that you can provide the strings "true" and "false" as attribute values.
       *
       * @type {boolean}
       */
      toggles: {
          type: Object,
          notify: true,
          value: false
      },

      /**
       * When true, and "toggles" is also true, this property determines whether the button appears pressed, or not.
       *
       * Note that you can provide the strings "true" and "false" as attribute values.
       *
       * @type {boolean}
       */
      active: {
          type: Object,
          notify: true,
          value: false
      }
  }
})
