def testSuccess = false

pipeline {
  agent none

  options {
    disableConcurrentBuilds()
  }

  stages {
    stage('test') {
      environment {
	      NPM_TOKEN = "na"
      }
      agent any
      steps {
        sh 'yarn'
      }
    }
    stage('build and deploy') {
      agent any
      when { tag "v*" }
      steps {
        withCredentials([string(credentialsId: 'npm-token', variable: 'NPM_TOKEN')]) {
          sh 'yarn'
          sh 'yarn clean'
          sh 'yarn build-all'
          sh 'yarn publish-all'
        }
      }
    }
  }
  post {
    always {
      node("") {
        cleanWs()
      }
    }
  }
}
