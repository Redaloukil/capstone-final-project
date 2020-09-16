pipeline {
    agent {
        docker {
            image 'node:12-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('packages Installation'){
            steps {
                sh 'cd ./frontend'
                sh 'npm install'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run test:lint'
            }
        }
    }
}

   