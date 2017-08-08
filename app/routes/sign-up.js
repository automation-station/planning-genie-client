import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
        .then(() => this.get('auth').signIn(credentials))
        .then(() => {
          return this.get('store')
            .findRecord('user', this.get('auth.credentials.id'))
        })
        .then((user) => this.get('store').createRecord('profile', { user }))
        .then((profile) => profile.save())
        .then((profile) => this.transitionTo('profile', profile))
        .then(() => {
          this.get('flashMessages')
            .success('Successfully signed-up! You have also been signed-in.');
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.');
        });
    },
  },
});
