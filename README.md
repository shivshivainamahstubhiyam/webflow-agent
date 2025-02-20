# Wake Vision Challenge

## Overview

This competition challenges participants to push the boundaries of ultra-low-power tiny computer vision through two distinct tracks:

1. **Data-centric track**: Enhance data quality to improve the test accuracy of a fixed model.
2. **Model-centric track**: Innovate model architecture to achieve high test accuracy while minimizing resource usage.

Participants will work on the common edge AI use-case of identifying whether a person is present in the image or not, leveraging the newly released [Wake Vision dataset](https://wakevision.ai/), designed specifically for resource-constrained, ultra-low-power devices.

## To Start

1. **Login or create an Edge AI Labs account** [here](https://edgeai.modelnova.ai/signup?returnUrl=/challenges/details/1).

2. **Join the Wake Vision Challenge** by clicking the Join button at the top of the challenge page.

3. **Fork the repository of your interest:**
    - Data-centric track: [Wake Vision Challenge Data-Centric Track](https://github.com/harvard-edge/Wake_Vision_Challenge_Data_Centric_Track)
    - Model-centric track: [Wake Vision Challenge Model-Centric Track](https://github.com/harvard-edge/Wake_Vision_Challenge_Model_Centric_Track)

4. **Start working with the Python script inside**.

You can participate in both tracks simultaneously.

## Submission

Submissions must be made using the “Submissions” panel of this page, providing the link to your forked GitHub repository inside the “Submission Link” field.

Your forked GitHub repository must contain:

- The script adopted for designing and training the model (model-centric track) or enhancing data quality (data-centric track).
- A trained model file in the “.tflite” format.
- A brief technical report describing the approach, including the names of the participants.

You can update your submission as many times as you like until 23:59 Eastern Standard Time (EST) on February 16th.

## Score

- **Data-centric track**: The score corresponds to the test accuracy of the submitted model computed over a private test set that will be published after the end of submissions.
- **Model-centric track**: The score is computed by considering both the test accuracy, computed over the private test, and the deployability of the resulting model onto common microcontrollers, equally weighting Flash, RAM, and MACs.

The adopted scoring function is reported below:

```
1/2 Test Accuracy + 1/2 [1 - (1/3 Flash + 1/3 RAM + 1/3 MACs)]
```

All quantities (Flash, RAM, MACs, and Test Accuracy) are normalized among participants using min-max normalization to obtain a score in the interval [0;1].

In detail, Flash, RAM, and MACs are computed using [STM32Cube.AI](https://stm32ai-cs.st.com/home). For further information see “How to measure RAM, Flash, and MACs of your model?” in the FAQ section below.

## Leaderboard

After your first submission, a script will periodically clone your repository, assess your model on the public test set, and update the Wake Vision Leaderboard (Coming soon!).

After the closing of submissions, a final leaderboard will be produced based on the results obtained on the private test set. The private test set will be made publicly available thereafter.