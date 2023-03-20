function f(activate) {
  // Get Optimizely Utilities library
  const utils = window.optimizely.get('utils');

  // Wait/listen for a given selector
  utils.waitForElement('#additional-content').then((elem) => {

    // Create a observer for the entire viewport
    const observer = new IntersectionObserver((entries, observer) => {

      // Iterate over entries
      entries.forEach((entry) => {
        // If entry is visible ...
        if (entry.isIntersecting) {
          // Activate experiment
          activate();

          // Deactivate observer
          observer.disconnect();
        }
      });
    });

    // Only activate the page/experiment once the container is visible
    observer.observe(elem);
  });
}