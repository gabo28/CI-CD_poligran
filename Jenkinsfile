pipeline {
	agent any
	stages {
		stage('Build: qa') {
			when {
				branch 'qa'
			}
			steps {
				dir('frontent'){
					sh 'echo "Building qa..."'
				}
			}
		}
	}
}

