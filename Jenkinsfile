pipeline {
    agent any
    stages {
        stage('Check Docker') {
            steps {
            sh 'docker --version'
          
            }
        }

        stage('Build') {
            steps {
            sh 'docker build --no-cache -t myfavoriteimages-frontend .'
            }

         }

        stage('Deploy') {
            steps {
            sh 'docker run -d -p 3000:3000 myfavoriteimages-frontend'
            }

         }
        
   }
}
