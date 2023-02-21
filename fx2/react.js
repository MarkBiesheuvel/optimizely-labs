const sdkKey = 'UURF9FECB7wHtC2QSMMkS';
const flagKey = 'mb_save_button';
const eventKey = 'mb_product_interaction'

// Add-to-cart Button component
const AddToCartButton = ({title, user}) => {
  // Handle clicks
  const clickHandler = () => {
    user.trackEvent(eventKey);
    alert(`${title} added to cart`);
  };

  return (
    <button className="btn btn-success" onClick={clickHandler}>
      Add to cart
    </button>
  );
};

// Save Button component
const SaveButton = ({title, decisions}) => {
  // Get decision for flag key
  const decision = decisions[flagKey];

  if (decision.enabled) {
    // Handle clicks
    const clickHandler = () => {
      user.trackEvent(eventKey);
      alert(`${title} saved to profile`);
    };

    // Display the Save button
    return (
      <button className="btn btn-danger" onClick={clickHandler}>
        Save
      </button>
    );
  } else {
    // Don't display anything; an empty React Fragment
    return (
      <React.Fragment/>
    )
  }
};

// Product component
const Product = ({user, decisions, title, image, description}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <AddToCartButton title={title} user={user} decisions={decisions}/>
        &nbsp;
        <SaveButton title={title} user={user} decisions={decisions}/>
      </div>
    </div>
  );
};

// App component
const App = () => {
  // Generate a random user id each time
  const userId = Math.floor(Math.random() * 9000 + 1000).toString();
  // Create an Optimizely user context for the user
  const user = optimizelyClient.createUserContext(userId);
  // Decide which variation to show to the user
  const decisions = user.decideForKeys([flagKey]);

  return (
    <div className="row">
      <div className="col-12">
        <h1>Welcome user <code>{userId}</code></h1>
      </div>
      <div className="col">
        <Product
          user={user}
          decisions={decisions}
          title="Camel Marl Woven Scarf"
          image="https://cdn.shopify.com/s/files/1/0923/0916/products/TM56P13MCAM_Zoom_F_1_grande.jpg"
          description="100% Acrylic, Machine washable, Color: Brown, Code: 56P13MCAM"/>
      </div>
      <div className="col">
        <Product
          user={user}
          decisions={decisions}
          title="SS Aloha Short Sleeve Buttondown"
          image="https://cdn.shopify.com/s/files/1/0923/0916/products/ZHURdWAGef_the_ss_aloha_popover_0_original_grande.jpg"
          description="The Summer Popover offers a one-two punch of personality: its slubby fabric offers great texture while the California-themed aloha print short sleeve style will turn every head on the boardwalk as you skate or surf by."/>
      </div>
    </div>
  );
};

// Initialize Optimizely client
window.optimizelySdk.setLogLevel('error');
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
