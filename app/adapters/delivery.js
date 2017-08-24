import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  auth: Ember.inject.service(),
  userId: Ember.computed.alias('auth.credentials.id'),

  findAll (store, type) {
    const api = this.get('host')
    const userId = this.get('userId')
    const url = `${api}/deliveries?user_id=${userId}&&filter=upcoming`
    return this.ajax(url, 'GET')
  }
});
