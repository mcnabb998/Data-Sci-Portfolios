# Disease Diagnosis from Symptoms

This demo predicts disease categories from symptom measurements using a gradient boosting classifier.  A synthetic multi‑class dataset is created via scikit‑learn’s `make_classification` function to approximate medical diagnostic data.  The goal is to illustrate how supervised learning can be applied to multi‑class classification problems.

## Data

The file `data/symptoms.csv` contains 1,000 samples with 20 numerical symptom features (`symptom_0` … `symptom_19`) and a categorical target label `disease` with 3 possible values.  The labels are integers representing different disease categories.

## Usage

To train the classifier and view accuracy:

```bash
# from the repository root
cd projects/disease-diagnosis-symptoms/scripts
python train_model.py
```

The script splits the data into training and test sets, fits a `GradientBoostingClassifier` and prints the accuracy and confusion matrix.  You can modify the script to test other models such as random forests, support vector machines or neural networks.

## Results

When the dataset is generated, a confusion matrix plot is saved in `results/confusion_matrix.png` to visualise classification performance across the three classes.

## Project Structure

```
disease-diagnosis-symptoms/
├── data/      # synthetic symptoms and labels (`symptoms.csv`)
├── results/   # confusion matrix plot
├── scripts/   # training script
└── README.md  # this overview
```

## Disclaimer

This project uses artificial data and does not represent real patient records or medical advice.  It is intended solely for demonstrating multi‑class classification workflows.