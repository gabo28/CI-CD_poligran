pipeline {
	agent any
	stages {
		stage('Build: qa') {
			when {
				allOf {
					branch 'qa'
				}
				steps {
					dir('frontend') {
						sh 'echo "Building app angular in qa"'
					}
				}
			}
		}
	}
}

