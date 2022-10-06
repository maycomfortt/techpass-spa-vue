pipeline {
   agent any
   environment {
     
     SERVICE_NAME = "techpass-spa-vue"
     REPOSITORY_TAG="${ORGANIZATION_NAME}-${SERVICE_NAME}:${BUILD_ID}"
      dockerhub=credentials('Docker')
   }

   stages {
    stage('Preparation') {
         steps {
            cleanWs()
            git credentialsId: 'GitHub', url: "https://github.com/${ORGANIZATION_NAME}/${SERVICE_NAME}"
         }
      }


    stage('Build Image') {
         steps {
           sh 'docker image build -t ${REPOSITORY_TAG} .'
           sh 'docker run -d ${REPOSITORY_TAG}'
          
         }
      }

    stage('Push and Tag Image to DockerHub') {
         steps {
                sh 'docker logout'
                sh 'echo $dockerhub_PSW | docker login -u $dockerhub_USR --password-stdin'
                sh 'docker tag jenkins/jenkins:lts-jdk11 $dockerhub_USR/${REPOSITORY_TAG}'
                sh 'docker push $dockerhub_USR/${REPOSITORY_TAG}'
            }
        }

    stage('Deploy to Cluster') {        
          steps {
            withKubeConfig([credentialsId: 'kubernetes']) {
                       sh 'envsubst < ${WORKSPACE}/deploy.yaml | kubectl apply -f -'
            }         
          }
      }
   }
}