# EarthBrain
A Unique Approach to Efficient Crowd-Sourced Mental Health Assistance

## Our Inspiration
 - 1 in 5 U.S. adults experience mental illness each year, 53 million people in 2020
 - 1 in 6 U.S. youth, aged 6-17, experience a mental health disorder each year
 - The average delay between onset of mental illness symptoms and treatment is 11 years
 - 155 million people live in a designated Mental Health Professional Shortage Area
 - Inadequate treatment can lead to substance abuse, academic and social harm, and negative consequences on relationships, economic productivity, and more

We recognize the **detrimental impacts** of mental health illnesses, as well as the damage that can be caused by delayed treatment, and we were inspired by this **pressing crisis** to create an **affordable and easily accessible** solution. EarthBrain seeks to address this issue by providing an **efficient** discussion forum that is tailored towards **positive and supportive conversations** around mental health between **anonymous** users with **similar** interests. For more information on the background of our product, the mental health crisis in the US, our ideas for future improvement, and more, feel free to watch this video [link](https://youtu.be/M5ByxxM7T4c).

## What it does
Welcome to EarthBrain, a novel, crowd-sourced mental health assistance forum that matches anonymous users and allows them to have constructive and positive discussions about similar issues or stresses. Communication is vital to providing adequate and targeted mental health treatment that is closely aligned with patients' needs. Our product seeks to do this by connecting users with similar struggles and providing additional resources to connect with licensed therapists and healthcare providers. EarthBrain is especially important as we understand that it is often difficult for many to express their mental health concerns due to fear of judgment or being ignored. 
To perform the matching, our recommendation algorithm creates a score based on users' age and interests and compares it with others' scores to find the greatest similarity. Our machine learning sentiment classifier ensures all posts are positive and maintain a healthy and compassionate environment, while those that contain hate speech or other offensive/unhelpful/derogatory language are taken down. To watch a demonstration, check out this [link](https://youtu.be/XMhXT2ROyDI)

## How we built it
Our process was split into five parts:
1. Training the sentiment classifier - [Colab notebook](https://colab.research.google.com/drive/1n7WnUN2BTdIo-yPqCW_42_uHZyLF5PS4?usp=sharing)
2. Building the UI interface
3. Persisting data to firebase
4. Building the recommendation algorithm
5. Integrating the recommendation + vetting algorithms, connecting the database and frontend

## User Safety, Privacy, and Security
 - Users post anonymously, this ensures that people aren’t dissuaded from sharing
 - All data is stored using Firebase, which encrypts data in transit using HTTPS (Firebase)
 - ML algorithm that vetts negative or unconstructive comments to prevent the propagation of hateful and unproductive comments
 - Maintains a compassionate and open environment where users are assured positive feedback
Easy access to other mental health resources such as licensed therapists and counselor's information, 

## User Experience
 - Minimalist  UI interface allows for simple and efficient communication between users
 - Publicly sourced responses allow for fast response times, while the recommendation algorithm promotes responses from users with similar stresses

## Challenges we ran into
 - Optimizing the sentiment classification algorithm to increase accuracy
 - Designing the UI interface and improving the user experience

## Accomplishments that we're proud of
 - Finetuning the vetting algorithm
 - Creating a clean and simple UI

## What's next for EarthBrain
 - Creating a native app to supplement the website and improve user experience on mobile devices
 - Increased accuracy and speed of the vetting system by utilizing higher-quality and larger datasets, and optimizing the network architecture
 - Enhanced recommendation algorithm by better understanding the similarities and differences between users’ causes of stress
 - Removing/blocking IP addresses that have repeatedly posted hateful feedback in order to maintain a positive online community

## How to run the code:

1. Download the vectorizer from this link - 
2. Download the classifier from this link - 
3. Download the flask api from this link - 
4. Create a folder EARTHBRAIN
5. Move the downloaded files into EARTHBRAIN/
6. cd EARTHBRAIN
7. Run npx create-react-app earth_brain
8. Download all the files from this github repo
9. Move the files downloaded from github into EARTHBRAIN/earth_brain/src/
10. Run SentimentServer.py
11. cd earth_brain
12. Run - npm start - to start the frontend
