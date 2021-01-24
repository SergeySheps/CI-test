module.exports = {
  model: 'Client',
  clearBeforeUpdate: true,
  data: [
    {
      email: 'client@localhost.com',
      firstName: 'clientName',
      lastName: 'clientLastName',
      gender: 'Male',
      phoneNumber: '+375(29)8876549',
      visitStatus: 'Active',
    },
    {
      email: 'client2@localhost.com',
      firstName: 'clientName',
      lastName: 'clientLastName',
      gender: 'Female',
      phoneNumber: '+375(33)8676329',
      visitStatus: 'Not Active',
    },
  ],
};
