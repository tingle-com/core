A custom module for [tingle.com](https://tingle.com) (Magento 2). 

## How to install
```
bin/magento maintenance:enable
rm -rf composer.lock
composer clear-cache
composer require tingle.com/core:*
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code
bin/magento setup:di:compile
bin/magento cache:enable
rm -rf pub/static/*
bin/magento setup:static-content:deploy -f
bin/magento maintenance:disable
```

## How to upgrade
```
bin/magento maintenance:enable
composer remove tingle.com/core
rm -rf composer.lock
composer clear-cache
composer require tingle.com/core:*
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code
bin/magento setup:di:compile
bin/magento cache:enable
rm -rf pub/static/*
bin/magento setup:static-content:deploy -f
bin/magento maintenance:disable
```