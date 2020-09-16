pipeline {
    agent {
        docker {
            image 'redaloukil/frontend'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('see file system'){
            steps {
                sh 'ls'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run test:lint'
            }
        }
    }
}

   