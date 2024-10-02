pipeline {
    agent any

    environment {
        // Docker Hub credentials ID stored in Jenkins credentials
        DOCKER_HUB_CREDENTIALS = 'nourdinebouya'
        // Docker Hub repository name (replace with your actual Docker Hub repo)
        DOCKER_HUB_REPO = 'nourdinebouya/testeim'
        // GitHub repository to clone
        GIT_REPO = 'https://github.com/NourdineBouya/gestions.git'
        // Docker image tag (you can customize this, e.g., use the Git commit hash)
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Clone GitHub Repository') {
            steps {
                git branch: 'main', url: "${env.GIT_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image from the Dockerfile in the repository
                    docker.build("${env.DOCKER_HUB_REPO}:${env.IMAGE_TAG}")
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    // Log in to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_HUB_CREDENTIALS}") {
                        // Push the image to Docker Hub
                        def image = docker.image("${DOCKER_HUB_REPO}:${env.IMAGE_TAG}")
                        image.push()
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
