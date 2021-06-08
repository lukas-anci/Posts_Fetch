class Post {
  static defaultImgUrl = 'img/img-loading.gif';
  static maxLetter = 15;

  constructor(parent, props) {
    this.parent = parent;
    this.props = props;
    this.state = {
      imgUrl: null,
    };

    this.element = document.createElement('article');

    this.render();
    this.componentDidMount();
  }

  truncateBody() {
    let body = `Honey is a sweet, viscous food substance made by honey bees and some related insects.[1] Bees
    produce honey from the sugary secretions of plants (floral nectar) or from secretions of other
    insects (such as honeydew), by regurgitation, enzymatic activity, and water evaporation. Bees store
    honey in wax structures called honeycombs.[1][2] The variety of honey produced by honey bees (the
    genus Apis) is the best-known, due to its worldwide commercial production and human consumption.[3]
    Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as
    beekeeping or apiculture.Honey gets its sweetness from the monosaccharides fructose and glucose, and
    has about the same relative sweetness as sucrose (table sugar).[4][5] Fifteen millilitres (1 US
    tablespoon) of honey provides around 190 kilojoules (46 kilocalories) of food energy.[6] It has
    attractive chemical properties for baking and a distinctive flavor when used as a sweetener.[4] Most
    microorganisms do not grow in honey, so sealed honey does not spoil, even after thousands of
    years.[7][8] French honey from different floral sources, with visible differences in color and
    texture Honey use and production have a long and varied history as an ancient activity. Several cave
    paintings in Cuevas de la Araña in Spain depict humans foraging for honey at least 8,000 years
    ago.[9][10]`;
    if (body.length > Post.maxLetter) {
      return body.slice(0, 200);
    }

    return 'Booja < ... >';
  }
  componentDidMount() {
    this.element.className = 'card w-100 h-100 mb-4';

    this.parent.appendChild(this.element);

    API.fetchPostImg(
      (url) => {
        this.state.imgUrl = url;
        this.render();
      },
      (err) => console.warn(err),
      this.props.id
    );
  }

  render() {
    this.element.innerHTML = null;
    const { title } = this.props;
    const body = this.truncateBody();

    const url = this.state.imgUrl ?? Post.defaultImgUrl;

    this.element.innerHTML = `
        <img 
          src="${url}" 
          class="card-img-top" 
          alt="${title}"
        >
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${body}</p>
            <a href="#" class="btn btn-primary">Read more</a>
        </div>
        `;
  }
}
