import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveProfile (profile) {
      profile.save()
        .then((profile) => this.transitionTo('profile', profile))
        .catch(console.error)
    },
    cancel () {
      this.transitionTo('dashboard')
    }
  }
});
