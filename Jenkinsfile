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

        stage('Deploy') {
            steps {
                withCredentials([[$class: 'kubernetes', credentialsId: 'frontend-deploy']) {
                    AWS("eksctl create cluster — name cluster — version 1.16 — nodegroup-name standard-workers — node-type t2.small — nodes 3 — nodes-min 1 — nodes-max 4 — node-ami auto — region us-west-2")
                }          
            }
        }

    }
}

   