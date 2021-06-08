class PostsScreen {
  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
    this.state = {
      // cia bus visi postai
      posts: [],
    };
    // Atvaizdavimo reikalai
    this.element = document.createElement("div");
    this.render();
    this.componentDidMount();
  }
  componentDidMount() {
    API.fetchPosts(
      (data) => {
        // gaunam duomenis is post ir perkeliam juos i state
        this.state.posts = data;
        this.render();
      },
      function (errMsg) {
        console.error(errMsg);
      }
    );
    this.element.className = "container py-4";
    this.parent.appendChild(this.element);
  }

  render() {
    this.element.innerHTML = null;
    this.element.innerHTML = '<h1 class="mb-4">Posts</h1>';
    // patikrinam ar turim postu
    // debugger;
    if (this.state.posts.length === 0) {
      // neturim postu
      const headerNoPosts = document.createElement("h2");
      headerNoPosts.className = "text-danger text-center";
      headerNoPosts.textContent = "There are no posts at the moment";
      this.element.appendChild(headerNoPosts);
    } else {
      // turim posts
      const row = document.createElement("div");
      row.className = "row";
      console.log(this.state.posts);
      this.state.posts.forEach((postProps) => {
        const col = document.createElement("div");
        col.className = "col-3";
        new Post(col, postProps);
        // padeti col i row el vidu
        row.appendChild(col);
      });
      this.element.appendChild(row);
    }
  }
}
