'use strict';

const angular = require('angular');
const textZ = angular.module('textZ');

textZ.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('init mapService');
  //setup service
  let service = {};
  //add features to service
  service.mapData = {
    Entry: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Stairs: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Hallway: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Kitchen: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Attic: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Basement: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Bedroom1: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Bedroom2: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Bathroom: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Room1: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Room2: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
    Garage: {
      desc: '',
      items: [],
      north: '',
      northdesc: '',
      south: '',
      southdesc: '',
      east: '',
      eastdesc: '',
      west: '',
      westdesc: '',
    },
  };
  //return service
  return service;
}
