import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  profile: Ember.computed.alias('auth.credentials.profile'),

  beforeModel () {
    if(!this.get('profile')) {
      this.get('flashMessages')
        .danger('You must be authenticated to view your dashboard.')
      this.transitionTo('sign-in')
    }
  },
  model () {
    return this.get('store').findRecord('profile', this.get('profile'))
  },

  actions: {
    dashboard () {
      this.transitionTo('profile.edit', this.get('model'))
    }
  }
});
