import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  artist: DS.attr(),
  year: DS.attr(),
  description: DS.attr(),
  dimensions: DS.attr(),
  image: DS.attr(),
  price: DS.attr('number')
});
