import View from '../view/View';

class AppController {
  constructor(view = new View()) {
    this.view = view;
  }
}

export default AppController;
