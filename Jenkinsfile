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

   