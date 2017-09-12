import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('profile'));
    },

    reset () {
      this.sendAction('cancel');
      // reset the profile back to what it was before
      // this.set('profile', this.get('profile'));
    },
  },
});
