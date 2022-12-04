import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="view-list"></div>
    <div id="add-word-btn"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;