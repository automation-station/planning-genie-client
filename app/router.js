import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('deliveries');
  this.route('materials');
  this.route('profile', { path: '/profiles/:profile_id' }, function() {
    this.route('edit');
  });
  this.route('profiles');
  this.route('dashboard');
});

export default Router;
