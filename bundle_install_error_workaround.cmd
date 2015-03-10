rem * This is for ssl verification error when running bundle install
set SSL_CERT_FILE=.\cacert.pem
rem then run `bundle install` to install all dependencies
rem * see https://gist.github.com/fnichol/867550
rem * see http://railsapps.github.io/openssl-certificate-verify-failed.html
