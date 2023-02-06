const userId = 'user123';
const sdkKey = 'KVpGWnzPGKvvQ8yeEWmJZ';
const flagKey = 'buy_button';

// Button component
const Button = ({decision}) => {
  return (
    <a href="#" className={`btn btn-${decision.variationKey}`}>
      Add to cart
    </a>
  );
};

// Product component
const Product = ({decision, title, image, description}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Button decision={decision}/>
      </div>
    </div>
  );
};

// App component
const App = () => {
  // 
  const user = optimizelyClient.createUserContext(userId);
  const decision = user.decide(flagKey);

  return (
    <div className="row">
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
