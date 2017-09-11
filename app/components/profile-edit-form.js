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
      this.set('credentials', {});
    },
  },
});
