import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //one route dynamic handler called item
  this.route('item', {path: '/item/:item_id'});
  this.route('basket');
  this.route('mycart');
});

export default Router;
