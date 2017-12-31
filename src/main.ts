/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/> 
// we want font-awesome to load as soon as possible to show the fa-spinner
import './assets/style/main.scss'
import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import 'aurelia-materialize-bridge';
import 'materialize-css';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

function waitForMaterialize() {
  return new Promise((resolve, reject) => {
    let iterations = 0;
    const handler = window.setInterval(() => {
      iterations++;
      let ma = (window as any).Materialize;
      if (
        ma.elementOrParentIsFixed &&
        ma.escapeHash &&
        ma.fadeInImage &&
        ma.guid &&
        ma.scrollFire &&
        ma.showStaggeredList &&
        ma.toast &&
        ma.updateTextFields
      ) {
        console.log(`waited ${iterations} iterations for Materialize to finish loading`);
        window.clearInterval(handler);
        resolve();
      }
    }, 1);
  });
}

export async function configure(aurelia: Aurelia) {
  await waitForMaterialize();
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
