module.exports = {
  model: 'SubscriptionCard',
  clearBeforeUpdate: true,
  data: [
    {
      cardName: 'Base Subscription Card',
      price: 100,
      daysDuration: 30,
      description: '',
      type: 'Base',
    },
    {
      cardName: 'Medium Subscription Card',
      price: 150,
      daysDuration: 30,
      description: '',
      type: 'Medium',
    },
    {
      cardName: 'Premium Subscription Card',
      price: 200,
      daysDuration: 30,
      description: '',
      type: 'Premium',
    },
  ],
};
