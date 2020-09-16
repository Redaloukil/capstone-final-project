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
        stage('Build'){
            steps {
                sh 'docker build -t frontend .'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run test:lint'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([[$class: 'kubernetes', credentialsId: 'frontend-deploy', usernameVariable: 'AKIAIZ2QY5O5EWYJJDYA', passwordVariable: '5gMr+XBYXLewHUDdDOzl0lWC3c9Q8llO5zwqou++']]) {
                    AWS("--region=eu-west-1 s3 ls")
                }          
            }
        }

    }
}

   