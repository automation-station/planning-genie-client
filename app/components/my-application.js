import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  profileId: Ember.computed.alias('auth.credentials.profile'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
    myProfile () {
      this.sendAction('myProfile', this.get('profileId'))
    }
  },
});
