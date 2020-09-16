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

        stage('Deploy') {
            steps {
                sh 'aws s3 ls'
            }
        }

    }
}

   