pipeline {
    agent {
        node {
            label 'built-in'
        }
    }
    stages {
        stage('Fetch SCM: GITHUB') {
            steps {
                echo 'Getting Everything from SCM'
                checkout scm
                sh 'git log -1 --pretty=%B'
            }
        }

        stage('Build') {
            steps {
                echo 'Building....'
                sh '''
                    mkdir -p /esummit/client
                    cp -rvf $WORKSPACE/* /esummit/client
                    cd /esummit/client/
                    sudo su esummit -c \'
                        export NVM_DIR="/esummit/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        npm install
                        export CI=false
                        npm run build
                    \'
                '''
            }
        }
    }
}
