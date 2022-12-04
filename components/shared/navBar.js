import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#" id="all-words">
            Vocabulary List <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
              <a class="nav-link" href="#" id="languages"> Languages</a>
            </li>
        <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>

    </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;