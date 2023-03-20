(() => {
    // Regular expression to match the prefix cookie
    const regex = /(^|\s)prefix=(.*?)(;|$)/;

    // Find the value of the prefix cookie
    if (regex.test(document.cookie)) {
      window.prefix = document.cookie.match(regex)[2];
    } else {
      window.prefix = '';
    }

    // Initialize Optimizely variable
    window.optimizely = [];

    // Add listener
    window.optimizely.push({
      type: 'addListener',
      filter: {type: 'lifecycle', name: 'initialized'},
      handler: () => {
        // Wait until the #prefix element is on the page
        const utils = window.optimizely.get('utils');
        utils.waitForElement('#prefix').then((element) => {
          // Set the value equal to the current prefix
          element.value = prefix;
          // Update the cookie any time a new letter is added
          element.addEventListener('keyup', (event) => {
            window.prefix = event.target.value;
            document.cookie = `prefix=${window.prefix}`;
          });
          // Reload the page once someone finished changing the prefix
          element.addEventListener('change', () => {
            window.location.reload();
          });
        });
      },
    });
  })();