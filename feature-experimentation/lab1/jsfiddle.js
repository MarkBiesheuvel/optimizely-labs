const optimizelyClient = window.optimizelySdk.createInstance({
	sdkKey: 'KVpGWnzPGKvvQ8yeEWmJZ',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 5000,
  },
});

optimizelyClient.onReady().then(() => {
	const user = optimizelyClient.createUserContext('user123');
  const decision = user.decide('buy_button');
  document.querySelectorAll('.btn').forEach((element) => {
  	element.classList.remove('btn-primary');
    element.classList.add(`btn-${decision.variationKey}`);
  });
});