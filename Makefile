.PHONY: install phpcs server test help optimize routes migrate watch chmod refresh move echo ansible test docker retry rector

.DEFAULT_GOAL = help
PHP=php
NPM=npm
COMPOSER=composer
PORT?=3000

vendor: composer.json
	composer install

composer.lock: composer.json
	composer update

install: vendor composer.lock ## install vendor dependancies  soe68427@eveav.com

help: ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

phpcs: ## PRS2 Validation
	./vendor/bin/phpcs app/Http/Livewire --extensions=php -s
	./vendor/bin/phpcs app/Providers --extensions=php -s
	./vendor/bin/php-cs-fixer app/Http/Livewire fix --diff
	./vendor/bin/php-cs-fixer app/Providers fix --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Users/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Users/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Users/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Users/Providers --diff

php-cs: ## PRS2 Validation
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Carts --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Orders --diff

php-cs-2: ## PRS2 Validation
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Countries/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Countries/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Countries/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Countries/Providers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Categories/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Categories/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Categories/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Categories/Providers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Attachments/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Attachments/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Attachments/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Attachments/Providers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Providers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Notifications --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Listeners --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Observers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Policies --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Jobs/Notifications --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Providers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Notifications --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Listeners --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Observers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Policies --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Companies/Notifications --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Dashboard/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Dashboard/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Dashboard/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Dashboard/Providers --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Activities/Database --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Activities/Entities --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Activities/Http --diff
	../tools/php-cs-fixer/vendor/bin/php-cs-fixer fix Modules/Activities/Providers --diff

rector: ## PRS2 Validation
	./vendor/bin/rector process

server: ## Load phpMyAdmin server
	 /usr/bin/php7.4 -S localhost:$(PORT) -t ../phpMyAdmin

test: ## phpunit test
	./vendor/bin/pest --debug

pint: ## phpunit test
	 ./vendor/bin/pint app -v

optimize: install ## optimize
		$(PHP) artisan cache:clear & $(PHP) artisan config:clear & $(PHP) artisan route:clear & $(PHP) artisan view:clear

migrate: optimize ## migrate
	$(PHP) artisan migrate:refresh

refresh: migrate ## refresh + php artisan module:seed Admin & php artisan module:seed Support
	php artisan world:init
	## php artisan module:migrate-refresh Users
	## php artisan module:migrate-refresh Companies
	## php artisan module:migrate-refresh Dashboard
	## php artisan db:seed
	## php artisan module:seed Categories
	## php artisan module:seed Roles
	## php artisan module:seed Users
	## php artisan module:seed Menus
	## php artisan module:seed Events
	php artisan module:seed Currencies
	## php artisan world:init
	## php artisan module:seed Dashboard
	php artisan module:seed Events
	## php artisan module:seed Settings
routes: optimize
	$(PHP) artisan laroute:generate

message: optimize ## messages.js add /* eslint-disable */
	$(PHP) artisan lang:js --no-lib resources/js/utils/messages.js & php artisan lang:js public/js/messages.js

queue: optimize ## start jos processing
	$(PHP) artisan queue:work --queue=high,transaction,low,default --tries=3

retry: optimize ## start jos processing
	$(PHP) artisan queue:retry all

restart: optimize ## restart jos processing
	$(PHP) artisan queue:restart

watch:  ## run watch-poll
	$(NPM) run watch-poll

dump:  ## run watch-poll
	$(COMPOSER) dump-auto

chmod:  ## run watch-poll
	sudo chmod 777 -R storage/*

move:  ## move templates
	mv -f storage/templates/Role.php vendor/spatie/laravel-permission/src/Models/ & mv -f storage/templates/PermissionMiddleware.php vendor/spatie/laravel-permission/src/Middlewares/ & mv -f storage/templates/Category.php vendor/rinvex/categories/src/Models/

load:  ## move templates
	mv -f vendor/spatie/laravel-permission/src/Models/Role.php storage/templates/  & mv -f vendor/spatie/laravel-permission/src/Middlewares/PermissionMiddleware.php storage/templates/  & mv -f vendor/rinvex/categories/src/Models/Category.php  storage/templates/

echo:  ## laravel-echo-server start
	laravel-echo-server start

ansible:  ## deploy with ansible before run:  sudo apt-get install -y python https://www.digitalocean.com/community/tutorials/comment-installer-mysql-sur-ubuntu-18-04-fr
	ansible-playbook -i ../Ansible/hosts ../Ansible/playbook.yml

ansible-repo:  ## deploy with ansible
	ansible-playbook -i ../Ansible/hosts ../Ansible/install.yml
docker:  ## docker-compose up -d nginx mysql phpmyadmin laravel-horizon redis php-worker  workspace
	cd laradock
	docker-compose up -d nginx mysql phpmyadmin laravel-horizon redis php-worker  workspace

ide-helper:  ## docker-compose up -d nginx mysql phpmyadmin laravel-horizon redis php-worker  workspace
	php artisan ide-helper:generate
	php artisan ide-helper:models

phpstan:  ## phpstan
	./vendor/bin/phpstan analyse --memory-limit=3g



