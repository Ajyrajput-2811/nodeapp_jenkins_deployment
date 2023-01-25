pipeline{

 environment{
    dockerimagename = "ajay6041/nodeapp"
    dockerImage = ""
 }

 agent any

 stages{

    stage('git clone'){
        steps{
            git 'https://github.com/Ajyrajput-2811/nodeapp_jenkin_deployment.git'
        }
    }

    stage('Build image'){
        steps{
            script{
                dockerImage = docker.build dockerimagename
            }
        }
    } 

    stage('Pushing Image'){
         environment{
            registryCredential = 'dockerhublogin'
         }         
        steps{
              script{
                docker.withRegistry('https://registry.hub.docker.com',registryCredential){
                    dockerImage.push("latest")
                }
              }
        }
    }
  
 }



}