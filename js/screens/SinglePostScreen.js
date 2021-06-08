class SinglePostScreen {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
    this.state = {
      post: null,
      comments: [],
    };

    this.element = document.createElement("section");
    this.render();
    this.componentDidMount();
  }

  componentDidMount() {
    this.element.className = "container py-4 single-post ";
    this.parent.appendChild(this.element);
  }

  render() {
    this.element.innerHTML = null;
    this.element.innerHTML = '<h1 class="title">Singe Post</h1>';
    this.element.innerHTML += `
        <div class="card">
          <img src="https://placeimg.com/1000/200/tech" class="img-fluid card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Post title</h5>
            <p class="card-text">Post Body</p>
          </div>
        </div>
        <section class="comments">
            <h2>Related comments</h2>
        </section>
      `;
  }
}
