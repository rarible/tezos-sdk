set -e
yarn clean
yarn run build-common
yarn run build-contracts
yarn run build-sdk