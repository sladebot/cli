# Change Log
All notable changes to this project will be documented in this file.

## Upcoming

## v2.7.0 - 2017-03-25
### Added
- Named db:migrate:undo [#387](https://github.com/sequelize/cli/pull/387)

### Changed
- Fixed promise warning in gulp-helper [#439](https://github.com/sequelize/cli/issues/439)

## v2.6.0 - 2017-03-17
### Added
- Async configuration support [#359](https://github.com/sequelize/cli/pull/359)

### Changed
- Print error stack when reporting seeder errors [#411](https://github.com/sequelize/cli/pull/411)
- Fixed seed:undo:all with `none` storage [#433](https://github.com/sequelize/cli/pull/433)
- Updated dependencies

## v2.5.0 - 2016-12-07
### Added
- Add underscored option to generated model when created with --underscored [#380](https://github.com/sequelize/cli/issues/380)
- Add db:migrate:status [#385](https://github.com/sequelize/cli/issues/385)

### Changed
- Make it possible to use ":" in passwords in a DSN [#334](https://github.com/sequelize/cli/issues/334)
- Catch error for db:migrate:undo[:all] [#353](https://github.com/sequelize/cli/issues/353)
- Example usage of raw sql in migration [#363](https://github.com/sequelize/cli/issues/363)
- Fixed typo: containts -> contains [#381](https://github.com/sequelize/cli/issues/381)
- Updated dependencies

## v2.4.0 - 2016-04-25
### Added
- Log filtering helper

### Changed
- Fixed some promises that were not being returned
- Updated dependencies
- Migration and seed filenames now use UTC date instead of local date
- Output filtering

## v2.3.1 - 2016-01-14
### Changed
- Update lodash to 4.0.0

## v2.3.0 - 2016-01-11
### Changed
- Default use of `seeder` memorizes nothing
- Update umzug to 1.8.0

## v2.2.1 - 2015-11-24
### Fixed
- Filtering of js files in models/index.js

## v2.2.0 - 2015-11-23
### Changed
- Respect `url` property in configuration

## v2.1.1 - 2015-11-19
### Changed
- Respect `dialectOptions` property when instantiating sequelize

## v2.1.0 - 2015-11-01
### Added
- Option for usage of snake case timestamp columns in migrations (e.g. `sequelize model:create --underscored`)

## v2.0.0 - 2015-10-14
### Added
- Read configuration from config.js if available

### Changed
- Replace deprecated fs.existsSync method

## v1.9.2 - 2015-10-14
### Changed
- Make options path process relative

## v1.9.1 - 2015-09-08
### Changed
- Move gulp path resolution to function
- Fix handling of duplicate CLI options
- Add options object to seed template

## v1.9.0 - 2015-09-01
### Added
- Seeding mechanism

## v1.8.3 - 2015-08-28
### Changed
- Cascade package resolution

### Removed
- Duplicate reference to gulp

## v1.8.2 - 2015-08-27
### Changed
- Use node's native module resolution mechanism

## v1.8.1 - 2015-08-27
### Changed
- Filter password from parsed URL

## v1.8.0 - 2015-08-27
### Added
- Support for env variable usage in model/index.js

## v1.7.4 - 2015-07-28
### Changed
- Return exit code 1 when migrations failed

## v1.7.3 - 2015-07-26
### Changed
- Fix check of associate method

## v1.7.2 - 2015-07-16
### Added
- Sequelize v3 to build matrix

### Changed
- Compatibility with Sequelize v3

## v1.7.1 - 2015-07-09
### Added
- Documentation about env variable
- Test for use*env*variable

### Changed
- Fix env variable use for sqlite
- Update available tasks

## v1.7.0 - 2015-04-19
### Added
- More gulp tasks

### Changed
- Generate new migration style
- Adopt new JSHint/JSCS rules
- Update JSHint and JSCS rules

## v1.6.0 - 2015-04-02
### Added
- Possibility to use a different table name for the meta data

## v1.5.0 - 2015-03-24
### Added
- `sequelize db:migrate:undo:all` that rolls back all migrations.

## v1.4.0 - 2015-03-13
### Added
- Possibility to log executed migrations to a JSON file

## v1.3.2 - 2015-03-13
### Changed
- Fix gulp resolution for Windows

## 1.3.1
### Changed
- Update umzug to 1.6.0

## 1.3.0
### Changed
- Add builds for different sequelize versions
- Fix raw queries in sequelize 2.0

## 1.2.0
### Changed
- Add logging of statements and improve messages

## 1.1.0
### Changed
- Update dependencies

## 1.0.8
### Changed
- Fix usage of js2coffee 2.0

## 1.0.7
### Changed
- Fix regexp application for non migration files.

## 1.0.6
### Changed
- Add support for more fine-granular harmony flags

## 1.0.5
### Changed
- Added support for auto-migrate from old schema [#82](https://github.com/sequelize/cli/issues/82)

## 1.0.4
### Changed
- Fix output filtering
- Fix EventEmitter deprecation warnings.

## 1.0.3
### Changed
- Use the url module to parse database URLs

## 1.0.1
### Changed
- Fix global installation of the CLI

## 1.0.0
### Changed
- Big migration refactoring which uses a new schema table and the umzug lib.

## 0.3.3
### Changed
- Fix for default attributes in generated migrations.
- Auto-generate coffee files with js2coffee.

## 0.3.2
### Changed
- Add default attributes to generated migrations.

## 0.3.1
### Changed
- Fix alignment of comment in generated model file
- Fix global installation

## 0.3.0
### Changed
- Add Node.JS version to the teaser
- Add dialect and the respective version to the teaser

## 0.2.6
### Changed
- Do not load lodash in `models/index.js`.

## 0.2.5
### Changed
- Prefer `--env` over the environment variable `NODE_ENV`.
- Search by default for a file called `.sequelizerc` and treat it as `--options-path`.

## 0.2.4
### Changed
- Fix unqualified sequelize instantiation which enforced the mysql module.

## 0.2.3
### Changed
- Fix `--migrations-path` for relative paths.

## 0.2.2
### Changed
- Fix for MS Windows.

## 0.2.1
### Changed
- Fix `_.includes`.

## 0.2.0
### Changed
- `sequelize model:create` creates a model and its respective migration file.

## 0.1.1
### Changed
- Fix illegal character.

## 0.1.0
### Changed
- `sequelize init` now creates a `models` folder and a `models/index.js` file. [#11](https://github.com/sequelize/cli/pull/11)

## 0.0.4
### Changed
- Fix --config flag. [#4](https://github.com/sequelize/cli/pull/4)
- Fix custom logging option. [#3](https://github.com/sequelize/cli/pull/3)

## 0.0.3
### Changed
- Fix conflict within projects that are already shipping gulp. [#2](https://github.com/sequelize/cli/pull/2)
- Add harmony support. [#6](https://github.com/sequelize/cli/pull/6)

## 0.0.2
### Changed
- Added the binary to the package.json

## 0.0.1
### Changed
- First working version
