def allocate_locations(preferences, location_vacancies):
    allocations = {}

    for person, person_preferences in preferences.items():
        for choice in person_preferences:
            if location_vacancies.get(choice, 0) > 0:
                allocations[person] = choice
                location_vacancies[choice] -= 1
                break
        else:
            allocations[person] = "Not Allocated"   

    return allocations


preferences = {
    "Person1": ["Chennai", "Mumbai", "Bangalore"],
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

location_vacancies = {"Chennai": 5, "Mumbai": 4, "Bangalore": 1}

allocations = allocate_locations(preferences, location_vacancies)
print(allocations)
