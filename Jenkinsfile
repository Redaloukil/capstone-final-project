pipeline {
  agent any
  
  environment {
    CI = 'true'
  }
  
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run test:lint'
        sh 'ls'
      }
    }

    stage('List files') {
      steps {
        sh 'ls'
      }
    }

    stage('Build') {
      steps {
        dockerImage = docker.build("redaloukil/frontend:latest")
      }
    }

    stage('Push Image To Dockerhub') {
      steps {
    docker.withRegistry('https://registry-1.docker.io/v2/', 'pipeline') {
          sh '''
                dockerImage.push()
            '''
        }

      }
    }

    stage('Kubernetes deploy') {
      steps {
        sh 'minikube start'
        sh 'kubectl apply -f ./k8s/deployment.yml'
      }
    }
  }
}