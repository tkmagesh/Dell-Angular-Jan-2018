var utilsModule = angular.module('utils', []);

utilsModule.value('defaultTrimLength', 40);

utilsModule.filter('trimText', function(defaultTrimLength){
	
	return function(data, trimLength){
		trimLength = trimLength || defaultTrimLength;
		return data.length < trimLength ? data : data.substr(0, trimLength) + '...';
	}
});
utilsModule.filter('elapsed', () => data => moment(data).fromNow());