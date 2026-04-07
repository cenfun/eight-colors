# Changelog

## 1.3.3
- Fixed `EC.remove()` regex to handle multi-parameter ANSI sequences (e.g. 256-color, RGB)
- Fixed `EC.bold()` close code from `21` to `22` for better terminal compatibility
- Fixed `EC.log()` TypeScript signature to support multiple arguments
- Removed ineffective `export *` from ESM entry

## 1.3.2
- Fixed `FORCE_COLOR` handling so colors are enabled correctly
- Improved README

## 1.3.1
- Added support for env `NO_COLOR`, `FORCE_COLOR` and flags `--no-color`, `--color`

## 1.3.0
- Added `disabled` property, defaults to `false`

## 1.2.1
- Fixed types for CommonJS

## 1.2.0
- Removed useless `logColor`

## 1.1.1
- Fixed types

## 1.1.0
- Added types

## 1.0.3
- Fixed API multiple arguments

## 1.0.2
- Added browser bundle

## 1.0.1
- Added log color API

## 1.0.0
- Initial release