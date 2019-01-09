# Create a variable and set it as an List
my_list = ["Jacob", "Jay", "Ahmed", "Melissa"]
print(my_list)

# Adds an element onto the end of a List
my_list.append("Matt")
print(my_list)

# Returns the index of the first object with a matching value
print(my_list.index("Matt"))

# Changes a specified element within an List at the given index
my_list[3] = "Toby"
print(my_list)

# Returns the length of the List
print(len(my_list))

# Removes a specified object from an List
my_list.remove("Matt")
print(my_list)

# Removes the object at the index specified
my_list.pop(0)
my_list.pop(0)
print(my_list)

# Creates a tuple, a sequence of immutable Python objects that cannot be changed
my_tuple = ('Python', 100, 'VBA', False)
print(my_tuple)
