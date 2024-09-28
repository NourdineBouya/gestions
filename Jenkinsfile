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
                // Print Node and npm versions for debugging
                sh '''
                    node -v
                    npm -v
                '''
                
                // Install dependencies
                sh 'npm install'

                // Build the project
                sh 'npm run build'

                // List the files to confirm the build was successful
                sh 'ls -la'
            }
        }
    }
}
