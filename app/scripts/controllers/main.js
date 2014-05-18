'use strict';

angular.module('gaspindexApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.libraries = [
  		{
  			name: 'lodash',
  			projectKey: 'MCEtDw53HxFge-D-Hzp_fi1RjwUM6HP_Z',
  			description: 'A utility library delivering consistency, customization, performance, & extras.',
  			versions: [],
  			maintainers: [],
  			author: '',
  			repository: 'https://github.com/lodash/lodash.git',
  			homepage: 'http://lodash.com/',
  			license: 'MIT',
  			version: '2.4.1'
  		},
      {
        name: 'query-string',
        projectKey: 'MLeb7TljMvr5756Ikpcctt1RjwUM6HP_Z',
        description: 'Parse and stringify URL query strings',
        versions: [],
        maintainers: [],
        author: 'Sindre Sorhus <sindresorhus@gmail.com> (http://sindresorhus.com)',
        repository: 'https://github.com/lodash/lodash.git',
        homepage: 'https://github.com/sindresorhus/query-string',
        license: 'MIT',
        version: '0.4.0'
      }
  	];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
