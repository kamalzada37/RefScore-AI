# RefScore AI

## Academic Reference Quality Scoring System Using Machine Learning

## Overview

RefScore AI is a machine learning-based system designed to estimate the quality of academic references using publication metadata.

The system analyzes features such as:
- Publication year
- Citation count
- Publisher
- Number of authors
- Document type

It provides a quality score that helps students and researchers select more reliable and relevant academic sources.

---

## Live Demo

👉 https://ref-rank-score.base44.app/

---

## Problem Statement

Selecting high-quality academic references is often time-consuming and subjective.

Many students rely on:
- citation count alone
- outdated sources
- unreliable publishers

This project aims to provide a structured and data-driven approach to evaluating reference quality.

---

## Solution

RefScore AI uses machine learning to predict a quality score based on metadata features.

The system:
- Processes input reference data
- Extracts relevant features
- Applies a trained model
- Outputs a quality score

---

## Features

- Academic reference scoring system
- Metadata-based evaluation
- Simple web interface
- Real-time scoring
- Lightweight and fast

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend / ML
- Python (model training and logic)

---

## Project Structure


RefScore-AI/
│
├── src/ # Frontend source code
├── public/ # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
│
├── Research Paper-3.pdf
├── Kamal-Zada_Mustafa_IT2305_research_project.pdf
│
└── README.md


---

## How It Works

1. User inputs reference metadata  
2. System processes input features  
3. Machine learning model evaluates the reference  
4. A quality score is generated  

---

## Installation

### 1. Clone repository


git clone https://github.com/kamalzada37/RefScore-AI.git

cd RefScore-AI


### 2. Install dependencies


npm install


### 3. Run the application


npm run dev


---


---

## Research Contribution

This project was developed as part of a research study focused on improving academic reference selection using machine learning techniques.

---

## Future Improvements

- Integrate real citation databases (Google Scholar, Scopus)
- Improve model accuracy with larger datasets
- Add NLP-based analysis of abstracts
- Build recommendation system for references

---

## Type

Academic + Applied Machine Learning Project

---

## License

MIT License
