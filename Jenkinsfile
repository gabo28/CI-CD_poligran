pipeline {
	agent any
	stages {
		stage('Build: qa') {
			when {
				allOf {
					branch 'qa'
				}
				steps {
					echo {
						'build qa'
					}
				}
			}
		}
	}
}

