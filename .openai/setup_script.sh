#!/usr/bin/env bash
set -euo pipefail
cd /workspace/Data-Sci-Portfolios

if [ -f environment.yml ]; then
    echo "Installing environment from environment.yml"
    conda env update --name base -f environment.yml --prune || conda env create -f environment.yml
else
    echo "No environment.yml found"
fi
