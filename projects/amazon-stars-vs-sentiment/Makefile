data:
	python data/get_data.py --category Clothing_Shoes_and_Jewelry --rows 1000000

eda:
	jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb

model:
	jupyter nbconvert --execute notebooks/02_Modeling.ipynb

figs:
	python notebooks/export_figures.py

all: data eda

.PHONY: data eda model figs all
