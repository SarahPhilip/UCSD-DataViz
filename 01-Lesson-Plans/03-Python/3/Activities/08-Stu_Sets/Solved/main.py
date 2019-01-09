jay = {
	'name': 'Jay',
	'breed': 'Labrador Retriever',
	'color': 'yellow',
	'age': 14.75,
	'toys': ['tennis ball', 'sqeaky duck', 'stuffed animal'],
}

denver = {
	'name': 'Denver',
	'breed': 'Golden Retriever',
	'color': 'golden brown',
	'age': 8,
	'toys': ['stuffed animal', 'tennis ball', 'rawhide bone'],
}

def all_toys(dog1, dog2):
	dog1_toys = set(dog1['toys'])
	dog2_toys = set(dog2['toys'])
	return dog1_toys.union(dog2_toys)

def favorite_toys(dog1, dog2):
	dog1_toys = set(dog1['toys'])
	dog2_toys = set(dog2['toys'])
	return dog1_toys.intersection(dog2_toys)

print('Jay and Denver have these toys:')
print(all_toys(jay, denver))

print('The toys I will need are:')
print(favorite_toys(jay, denver))
