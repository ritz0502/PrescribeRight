import pandas as pd
import json

print("Building Knowledge Base ")
try:
    training_df = pd.read_csv('Training.csv')
    diets_df = pd.read_csv('diets.csv')
    precautions_df = pd.read_csv('precautions_df.csv')
    workouts_df = pd.read_csv('workout_df.csv')
    description_df = pd.read_csv('description.csv')
    print("All datasets loaded successfully.")
except FileNotFoundError as e:
    print(f"Error loading datasets: {e}")
    exit()

diseases = training_df['prognosis'].unique()
knowledge_base = {}

print(f"Found {len(diseases)} unique diseases. Compiling knowledge base...")

for disease in diseases:
    description_data = description_df[description_df['Disease'] == disease]
    description = description_data['Description'].iloc[0] if not description_data.empty else "No description available."
    
    diets_data = diets_df[diets_df['Disease'] == disease]
    diets = eval(diets_data['Diet'].iloc[0]) if not diets_data.empty else []

    workouts_data = workouts_df[workouts_df['disease'] == disease]
    workouts = workouts_data['workout'].tolist()

    precautions = []
    prec_row = precautions_df[precautions_df['Disease'] == disease]
    if not prec_row.empty:
        precautions = [p for p in prec_row.iloc[0, 1:].tolist() if pd.notna(p)]

    knowledge_base[disease] = {
        "description": description,
        "diets": diets,
        "precautions": precautions,
        "workouts": workouts
    }

with open('knowledge_base.json', 'w') as f:
    json.dump(knowledge_base, f, indent=2)

print("\n 'knowledge_base.json' created successfully!")