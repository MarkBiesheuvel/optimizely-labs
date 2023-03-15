const sdkKey = 'UURF9FECB7wHtC2QSMMkS';
const flagKey = 'mb_save_button';
const eventKey = 'mb_product_interaction';
const attributeKey = 'mb_is_logged_in';

// Function to determine the class name for a given color
const getThemeForColor = (color) => {
  switch(color) {
    case 'black':
      return 'dark';
    case 'yellow':
      return 'warning';
    case 'green':
      return 'success';
    case 'blue':
      return 'primary';
    case 'grey':
      return 'secondary';
    case 'red':
    default:
      return 'danger';
  }
};

// Add-to-cart Button component
const AddToCartButton = ({user, title}) => {
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
const SaveButton = ({user, decisions, title}) => {
  // Get decision for flag key
  const decision = decisions[flagKey];

  if (decision.enabled) {
    // Handle clicks
    const clickHandler = () => {
      user.trackEvent(eventKey);
      alert(`${title} saved to profile`);
    };

    // Extract variables from decision
    const {color, text} = decision.variables;

    // Get Bootstrap color theme based on the color
    const theme = getThemeForColor(color);

    // Display the Save button
    return (
      <button
        className={`btn btn-${theme}`}
        onClick={clickHandler}>
        {text}
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
const App = ({user}) => {
  // Create a React hook
  const [forcedVariationKey, setforcedVariationKey] = React.useState("");

  // Decide which original variation to show to the user
  user.removeForcedDecision({flagKey});
  const originalDecisions = user.decideForKeys([flagKey]);
  
  // Set a forced decision, if applicable
  if (forcedVariationKey) {
    user.setForcedDecision({flagKey}, {variationKey: forcedVariationKey});
  }

  // Decide which (forced?) variation to show to the user
  const decisions = user.decideForKeys([flagKey]);

  return (
    <div className="row">
      <div className="col-12">
        <h1>Welcome user <code>{user.userId}</code></h1>
        <h3>You {user.attributes[attributeKey]?'ARE':'are NOT'} logged in</h3>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">
            Original decision:
          </label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={originalDecisions[flagKey].variationKey} readOnly disabled/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label">
            Forced decision:
          </label>
          <div className="col-sm-8">
            <select className="form-select" onChange={(event) => setforcedVariationKey(event.target.value)}>
              <option value="">Default</option>
              <option value="variation_1">Variation 1</option>
              <option value="variation_2">Variation 2</option>
              <option value="variation_3">Variation 3</option>
            </select>
          </div>
        </div>
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

// App wrapper to keep consistent userId
const AppWrapper = () => {
  // Generate a random user id each time
  const userId = Math.floor(Math.random() * 9000 + 1000).toString();
  // Always have the user logged-in
  const isLoggedIn = true;
  // Create an Optimizely user context for the user
  const user = optimizelyClient.createUserContext(userId, {
    [attributeKey]: isLoggedIn,
  });

  return (
    <App user={user}/>
  )
}

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
  root.render(<AppWrapper/>);
});