pipeline {
    agent any
    stages {
        stage('Env setup'){
            image 'node:12-alpine' 
            args '-p 3000:3000'
        }
        stage('packages Installation'){
            sh 'npm install'
        }
        stage('Lint') {
            steps {
                sh 'npm run test:lint'
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

    stage('Aws kubernetes deploy') {
      steps {
        sh 'echo hello world'
      }
    }

  }
}