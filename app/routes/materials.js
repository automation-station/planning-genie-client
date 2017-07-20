import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('material');
  },
  actions: {
    editMaterial (material) {
      console.log('inside route, material is', material);
    },
    deleteMaterial (material) {
      console.log('inside deleteMaterial action, materials route, material is', material);
    },
  }
});
