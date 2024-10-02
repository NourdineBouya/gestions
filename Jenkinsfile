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
<<<<<<< HEAD
=======
                chown -R $(id -u):$(id -g) "/.npm"
>>>>>>> 4ba3943f9e25c198903668047f558568d21d3c50
                npm run build
                '''
            }
        }
    }
}
