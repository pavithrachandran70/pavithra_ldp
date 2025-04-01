def assign_items_to_users(users, locations):
    assignments = {}

    for user, preferences in users.items():
        for item in preferences:
            # Simply assign the first preference without checking other users
            assignments[user] = item
            break  # Once the first preference is assigned, stop

    return assignments

users = {
    "Ram": ["Chennai", "Banglore"],
    "Ravi": ["Chennai", "Hyderabad"],
    "Sanjay": ["Hyderabad", "Banglore"],
    "Anil": ["Banglore", "Chennai"],
    "Veda": ["Chennai", "Banglore"],
    "pavithra": ["hyderabad", "Banglore"]  # New user
}
locations = ["Chennai", "Banglore", "Hyderabad"]

result = assign_items_to_users(users, locations)
print(result)
