pipeline {
    environment {
        CI = 'true'
    }
    stages {
        stage('Build Image'){
            docker build -t frontend .
        }
        stage('Lint') {
            steps {
                sh 'docker'
            }
        }

        stage('Deploy') {
            steps {
                sh ''
            }
        }

    }
}

   