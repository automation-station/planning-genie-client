import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  actions: {
    toggle () {
      this.sendAction('toggle')
    }
  }
});
