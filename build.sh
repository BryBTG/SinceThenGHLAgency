#!/usr/bin/env bash

set -e

echo "Building SinceThen GHL Agency theme..."

mkdir -p dist

cat \
  src/00-globals.css \
  src/02-tokens.css \
  src/03-sidebar-nav.css \
  src/04-dashboard.css \
  src/05-login.css \
  src/06-community.css \
  src/07-courses.css \
  src/08-responsive.css \
  src/09-fixes.css \
  > dist/main.css

echo "Build complete: dist/main.css"
