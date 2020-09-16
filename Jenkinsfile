pipeline {
  agent any
  stages {
    stage('Lint') {
      steps {
        sh 'echo hello world'
        sh 'cd ./frontend'
        sh 'yarn test:lint'
      }
    }

    stage('Push Image') {
      steps {
        script {
          withDockerRegistry(registry: [credentialsId: registryCredential]) {
            dockerImage.push('latest')
          }
        }

      }
    }

    stage('Aws kubernetes deploy') {
      steps {
        sh 'echo hello world'
      }
    }

  }
}