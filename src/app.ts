import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Cutting Edge';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName("./pages/home") },
      { route: 'recipe', name: 'recipe', moduleId: PLATFORM.moduleName("./pages/recipe"), nav: true, title: 'Recipe' },
    ]);
  }
}