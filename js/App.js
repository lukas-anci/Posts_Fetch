class App {
  constructor(selector, props) {
    this.props = props;

    this.element = document.querySelector(selector);
    this.render();
    this.componentDidMount();
  }

  componentDidMount() {}

  render() {
    this.element.innerHTML = null;

    new PostsScreen(this.element);
  }
}
