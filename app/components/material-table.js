import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editMaterial (material) {
      this.sendAction('editMaterial', material)
    },
    deleteMaterial (material) {
      this.sendAction('deleteMaterial', material)
    }
  }
});
