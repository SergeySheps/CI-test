pipeline {
    agent { dockerfile true }
    stages {
        stage('build') {
            steps {
                echo "Building from Docker...."
                sh 'npm version'
            }
        }
    }
}
