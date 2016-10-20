'use strict';

const angular = require('angular');
const textZ = angular.module('textZ');

textZ.factory('playerService', ['$q', '$log', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');
  //setup service
  let service = {};
  //add service features
  let turn = 0;
  let player = service.player = {
    name: 'Surviver',
    location: 'Entry',
    hp: 20,
    inventory: ['tin of beans', 'stick'],
  };

  let history = service.history = [
    {
      turn,
      desc: 'You have found a house that looks like it\'s still holding together. Maybe you can find some more supplies.',
      location: 'Entry',
      hp: player.hp,
      inventory: player.inventory,
    },
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][direction];
      if (!newLocation){
        history.unshift({
          turn,
          desc: 'You can\'t go that direction from here.',
          location: player.location,
          hp: player.hp,
        });
        console.log('history', history);
        return reject('');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };
  //return service
  return service;
}
