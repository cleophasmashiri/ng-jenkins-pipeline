node {
	agent {
        docker {
            image 'node:20.11' // Replace with your Docker image
            args '-u root' // Optional: run as root if necessary
        }
    }
	environment {
		CHROME_BIN = '/usr/bin/google-chrome-stable'
    }
	def commit_id
  	stage('Preparation') {
		checkout scm
		sh "git rev-parse --short HEAD > .git/commit-id"
		commit_id = readFile('.git/commit-id').trim()			
  	}
	stage('Test') {
		nodejs(nodeJSInstallationName: 'nodejs') {
			sh 'npm install --only-dev'
			sh 'npm test'
		}
	}
	stage('Docker build/push') {
		docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
			def app = docker.build("cleophasmashiri/ng-jenkins-pipeline:${commit_id}", ".").push()
		}
	}
}
