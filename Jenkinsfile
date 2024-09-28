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
                // Clean up the workspace before running npm install
                sh 'rm -rf node_modules'

                // Install dependencies with --unsafe-perm flag
                sh 'npm install --unsafe-perm'

                // Build the project
                sh 'npm run build'

                // List the files to confirm the build was successful
                sh 'ls -la'
            }
        }
    }
}
