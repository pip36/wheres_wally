# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def addCharacters(imageID, names, positions)
  image = Image.find(imageID)
  (0...names.count).each do |i|
    image.characters.create(name: names[i], positionX: positions[i][0], positionY: positions[i][1])
  end
end

Image.create(title: "The Fighting Foresters", width: 3559, height:2253, src:"TheFightingForesters.jpg");
Image.create(title: "The Gobbling Gluttons", width: 3559, height:2253, src:"TheGobblingGluttons.jpeg");
Image.create(title: "The Knights of the Magic Flag", width: 3559, height:2253, src:"TheKnightsOfTheMagicFlag.jpg");
Image.create(title: "The Underground Hunters", width: 3559, height:2253, src:"TheUndergroundHunters.jpg");
Image.create(title: "The Unfriendly Giants", width: 3559, height:2253, src:"TheUnfriendlyGiants.jpg");

@names = ["Wally", "Wenda", "Wizard Whitebeard", "Woof", "Odlaw"]

addCharacters(0, @names, [[2213,758],[1459,1647],[3372,704],[309,1916],[2634,1654]]);
addCharacters(1, @names, [[1600,622],[1097,587],[2381,1504],[1918,1089],[1133,1068]]);
addCharacters(2, @names, [[860,1561],[2930,1605],[1604,200],[2615,725],[244,1708]]);
addCharacters(3, @names, [[3083,912],[2519,110],[2260,801],[3151,211],[582,106]]);
addCharacters(4, @names, [[643,1497],[2467,1800],[3419,1742],[89,1664],[2092,2033]]);
