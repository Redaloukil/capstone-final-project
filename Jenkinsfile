pipeline {
    agent any
    stages {
        stage('Env setup'){
            steps {
                image 'node:12-alpine' 
                args '-p 3000:3000'
            }
            
        }
        stage('packages Installation'){
            steps {
                sh 'npm install'
            }
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

   