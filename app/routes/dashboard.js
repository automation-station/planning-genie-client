import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
<<<<<<< HEAD
  model() {
    return this.get('store').findRecord('profile', this.get('auth.credentials.profile'))
=======
  profile: Ember.computed.alias('auth.credentials.profile'),

  model () {
    // this fails if someone just goes to `/dashboard` without logging in
    // first. Need to figure out how to not load this route if not signed in.
    // Application route has an error() handler, but it only transitions to
    // log-in if we get a 401 unauthorized error.
    // Assertion Failed: `id` passed to `findRecord()` has to be non-empty string or number
    return this.get('store').findRecord('profile', this.get('profile'))
  },

  actions: {
    dashboard () {
      this.transitionTo('profile.edit', this.get('model'))
    }
>>>>>>> Adds dashboard route and updates nav-bar
  }
});
