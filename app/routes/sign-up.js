import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  profile: Ember.computed.alias('auth.credentials.profile'),

  actions: {
    signUp (credentials) {
      if (credentials.password === credentials.passwordConfirmation) {
        this.get('auth').signUp(credentials)
          .then(() => this.get('auth').signIn(credentials))
          .then(() => {
            return this.get('store')
              .findRecord('user', this.get('auth.credentials.id'))
          })
          .then((user) => this.get('store').createRecord('profile', { user }))
          .then((profile) => profile.save())
          .then((profile) => this.set('auth.credentials.profile', +profile.get('id')))
          .then(() => this.transitionTo('dashboard'))
          .then(() => {
            this.get('flashMessages')
              .success('Successfully signed-up! You have also been signed-in.');
          })
          .catch(() => {
            this.get('flashMessages').danger('That email is already ' +
            'registered or another problem occured. Please try again.')
          })
      } else {
        this.get('flashMessages').danger('Passwords must match!');
        // this.get('flashMessages').clear();
      }
    },
  },
});
