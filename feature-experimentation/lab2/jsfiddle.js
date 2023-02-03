const Product = ({title, image, description}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Add to cart</a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="row">
      <div className="col-6">
        <Product
          title="Camel Marl Woven Scarf"
          image="https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg"
          description="100% Acrylic, Machine washable, Color: Brown, Code: 56P13MCAM"/>
      </div>
      <div className="col-6">
        <Product
          title="SS Aloha Short Sleeve Buttondown"
          image="https://cdn.shopify.com/s/files/1/0923/0916/products/ZHURdWAGef_the_ss_aloha_popover_0_original_grande.jpg"
          description="The Summer Popover offers a one-two punch of personality: its slubby fabric offers great texture while the California-themed aloha print short sleeve style will turn every head on the boardwalk as you skate or surf by."/>
      </div>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
