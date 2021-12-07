class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.showEntryInfo();

    this.view._childInjector(
      this.view.gamewrapper,
      this.view._elementFactory('header', { class: 'header' }),
    );
  }
}
export default Controller;
