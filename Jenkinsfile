pipeline {
    agent any
    stages {
        stage('Setup Docker') {
            steps {
          //      sh 'ln -sf /usr/local/bin/docker-host /usr/bin/docker'
            sh 'docker --version'
            sh 'docker-compose --version'
            sh 'whoami'            
            }
        }

        stage('Build') {
            steps {
            sh 'docker build --no-cache -t myfavoriteimages-frontend .'
            }

         }
        
   }
}
