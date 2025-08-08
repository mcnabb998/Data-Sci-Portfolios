<link rel="stylesheet" href="../../assets/css/style.css">
[Back to Portfolio](../../index.html)

# Movie Review Sentiment Pipeline 🎬📝

**Building a sentiment analysis pipeline for IMDb movie reviews.** This project classifies reviews as positive or negative by applying NLP preprocessing, vectorization and supervised modeling. We compare classical machine learning against pre‑trained transformer models to demonstrate the trade‑offs between accuracy and runtime.

> **Headline:** Fine‑tuned BERT reaches **89 % accuracy**, outperforming classical models by 6 percentage points.

---

## 🚦 Project Status

| Component | State |
|-----------|-------|
| White paper (PDF) | ✅ in repository |
| 5‑minute summary slides | ✅ in repository |
| Code & notebooks | ✅ completed |
| Sentiment classifier | ✅ completed |

---

## 🔍 Research Questions

1. **Preprocessing** – Which text cleaning and tokenization steps most improve model performance?
2. **Model comparison** – How do logistic regression, SVM, LSTM and BERT compare on IMDb review sentiment?
3. **Interpretability** – Which words drive positive and negative classifications according to model explanations?

---

## 📊 Key Findings

| Insight | Evidence |
|---------|----------|
| Stopword removal and bigram tokenization improve logistic regression accuracy by 4 pts | `notebooks/01_EDA.ipynb` |
| BERT fine‑tuned for 3 epochs achieves 89 % accuracy vs SVM 83 % | `results/model_accuracy.png` |
| Model explanations highlight adjectives (“brilliant”, “terrible”) as key contributors | `results/word_importance.png` |
| Overly long reviews degrade LSTM performance; truncation yields better generalization | `notebooks/02_LSTM.ipynb` |

---

## 🗂️ Repository Layout

```
projects/movie-review-sentiment/
├── data/               # IMDb train/test sets
├── notebooks/          # preprocessing, model training, evaluation
├── results/            # plots and confusion matrices
├── report/             # white paper and slides
└── README.md
```

---

## ⚙️ Quick Start

```bash
 git clone https://github.com/your-org/Data-Sci-Portfolios.git
 cd Data-Sci-Portfolios/projects/movie-review-sentiment

 conda env create -f environment.yml
 conda activate movie-sentiment

 make all
```

`make all` downloads the IMDb dataset, cleans the text, fits baseline and advanced models, and generates evaluation results.

---

## 🛠️ Methodology at a Glance

| Stage | Tool / Model |
|-------|--------------|
| Ingest | IMDb Large Movie Review dataset |
| Preprocess | lowercasing, stopword removal, tokenization |
| Vectorize | TF‑IDF, word embeddings |
| Models | Logistic regression, SVM, LSTM, BERT |
| Evaluate | Accuracy, precision/recall, confusion matrix |

---

## 📈 Reproduce Every Figure

```bash
 jupyter nbconvert --execute --to notebook --inplace notebooks/01_EDA.ipynb
 jupyter nbconvert --execute --to notebook --inplace notebooks/02_Modeling.ipynb
```

---

## 🛡️ Ethical & Fairness Guard‑Rails

* Reviews are publicly available; no PII collected.
* Models should not be used to make decisions about individuals; they measure aggregated sentiment.

---

## 🤝 Contributing

See `CONTRIBUTING.md` to contribute.

---

## 📜 License

MIT License. IMDb review data subject to its own terms.

---

## 📚 References

- Maas A. et al. (2011) *Learning Word Vectors for Sentiment Analysis.*
- Devlin J. et al. (2018) *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.*