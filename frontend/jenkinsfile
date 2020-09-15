pipeline {
    agent any
    stages {
        stage('Lint') {
            steps {
                sh 'yarn test:lint'
            }
        }
        stage('Deploy in registry'){
            steps {
                sh 'docker build
                sh 'docker push redaloukil/frontend'
            }
        }
    }
}
