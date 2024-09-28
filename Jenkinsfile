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
                    echo "start pipe"
                    npm run build
                    ls -la
                '''
            }
        }
    }
}
