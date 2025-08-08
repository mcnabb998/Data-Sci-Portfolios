# Movie Review Sentiment Classification

This mini‑project illustrates binary text classification using simple engineered features.  A synthetic dataset of movie review metadata is used to train a logistic regression model that predicts whether a review is positive or negative.  Although the data do not contain actual text, they simulate length, exclamation usage and a pre‑computed sentiment score to demonstrate the workflow.

## Data

The file `data/reviews.csv` comprises 1,000 synthetic observations with four columns:

| Column            | Description                                          |
|-------------------|------------------------------------------------------|
| `review_length`   | Number of characters in the review                   |
| `num_exclam`      | Count of exclamation marks in the review             |
| `sentiment_score` | Continuous sentiment score (e.g., from -1 to +1)    |
| `sentiment`       | Binary label: 1 = positive review, 0 = negative review |

The features were generated randomly and do not correspond to real movie reviews.

## Usage

To train the classifier and see its accuracy and confusion matrix:

```bash
# from the repository root
cd projects/movie-review-sentiment/scripts
python train_model.py
```

The script splits the synthetic data into training and test sets, fits a logistic regression classifier and prints the accuracy and confusion matrix.  You can modify the script to experiment with different algorithms or feature sets.

## Results

An example confusion matrix is saved in `results/confusion_matrix.png` when the dataset is generated.  It visualises the number of true positives, true negatives, false positives and false negatives achieved by the model on a held‑out set.

## Project Structure

```
movie-review-sentiment/
├── data/      # synthetic review metadata (`reviews.csv`)
├── results/   # confusion matrix plot
├── scripts/   # training script
└── README.md  # this overview file
```

## Disclaimer

This project uses artificially generated data with no actual movie review text.  The example is for instructional purposes and should not be interpreted as a real sentiment analysis pipeline.