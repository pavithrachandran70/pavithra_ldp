def allocate_locations(people_preferences, vacancies): allocations = {}

for person, preferences in people_preferences.items():
    for choice in preferences:
        if vacancies[choice] > 0:
            allocations[person] = choice
            vacancies[choice] -= 1
            break
    else:
        allocations[person] = "Not Allocated"  # If no preference is available

return allocations

people_preferences = { "Person1": ["Chennai", "Mumbai", "Bangalore"], 
                      "Person2": ["Mumbai", "Chennai", "Bangalore"], 
                      "Person3": ["Bangalore", "Mumbai", "Chennai"],
                      "Person4": ["Chennai", "Bangalore", "Mumbai"], 
                      "Person5": ["Mumbai", "Chennai", "Bangalore"], 
                      "Person6": ["Chennai", "Mumbai", "Bangalore"], 
                      "Person7": ["Bangalore", "Mumbai", "Chennai"], 
                      "Person8": ["Mumbai", "Chennai", "Bangalore"], 
                      "Person9": ["Chennai", "Mumbai", "Bangalore"],
                      "Person10": ["Mumbai", "Chennai", "Bangalore"] 
                     }

vacancies = {"Chennai": 5, "Mumbai": 4, "Bangalore": 1}

allocations = allocate_locations(people_preferences, vacancies) print(allocations)
