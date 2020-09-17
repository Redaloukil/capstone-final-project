pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Lint') {
            steps {
                sh 'npm run test:lint'
            }
        }

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
        
        stage('Push Image To Dockerhub') {
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'myRegistry', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD']]){
                    sh '''
                        docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                        docker push redaloukil/frontend:latest
                    '''
                }
            }
        }

        stage('Kubernetes deploy'){
            steps {
                sh 'echo deploy'
            }
        }
	}
}

   
