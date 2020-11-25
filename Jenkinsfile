pipeline {
	agent any
	stages {
		stage('Build: qa') {
			dir('frontend') {
				when {
					allOf {
						branch 'qa'
					}
					steps {
						echo 'Building app angular in qa'
					}
				}
			}
		}
	}
}

