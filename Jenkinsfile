pipeline {
	agent {
        docker { image 'node:14-alpine' }
    }
	stages {
		stage('Build qa') {
			when {
				branch 'dev'
			}
			steps {
				dir('frontend'){
						sh 'node --version'
				}
			}
		}
		stage('build pro') {
			when {
				branch 'main'
			}
			steps {
				dir('frontend'){
					sh 'echo "build main..."'
				}
			} 
		}
		stage('Deploy prod') {
			when {
				branch 'main'
			}
			steps {
				dir('frontend'){
					sh 'echo "Deploy prod..."'
				}
			}
		}
	}
}

