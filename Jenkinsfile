pipeline {
    agent any

    stages {
        stage('build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                npm ci
                chown -R $(id -u):$(id -g) "/.npm"
                npm run build
                '''
            }
        }
    }
}
