# Resume Prompts — one per fresh conversation

Open a new Claude Code conversation in this folder for each row, paste the **Prompt** column verbatim, and let it run. The memory file auto-loads and tells me exactly what to do.

After each session, I'll update the memory's status table. If a session runs out of output budget mid-batch, just say *"continue from where you stopped"* in the same conversation, OR start a fresh one and say *"check memory and continue Module N"*.

---

## Module 2 — Statistics & Machine Learning (8 sessions)

| # | Section | Topics | Prompt |
|---|---|---|---|
| 1 | Statistics Foundations (part A) | m2-t1 → m2-t5 | `continue Module 2: expand topics m2-t1 through m2-t5 (probability, Bayes, sampling, descriptive stats, distributions) with the spoon-fed teacher format from memory. update memory status when done.` |
| 2 | Statistics Foundations (part B) | m2-t6 → m2-t10 | `continue Module 2: expand topics m2-t6 through m2-t10 (hypothesis testing, CI, z/t, Type I/II errors, chi-square/ANOVA). update memory when done.` |
| 3 | Linear Algebra | m2-t11 → m2-t16 | `continue Module 2: expand topics m2-t11 through m2-t16 (vectors, matrices, dot product, det/inv, eigenvalues, PCA). update memory when done.` |
| 4 | EDA | m2-t17 → m2-t22 | `continue Module 2: expand topics m2-t17 through m2-t22 (wrangling, missing values, outliers, feature engineering, scaling, correlation). update memory when done.` |
| 5 | Supervised (part A) | m2-t23 → m2-t26 | `continue Module 2: expand topics m2-t23 through m2-t26 (Linear Regression, Logistic Regression, KNN, Decision Trees). update memory when done.` |
| 6 | Supervised (part B) | m2-t27 → m2-t30 | `continue Module 2: expand topics m2-t27 through m2-t30 (Random Forest, Naive Bayes, SVM, XGBoost). update memory when done.` |
| 7 | Unsupervised | m2-t31 → m2-t34 | `continue Module 2: expand topics m2-t31 through m2-t34 (K-Means, Hierarchical, DBSCAN, PCA dim reduction). update memory when done.` |
| 8 | Model Evaluation & Tuning | m2-t35 → m2-t40 | `continue Module 2: expand topics m2-t35 through m2-t40 (train/val/test, confusion matrix, ROC-AUC, k-fold CV, Grid/Randomized Search, bias-variance + L1/L2). update memory and mark Module 2 complete.` |

---

## Module 3 — Generative AI & Agentic AI (11 sessions)

| # | Section | Topics | Prompt |
|---|---|---|---|
| 9 | GenAI Fundamentals | m3-t1 → m3-t5 | `continue Module 3: expand topics m3-t1 through m3-t5 (generative models, discriminative vs generative, prompt basics, few/zero/CoT, prompt chaining). update memory when done.` |
| 10 | Transformers & LLMs (part A) | m3-t6 → m3-t9 | `continue Module 3: expand topics m3-t6 through m3-t9 (attention paper intuition, self-attention/multi-head, encoder vs decoder, BERT). update memory when done.` |
| 11 | Transformers & LLMs (part B) | m3-t10 → m3-t12 | `continue Module 3: expand topics m3-t10 through m3-t12 (GPT family, LLaMA, fine-tune vs prompt-tune vs LoRA). update memory when done.` |
| 12 | OpenAI API | m3-t13 → m3-t17 | `continue Module 3: expand topics m3-t13 through m3-t17 (auth, chat completions, roles, rate limits, error handling). update memory when done.` |
| 13 | LangChain | m3-t18 → m3-t23 | `continue Module 3: expand topics m3-t18 through m3-t23 (LangChain core, sequential, memory, router, prompt templates, multi-step + tools). update memory when done.` |
| 14 | Hugging Face | m3-t24 → m3-t27 | `continue Module 3: expand topics m3-t24 through m3-t27 (Model Hub, pipelines, loading models locally, datasets library). update memory when done.` |
| 15 | GANs | m3-t28 → m3-t31 | `continue Module 3: expand topics m3-t28 through m3-t31 (G vs D, DCGAN, StyleGAN, CycleGAN). update memory when done.` |
| 16 | VAEs | m3-t32 → m3-t35 | `continue Module 3: expand topics m3-t32 through m3-t35 (encoder-decoder + latent space, KL/ELBO, anomaly detection, compression). update memory when done.` |
| 17 | RAG & Vector Stores | m3-t36 → m3-t39 | `continue Module 3: expand topics m3-t36 through m3-t39 (why RAG, embeddings + vector DBs, chunking, FAQ assistant). update memory when done.` |
| 18 | Agentic AI | m3-t40 → m3-t44 | `continue Module 3: expand topics m3-t40 through m3-t44 (agent loop, AutoGPT, BabyAGI, CrewAI, tool use). update memory when done.` |
| 19 | Copilots & Ethics | m3-t45 → m3-t49 | `continue Module 3: expand topics m3-t45 through m3-t49 (GitHub Copilot, Tabnine/CodeWhisperer, bias, privacy/IP/hallucination, responsible AI). update memory and mark Module 3 complete.` |

---

## Module 4 — Data Visualization & Analysis (8 sessions)

| # | Section | Topics | Prompt |
|---|---|---|---|
| 20 | SQL Fundamentals (part A) | m4-t1 → m4-t4 | `continue Module 4: expand topics m4-t1 through m4-t4 (SELECT/WHERE/ORDER/LIMIT, JOINs, GROUP BY, HAVING). update memory when done.` |
| 21 | SQL Fundamentals (part B) | m4-t5 → m4-t7 | `continue Module 4: expand topics m4-t5 through m4-t7 (subqueries/CTEs, window functions, partitioning + indexing). update memory when done.` |
| 22 | Advanced SQL | m4-t8 → m4-t12 | `continue Module 4: expand topics m4-t8 through m4-t12 (ranking/analytic, stored procedures, triggers, CASE/IF, recursive CTEs). update memory when done.` |
| 23 | MongoDB | m4-t13 → m4-t18 | `continue Module 4: expand topics m4-t13 through m4-t18 (documents/BSON, CRUD, aggregation, schema design, indexes, JSON). update memory when done.` |
| 24 | Power BI | m4-t19 → m4-t24 | `continue Module 4: expand topics m4-t19 through m4-t24 (Desktop tour, modeling, DAX, dashboards, slicers/drill-through, time intelligence). update memory when done.` |
| 25 | Big Data | m4-t25 → m4-t30 | `continue Module 4: expand topics m4-t25 through m4-t30 (Hadoop, HDFS, MapReduce, Spark, Spark RDDs, Spark SQL/DataFrames). update memory when done.` |
| 26 | Time Series | m4-t31 → m4-t35 | `continue Module 4: expand topics m4-t31 through m4-t35 (stationarity/differencing, moving averages, ARIMA, seasonal decomposition, multivariate TS). update memory when done.` |
| 27 | Tableau | m4-t36 → m4-t40 | `continue Module 4: expand topics m4-t36 through m4-t40 (connect/shape, dashboards, calculated fields/parameters, polygon/symbol maps, storytelling). update memory and mark Module 4 complete.` |

---

## Module 5 — AI Tools & Deployment (9 sessions)

| # | Section | Topics | Prompt |
|---|---|---|---|
| 28 | DL TF/Keras (part A) | m5-t1 → m5-t4 | `continue Module 5: expand topics m5-t1 through m5-t4 (NN basics, forward/backprop, optimizers, CNN). update memory when done.` |
| 29 | DL TF/Keras (part B) | m5-t5 → m5-t7 | `continue Module 5: expand topics m5-t5 through m5-t7 (RNN, LSTM/GRU, dropout/batch norm). update memory when done.` |
| 30 | PyTorch | m5-t8 → m5-t13 | `continue Module 5: expand topics m5-t8 through m5-t13 (tensors+autograd, lin/log regression, CNN, RNN/LSTM, GPU/CUDA, save/load). update memory when done.` |
| 31 | Keras APIs | m5-t14 → m5-t18 | `continue Module 5: expand topics m5-t14 through m5-t18 (Sequential, Functional, callbacks, BatchNorm, transfer learning). update memory when done.` |
| 32 | NLP (part A) | m5-t19 → m5-t22 | `continue Module 5: expand topics m5-t19 through m5-t22 (tokenize/lemmatize, stemming/stopwords, BoW/TF-IDF, KNN/K-Means for retrieval). update memory when done.` |
| 33 | NLP (part B) | m5-t23 → m5-t26 | `continue Module 5: expand topics m5-t23 through m5-t26 (cosine similarity, sentiment analysis, BERT classification, GPT-3 generation). update memory when done.` |
| 34 | Computer Vision | m5-t27 → m5-t32 | `continue Module 5: expand topics m5-t27 through m5-t32 (OpenCV, filtering/threshold, Canny, CNN classify, YOLO, U-Net segmentation). update memory when done.` |
| 35 | Reinforcement Learning | m5-t33 → m5-t38 | `continue Module 5: expand topics m5-t33 through m5-t38 (OpenAI Gym, MDPs, Monte Carlo, Q-Learning, DQN, Policy Gradient). update memory when done.` |
| 36 | Deployment & MLOps | m5-t39 → m5-t44 | `continue Module 5: expand topics m5-t39 through m5-t44 (Flask API, Docker, SageMaker, Azure ML, CI/CD for ML, monitoring/drift). update memory and mark Module 5 complete.` |

---

## Module 6 — Data Structures & Algorithms (8 sessions)

| # | Section | Topics | Prompt |
|---|---|---|---|
| 37 | Linear DS (part A) | m6-t1 → m6-t4 | `continue Module 6: expand topics m6-t1 through m6-t4 (arrays, singly/doubly/circular linked lists). update memory when done.` |
| 38 | Linear DS (part B) | m6-t5 → m6-t7 | `continue Module 6: expand topics m6-t5 through m6-t7 (stacks, queues+deques, priority queues/heaps). update memory when done.` |
| 39 | Trees | m6-t8 → m6-t13 | `continue Module 6: expand topics m6-t8 through m6-t13 (binary trees, BST, AVL, B-trees, traversals, BFS/DFS on trees). update memory when done.` |
| 40 | Graphs | m6-t14 → m6-t19 | `continue Module 6: expand topics m6-t14 through m6-t19 (adjacency matrix/list, BFS, DFS, Dijkstra, Bellman-Ford, topological sort). update memory when done.` |
| 41 | Sort/Search (part A) | m6-t20 → m6-t23 | `continue Module 6: expand topics m6-t20 through m6-t23 (bubble/insertion, merge, quick, heap sort). update memory when done.` |
| 42 | Sort/Search (part B) | m6-t24 → m6-t27 | `continue Module 6: expand topics m6-t24 through m6-t27 (Big-O, linear search, binary search, hashing). update memory when done.` |
| 43 | Dynamic Programming | m6-t28 → m6-t32 | `continue Module 6: expand topics m6-t28 through m6-t32 (memoization, tabulation, 0/1 knapsack, LCS, coin change/grid DP). update memory when done.` |
| 44 | Greedy | m6-t33 → m6-t36 | `continue Module 6: expand topics m6-t33 through m6-t36 (fractional knapsack, activity selection, Huffman, when greedy works). update memory and mark Module 6 + EVERYTHING complete.` |

---

## Tips

- **Work in order** — each prompt picks up where the previous left off.
- **If a session runs short on output**, the memory file's status table tells the next session exactly which topic was last completed. Just paste the same prompt again — I'll skip the done ones and continue.
- **No need to remind me of style** — the memory has it all (analogy, theory, why-it-matters, steps, code, pitfalls, try-it, takeaway).
- **Pacing**: roughly one session per day at 4-6 topics each gives you ~6-7 weeks of background expansion. Pace it however you like.
- **The dev server keeps running** as long as you don't close VS Code. Reload the browser to see new content.
