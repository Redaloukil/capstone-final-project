pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('List files'){
            steps{
                sh 'ls'
            }
        }
        

        stage('Lint') {
            steps {
                sh 'npm run test:lint'
            }
        }

        stage('Build'){
            steps {
                sh 'docker build -t frontend .'
            }
        }
        
        stage('Deploy'){
            steps {
                sh 'docker push redaloukil/frontend:latest'
            }
        }
	}
}

   
