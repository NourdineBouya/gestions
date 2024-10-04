pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('nourdinebouya')
        DOCKER_IMAGE = 'nourdinebouya/gestion:v1'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/NourdineBouya/gestions.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh "echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin"
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push ${DOCKER_IMAGE}'
            }
        }
    }

    post {
        always {
            sh 'docker rmi ${DOCKER_IMAGE} || true'
        }
    }
}
