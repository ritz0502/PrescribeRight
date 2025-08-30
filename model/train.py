import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
import pickle

print("--- Starting Final Model Training ---")
try:
    df = pd.read_csv('Training.csv')
    print("Training.csv dataset loaded successfully.")
except FileNotFoundError:
    print("Error: 'Training.csv' not found.")
    exit()

#Prepare the data 
X = df.drop('prognosis', axis=1)
y = df['prognosis']
symptom_columns = X.columns.tolist()

le = LabelEncoder()
y_encoded = le.fit_transform(y)

X_train, X_test, y_train_encoded, y_test_encoded = train_test_split(X, y_encoded, test_size=0.2, random_state=42, stratify=y_encoded)
print("Data split and label encoded.")

# Train the highly accurate SVC model
model = SVC(kernel='linear', probability=True, random_state=42)
model.fit(X_train, y_train_encoded)
print("SVC model training complete.")

accuracy = accuracy_score(y_test_encoded, model.predict(X_test))
print(f" SVC Model Accuracy: {accuracy * 100:.2f}%")


with open('disease_model_final.pkl', 'wb') as f:
    pickle.dump({
        'model': model,
        'symptom_columns': symptom_columns,
        'label_encoder': le  
    }, f)

print("model, columns, AND label encoder saved to 'disease_model_final.pkl'.")