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
                sudo chown -R 110:114 "/.npm"
                npm run build
                '''
            }
        }
    }
}
