pipeline {
   agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
  }
    stages {
        stage('build') {
             steps {
                sh '''
                npm ci
                npm run build
                '''
            }
            }

           
        }
  
}
