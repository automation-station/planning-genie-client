import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('material');
  },
  actions: {
    editMaterial (material) {
      console.log('inside route, material is', material);
    }
  }
});
