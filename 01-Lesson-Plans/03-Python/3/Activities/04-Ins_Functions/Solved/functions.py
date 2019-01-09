################################################################################
# Basic function
################################################################################

# Prints Hello!
def print_hello():
    print("Hello!")


# Call the function within the application to ensure the code is run
print_hello()

################################################################################
# Functions that take in and use parameters can also be defined
################################################################################

# Prints Hello <name>!
def print_name(name):
    print("Hello " + name + "!")


# When calling a function with a parameter, a parameter must be passed into the function
print_name("Bob Smith")

################################################################################

# The prime use case for functions is in being able to run the same code for different values
list_one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list_two = [11, 12, 13, 14, 15]


def list_information(simple_list):
    print(f"The values within the list are...")
    for value in simple_list:
        print(value)
    print("The length of this list is... " + str(len(simple_list)))


list_information(list_one)
list_information(list_two)

################################################################################

# Functions can have more than one parameter
def make_quesadilla(protein, topping):
    quesadilla = f"Here is a {protein} quesadilla with {topping}"
    print(quesadilla)


# Supply the arguments (values) when calling the function
make_quesadilla("beef", "guacamole")
make_quesadilla("chicken", "salsa")

# @NOTE: Order is important when supplying arguments!
make_quesadilla("sour cream", "beef")

################################################################################

# We can also specify default values for parameters
def make_quesadilla(protein, topping="sour cream"):
    quesadilla = f"Here is a {protein} quesadilla with {topping}"
    print(quesadilla)


# Make a quesadilla using the default topping
make_quesadilla("chicken")

# Make a quesadilla with a new topping
make_quesadilla("beef", "guacamole")

################################################################################
# Functions can return a value
################################################################################

def square(number):
    return number * number

# You can save the value that is returned
squared = square(2)
print(squared)

# You can also just print the return value of a function
print(square(2))
print(square(3))
