pipeline {
	agent any
	stages {
		stage('Build qa') {
			when {
				branch 'qa'
			}
			steps {
				dir('frontend'){
					sh 'echo "Building qa..."'
				}
			}
		}
		stage('Deploy qa') {
			when {
				branch 'qa'
			}
			steps {
				dir('frontend'){
					sh 'echo "Deploy qa..."'
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

