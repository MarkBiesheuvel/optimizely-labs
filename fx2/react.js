const sdkKey = 'UURF9FECB7wHtC2QSMMkS';
const flagKey = 'mb_save_button';

// Add-to-cart Button component
const AddToCartButton = () => {
  // TODO: track clicks
  return (
    <a href="#" className="btn btn-success">
      Add to cart
    </a>
  );
};

// Save Button component
const SaveButton = ({decision}) => {
  // TODO: track clicks
	if (decision.enabled) {
    return (
      <a href="#" className="btn btn-danger float-end">
        Save
      </a>
    );
  }
};

// Product component
const Product = ({decision, title, image, description}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <AddToCartButton/>
        <SaveButton decision={decision}/>
      </div>
    </div>
  );
};

// App component
const App = () => {
  // Generate a random user id each time
  const userId = Math.floor(Math.random() * 900 + 100).toString();
  // Create an Optimizely user context for the user
  const user = optimizelyClient.createUserContext(userId);
  // Decide which variation to show to the user
  const decision = user.decide(flagKey);

  return (
    <div className="row">
      <div className="col-12">
        <h1>Welcome user <code>{userId}</code></h1>
      </div>
      <div className="col">
        <Product
          decision={decision}
          title="Camel Marl Woven Scarf"
          image="https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg"
          description="100% Acrylic, Machine washable, Color: Brown, Code: 56P13MCAM"/>
      </div>
      <div className="col">
        <Product
          decision={decision}
          title="SS Aloha Short Sleeve Buttondown"
          image="https://cdn.shopify.com/s/files/1/0923/0916/products/ZHURdWAGef_the_ss_aloha_popover_0_original_grande.jpg"
          description="The Summer Popover offers a one-two punch of personality: its slubby fabric offers great texture while the California-themed aloha print short sleeve style will turn every head on the boardwalk as you skate or surf by."/>
      </div>
    </div>
  );
};

// Initialize Optimizely client
const optimizelyClient = window.optimizelySdk.createInstance({
  sdkKey,
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 5000,
  },
});

// Initialize React root
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

// Only start rendering once the Optimizely client is ready
optimizelyClient.onReady().then(() => {
  root.render(<App/>);
});
