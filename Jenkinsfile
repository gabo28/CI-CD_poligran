pipeline {
	agent any
	stages {
		stage('Build: qa') {
			when {
				allOf {
					branch 'qa'
				}
			}
			steps {
				dir('frontent'){
					sh 'echo "Building qa..."'
				}
			}
		}
	}
}

