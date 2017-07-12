# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Enter ID of New Image
@image = Image.find(5)
@names = ["Wally", "Wenda", "Wizard Whitebeard", "Woof", "Odlaw"]
#fill in the positions of each character IN ABOVE ORDER [X,Y]
@positions = [[2213,758],[1459,1647],[3372,704],[309,1916],[2634,1654]]

(0..4).each do |i|
  @image.characters.create(name: @names[i], positionX: @positions[i][0], positionY: @positions[i][1])
end
