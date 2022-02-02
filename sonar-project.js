const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://ec2-3-143-226-139.us-east-2.compute.amazonaws.com:9000',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'b2e6e42a1fee64a58774aa6df5289b7a98033288',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
