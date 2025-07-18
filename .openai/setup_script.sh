#!/usr/bin/env bash
###############################################################################
# setup_env.sh — reproducible micromamba + Python 3.10 environment for Codex
# -----------------------------------------------------------------------------
# • Installs micromamba privately under ~/.local
# • Creates / updates an env named “dsp” with the usual ML / DS stack
# • Registers a Jupyter kernel
# • Idempotent: run again any time to add / upgrade packages
###############################################################################
set -euo pipefail

# ----------------------------- tweakables -----------------------------------#
ENV_NAME="dsp"                    # conda‑style env name
PY_VERSION="3.10"                 # choose any patch of 3.10
BIN_DIR="${HOME}/.local/micromamba"   # where the static binary lives
MAMBA_BIN="${BIN_DIR}/micromamba"
REQS_DEV_FILE="requirements-dev.txt"  # optional extras if present
# --------------------------------------------------------------------------- #

###############################################################################
# 0) make sure the root prefix var exists *before* we enable the shell hook   #
###############################################################################
# micromamba defaults to ~/micromamba if nothing is set, but the hook code
# explodes under `set -u` unless the variable is defined. Pick whatever path
# you prefer for “where all envs live”.
export MAMBA_ROOT_PREFIX="${MAMBA_ROOT_PREFIX:-$HOME/.local/mamba-root}"
mkdir -p "${MAMBA_ROOT_PREFIX}"

###############################################################################
# 1) download micromamba if we haven’t already                                #
###############################################################################
if [[ ! -x "$MAMBA_BIN" ]]; then
  echo "🔧  Installing micromamba → $MAMBA_BIN"
  mkdir -p "$BIN_DIR"
  curl -Ls https://micro.mamba.pm/api/micromamba/linux-64/latest \
    | tar -xj -C "$BIN_DIR" --strip-components=1 bin/micromamba
fi
export PATH="$BIN_DIR:$PATH"

###############################################################################
# 2) (re)create the env                                                       #
###############################################################################
echo "🐍  Creating / updating env \"$ENV_NAME\" (Python $PY_VERSION)…"
micromamba create -y -n "$ENV_NAME" \
  python="$PY_VERSION" \
  jupyterlab ipykernel ipywidgets \
  pandas numpy scipy scikit-learn matplotlib seaborn plotly shap \
  transformers datasets sentencepiece accelerate tqdm statsmodels \
  xgboost lightgbm jupytext nbstripout black isort pip

###############################################################################
# 3) activate the env for the remainder of the script                         #
###############################################################################
# shell hook **after** $MAMBA_ROOT_PREFIX is set, or nounset will yell.
eval "$(micromamba shell hook --shell bash)"
micromamba activate "$ENV_NAME"

###############################################################################
# 4) PyPI‑only bits                                                           #
###############################################################################
echo "📦  Installing pip‑only packages…"
pip install --no-cache-dir sentence_transformers

###############################################################################
# 5) optional dev requirements                                                #
###############################################################################
if [[ -f "$REQS_DEV_FILE" ]]; then
  echo "🛠   Installing dev requirements from $REQS_DEV_FILE…"
  pip install --no-cache-dir -r "$REQS_DEV_FILE"
fi

###############################################################################
# 6) Jupyter kernel                                                           #
###############################################################################
python -m ipykernel install --user --name "$ENV_NAME" \
  --display-name "Python ($ENV_NAME)" --upgrade

###############################################################################
# 7) Make the repo “safe” for Git inside CI / containers                      #
###############################################################################
git config --global --add safe.directory "$(pwd)"

echo -e "\n✅  Environment \"$ENV_NAME\" is ready!\n"
echo "   • Activate anytime with:  micromamba activate $ENV_NAME"
echo "   • Run again to upgrade / add packages as needed."
